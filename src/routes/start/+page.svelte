<script>
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";

    let sections = [
        {
            title: "Personalized Diet Planner",
            description: "Create your personalized diet plan with our advanced meal planning system.",
            link: "/diet-planning"
        },
        {
            title: "Calorie Detector",
            description: "Create your personalized diet plan with our advanced meal planning system.",
            link: "/find-calorie"
        }
    ];
</script>

<Navbar />

<div class="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-96 py-8 sm:py-16 md:py-24 lg:py-32">
    <div class="space-y-8 sm:space-y-12 text-center">
        <div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Where would you like to start?</h1>
            <p class="opacity-70 text-sm sm:text-base">Choose one of our smart features to begin your health journey</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {#each sections as section}
                <a href={section.link} class="p-4 sm:p-6 md:p-8 rounded-md border border-black/10 hover:border-black/15 bg-white space-y-2 sm:space-y-4 cursor-pointer">
                    <h3 class="text-lg sm:text-xl font-semibold">{section.title}</h3>
                    <p class="opacity-70 text-sm sm:text-base">{section.description}</p>
                </a>
            {/each}
        </div>
    </div>
</div>

<Footer />
