<script lang="ts">
  let successStories = [
      {
          name: "Emma Johnson",
          age: 32,
          story: "After struggling with my weight for years and trying countless diets, I finally lost 15kg in 3 months with SABERG. The AI meal planner helped me stick to healthy portions while juggling my job and two kids. For the first time, I feel in control of my eating habits.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=Emma"
      },
      {
          name: "David Chen",
          age: 45,
          story: "My doctor told me I was heading towards type 2 diabetes with my A1C at 6.4%. SABERG's personalized meal plans helped me understand proper nutrition. After 6 months, my A1C dropped to 5.5% and I've maintained healthy blood sugar levels since.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=David"
      },
      {
          name: "Sophia Rodriguez",
          age: 28,
          story: "Training for the national championships was intense, but SABERG made nutrition one less thing to worry about. The precise macro tracking helped me fuel properly for 20+ hours of weekly training while maintaining peak performance. I shaved 2 minutes off my personal best.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=Sophia"
      },
      {
          name: "Michael Taylor",
          age: 35,
          story: "I gained 8kg of lean muscle in 6 months using SABERG's customized meal plans. The app helped me hit my protein goals and time my meals perfectly around workouts. My bench press increased by 30kg and I still maintain visible abs.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=Michael"
      },
      {
          name: "Sarah Williams",
          age: 41,
          story: "Living with Hashimoto's disease meant constantly watching what I eat. SABERG identified trigger foods and created anti-inflammatory meal plans that work for me. My antibody levels have decreased and I have so much more energy throughout the day.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=Sarah"
      },
      {
          name: "James Liu",
          age: 29,
          story: "As a competitive cyclist on a plant-based diet, getting enough protein was always challenging. SABERG helped me discover new protein sources and properly time my nutrition. My power output increased by 15% and post-ride soreness decreased significantly.",
          beforeImage: "https://api.dicebear.com/9.x/lorelei/svg?seed=James"
      }
  ];
</script>

<div class="w-full items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12 lg:py-16 relative overflow-hidden my-8 md:my-12 lg:my-16 bg-white">
    <div class="space-y-6 md:space-y-8 lg:space-y-10">
        <div class="text-center">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">Success Stories</h1>
            <p class="opacity-70 max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-sm md:text-base lg:text-lg">Real results from real people who transformed their health journey with SABERG's AI-powered nutrition platform.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {#each successStories as story}
                <div class="p-4 md:p-6 lg:p-8 rounded-md border border-black/10 bg-white space-y-3 md:space-y-4 lg:space-y-5">
                    <div class="relative flex items-center justify-between">
                        <div>
                            <h3 class="text-base md:text-lg lg:text-xl font-semibold">{story.name}</h3>
                            <p class="opacity-50 text-xs md:text-sm lg:text-base">{story.age} years old</p>
                        </div>
                        <img src={story.beforeImage} alt="{story.name} before" class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-black/10" />
                    </div>

                    <p class="opacity-70 text-xs md:text-sm lg:text-base">"{story.story}"</p>
                </div>
            {/each}
        </div>

        <div class="text-center">
            <p class="opacity-50 text-xs md:text-sm lg:text-base">100+ more people like these have transformed their lives with SABERG</p>
        </div>
    </div>
</div>
