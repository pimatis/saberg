<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import { groq } from '$lib/ai/groq/main';

    let age: number | null = null;
    let weight: number | null = null;
    let calories: number | null = null;
    let activityLevel: string = 'moderate';
    let dietPlan: string = '';
    let isLoading: boolean = false;
    let isGenerated: boolean = false;
    let dietContainerRef: HTMLElement;

    const activityOptions = [
      { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
      { value: 'light', label: 'Light (exercise 1-3 times/week)' },
      { value: 'moderate', label: 'Moderate (exercise 3-5 times/week)' },
      { value: 'active', label: 'Active (exercise 6-7 times/week)' },
      { value: 'very_active', label: 'Very Active (intense exercise daily)' }
    ];

    async function generateDietPlan() {
      if (!age || !weight || !calories) {
        alert('Please fill all required fields');
        return;
      }

      isLoading = true;

      try {
        dietPlan = await groq(age, calories, weight, activityLevel);
        isGenerated = true;
      } catch (error) {
        console.error('Error generating diet plan:', error);
        alert('Failed to generate diet plan. Please try again later.');
      } finally {
        isLoading = false;
      }
    }
</script>

<Navbar />

<div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-4xl space-y-8 md:space-y-12">
        <div class="text-center">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Generate Your Personalized Diet Plan</h1>
            <p class="text-sm md:text-base opacity-70 max-w-xl md:max-w-2xl mx-auto">Create a customized weekly diet plan based on your personal details and nutritional goals</p>
        </div>

        {#if !isGenerated}
            <div class="space-y-6 md:space-y-8 max-w-3xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div class="space-y-2">
                        <label for="age" class="block text-sm md:text-base font-medium">Age <span class="text-[#2d8cc8]">*</span></label>
                        <input type="number" id="age" bind:value={age} min="1" max="120" class="w-full p-2 md:p-3 text-sm md:text-base rounded-md border border-black/10 focus:border-[#2d8cc8] focus:ring-1 focus:ring-[#2d8cc8] outline-none" placeholder="Enter your age" />
                    </div>

                    <div class="space-y-2">
                        <label for="weight" class="block text-sm md:text-base font-medium">Weight (kg) <span class="text-[#2d8cc8]">*</span></label>
                        <input type="number" id="weight" bind:value={weight} min="1" max="300" class="w-full p-2 md:p-3 text-sm md:text-base rounded-md border border-black/10 focus:border-[#2d8cc8] focus:ring-1 focus:ring-[#2d8cc8] outline-none" placeholder="Enter your weight" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div class="space-y-2">
                        <label for="calories" class="block text-sm md:text-base font-medium">Daily Calorie Target <span class="text-[#2d8cc8]">*</span></label>
                        <input type="number" id="calories" bind:value={calories} min="500" max="5000" class="w-full p-2 md:p-3 text-sm md:text-base rounded-md border border-black/10 focus:border-[#2d8cc8] focus:ring-1 focus:ring-[#2d8cc8] outline-none" placeholder="Enter target calories" />
                    </div>

                    <div class="space-y-2">
                        <label for="activity" class="block text-sm md:text-base font-medium">Activity Level <span class="text-[#2d8cc8]">*</span></label>
                        <select id="activity" bind:value={activityLevel} class="w-full p-2 md:p-3 text-sm md:text-base rounded-md border border-black/10 focus:border-[#2d8cc8] focus:ring-1 focus:ring-[#2d8cc8] outline-none">
                            {#each activityOptions as option}
                                <option value={option.value}>{option.label}</option>
                            {/each}
                        </select>
                    </div>
                </div>

                <div class="flex gap-4 justify-center">
                    <button on:click={generateDietPlan} class="bg-[#2d8cc8] hover:bg-[#1e70ab]/90 px-4 md:px-8 py-2 text-sm md:text-base text-white rounded-md transition cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading || !age || !weight || !calories || !activityLevel}>
                        {#if isLoading}
                            Generating your diet plan...
                        {:else}
                            Generate Your Diet Plan
                        {/if}
                    </button>
                </div>
            </div>
        {:else}
            <div class="space-y-4 md:space-y-6 max-w-3xl mx-auto">
                <div id="dietContainer" bind:this={dietContainerRef} class="p-4 md:p-8 rounded-md border border-black/10 bg-white space-y-4 md:space-y-6">
                    <div>
                        <h4 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">WEEKLY DIET PLAN</h4>
                        <div class="whitespace-pre-line text-sm md:text-base">
                            {dietPlan}
                        </div>
                    </div>

                    <div class="text-right mt-4 md:mt-6 text-[#2d8cc8] font-bold">
                        SABERG
                    </div>
                </div>

                <div class="flex gap-4 justify-center">
                <button on:click={() => isGenerated = false} class="border border-[#2d8cc8] px-4 md:px-8 py-2 text-sm md:text-base text-[#2d8cc8] rounded-md hover:bg-[#2d8cc8]/10 transition cursor-pointer">
                    Create New Plan
                </button>
                </div>
            </div>
        {/if}

        <div class="text-center opacity-70 max-w-xl md:max-w-2xl mx-auto text-xs md:text-sm">
            <p>Our AI-powered diet plans are personalized based on your specific needs and goals. For medical conditions or specific dietary requirements, please consult with a healthcare professional.</p>
        </div>
    </div>
</div>

<Footer />
