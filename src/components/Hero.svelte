<script>
    let users = [
      {
        avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Alex"
      },
      {
        avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=John"
      },
      {
        avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Jane"
      },
      {
        avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Mike"
      },
      {
        avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Sarah"
      }
    ]
</script>

<div class="w-full items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-96 py-20 sm:py-12 md:py-20 lg:py-32 relative overflow-hidden">
    <div class="space-y-4 sm:space-y-6 md:space-y-8 text-center relative z-10">
        <div class="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Smart Nutrition, Smarter You
            </h1>
        </div>
        <p class="opacity-70 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
            Achieve your health goals with SABERG's AI-powered personalized meal plans and instant calorie tracking. Our advanced artificial intelligence analyzes your dietary preferences, fitness goals, and lifestyle to create customized nutrition plans that work for you.
        </p>
        <div class="flex gap-2 sm:gap-3 md:gap-4 justify-center">
            <a href="/start" class="bg-[#2d8cc8] hover:bg-[#1e70ab]/90 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 text-white rounded-md transition cursor-pointer text-xs sm:text-sm md:text-base flex items-center justify-center">
                Get Started
            </a>
            <a href="#features" class="border border-[#2d8cc8] px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 text-[#2d8cc8] rounded-md hover:bg-[#2d8cc8]/10 transition cursor-pointer text-xs sm:text-sm md:text-base flex items-center justify-center">
                Learn More
            </a>
        </div>
        <div class="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <div class="flex items-center justify-center -space-x-1.5 sm:-space-x-2">
                {#each users as user}
                    <img
                        src={user.avatar}
                        alt="User"
                        class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white border border-black/10"
                    />
                {/each}
                <div class="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-7 lg:w-9 lg:h-8 rounded-full bg-white border border-black/10 text-[8px] sm:text-[10px] md:text-xs flex items-center justify-center text-black">
                    +2k
                </div>
            </div>
            <p class="opacity-50 text-[10px] sm:text-xs md:text-sm mt-1.5 sm:mt-2">
                Joined by 2,000+ health enthusiasts
            </p>
        </div>
    </div>
</div>
