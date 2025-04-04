<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import { geminiImageGen } from "$lib/ai/gemini/main";

    let selectedFile: File | null = null;
    let imagePreview: string | null = null;
    let isLoading = false;
    let calorieResult: string | null = null;
    let error: string | null = null;

    async function handleFileSelect(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            selectedFile = input.files[0];
            imagePreview = URL.createObjectURL(input.files[0]);
        }
    }

    async function analyzeCalories() {
        if (!selectedFile) {
            error = "Please select an image first";
            return;
        }

        try {
            isLoading = true;
            error = null;
            const result = await geminiImageGen(selectedFile);
            calorieResult = result;
        } catch (err) {
            error = "Error analyzing image. Please try again.";
            console.error(err);
        } finally {
            isLoading = false;
        }
    }
</script>

<Navbar />

<div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full space-y-8 sm:space-y-12">
        <div class="text-center">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Calorie Detection</h1>
            <p class="text-sm sm:text-base opacity-70 max-w-xl sm:max-w-2xl mx-auto">Upload a photo of your food to instantly calculate calories using AI.</p>
        </div>

        <div class="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div class="border-2 border-dashed border-black/10 rounded-md p-4 sm:p-6 lg:p-8 text-center">
                <input type="file" accept="image/*" class="hidden" id="fileInput" on:change={handleFileSelect} />
                <label for="fileInput" class="cursor-pointer block">
                    {#if imagePreview}
                        <img src={imagePreview} alt="Preview" class="max-h-48 sm:max-h-56 lg:max-h-64 mx-auto rounded-md"/>
                    {:else}
                        <div class="p-4 sm:p-6 lg:p-8">
                            <i class="ri-image-add-line text-2xl sm:text-3xl lg:text-4xl opacity-50"></i>
                            <p class="mt-2 text-sm sm:text-base opacity-70">Click to upload image</p>
                        </div>
                    {/if}
                </label>
            </div>

            <button on:click={analyzeCalories} class="w-full bg-[#2d8cc8] hover:bg-[#1e70ab]/90 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium disabled:opacity-50 hover:cursor-pointer" disabled={isLoading || !selectedFile}>
                {#if isLoading}
                    Analyzing...
                {:else}
                    Analyze Calories
                {/if}
            </button>

            {#if error}
                <div class="bg-red-50 text-red-500 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base">
                    {error}
                </div>
            {/if}

            {#if calorieResult}
                <div class="rounded-md border border-black/10 p-4 sm:p-6">
                    <h3 class="text-lg sm:text-xl font-semibold mb-2">Analysis Result</h3>
                    <p class="text-sm sm:text-base opacity-70">{calorieResult}</p>
                </div>
            {/if}
        </div>
    </div>
</div>

<Footer />
