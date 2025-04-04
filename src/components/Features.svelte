<script>
    let features = [
      {
        title: "Smart Meal Planning",
        description: "Get personalized meal plans based on your dietary preferences and restrictions.",
        icon: "ri-restaurant-fill",
        color: "#2d8cc8"
      },
      {
        title: "Progress Analytics",
        description: "Visualize your nutrition and fitness progress with detailed analytics and insights.",
        icon: "ri-line-chart-fill",
        color: "#2d8cc8"
      },
      {
        title: "Health Coaching",
        description: "Connect with AI-powered health coaches for personalized guidance and motivation.",
        icon: "ri-user-heart-fill",
        color: "#2d8cc8"
      },
      {
        title: "Recipe Generator",
        description: "Discover healthy recipes tailored to your nutritional needs and preferences.",
        icon: "ri-book-2-fill",
        color: "#2d8cc8"
      },
      {
        title: "Community Support",
        description: "Join a community of like-minded individuals on their health journey.",
        icon: "ri-team-fill",
        color: "#2d8cc8"
      },
      {
        title: "Goal Setting",
        description: "Set and track personalized health and nutrition goals with smart milestones.",
        icon: "ri-flag-2-fill",
        color: "#2d8cc8"
      }
    ]
</script>

<div id="features" class="w-full items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12 lg:py-16 relative overflow-hidden my-8 md:my-12 lg:my-16">
    <div class="space-y-6 md:space-y-8 lg:space-y-10">
        <div class="text-center">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">Discover Our Platform</h1>
            <p class="opacity-70 max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-sm md:text-base lg:text-lg">Transform your nutrition journey with SABERG's cutting-edge AI technology. Experience personalized meal planning, instant calorie detection, and comprehensive nutrition tracking - all in one seamless platform.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {#each features as feature}
                <div class="p-4 md:p-6 lg:p-8 rounded-md border border-black/10 bg-white space-y-2 md:space-y-3 lg:space-y-4">
                    <div class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#2d8cc8]/10 rounded-lg flex items-center justify-center">
                        <i class="{feature.icon} text-[#2d8cc8] text-base md:text-lg lg:text-xl"></i>
                    </div>
                    <h3 class="text-base md:text-lg lg:text-xl font-semibold">{feature.title}</h3>
                    <p class="opacity-70 text-xs md:text-sm lg:text-base">{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
