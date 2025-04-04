<script lang="ts">
    let faqs = [
        {
            question: "How accurate is SABERG's calorie detection?",
            answer: "SABERG uses advanced AI algorithms to provide calorie estimations with 95%+ accuracy for most common foods. Our technology continuously improves through machine learning.",
            isOpen: false
        },
        {
            question: "Can I customize my meal plans?",
            answer: "Yes! Our AI considers your dietary preferences, restrictions, allergies, and fitness goals to create fully personalized meal plans that you can further adjust.",
            isOpen: false
        },
        {
            question: "How does the photo recognition work?",
            answer: "Simply take a photo of your food, and our AI instantly analyzes it to identify ingredients and calculate nutritional values, including calories, proteins, carbs, and fats.",
            isOpen: false
        },
        {
            question: "Is my data secure?",
            answer: "SABERG is completely open source and does not store any personal data. You can verify this in our public repository since all code is transparent and available.",
            isOpen: false
        },
        {
            question: "What makes SABERG different?",
            answer: "SABERG combines cutting-edge AI technology with personalized nutrition science to provide the most accurate and customized healthy eating solutions.",
            isOpen: false
        }
    ];

    function toggleFaq(index: any) {
        faqs = faqs.map((faq, i) => ({
            ...faq,
            isOpen: i === index ? !faq.isOpen : false
        }));
    }
</script>

<div class="w-full items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12 lg:py-16 relative overflow-hidden">
    <div class="space-y-6 md:space-y-8 lg:space-y-10">
        <div class="text-center">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">Frequently Asked Questions</h1>
            <p class="opacity-70 max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-sm md:text-base lg:text-lg">Find answers to common questions about SABERG's AI-powered nutrition platform.</p>
        </div>

        <div class="space-y-3 md:space-y-4 lg:space-y-5 max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
            {#each faqs as faq, index}
                <div class="border border-black/10 rounded-md overflow-hidden bg-white">
                    <button
                        class="w-full p-4 md:p-5 lg:p-6 text-left flex items-center justify-between"
                        on:click={() => toggleFaq(index)}
                    >
                        <span class="font-semibold text-sm md:text-base lg:text-lg">{faq.question}</span>
                        <i class="ri-arrow-down-s-line text-base md:text-lg lg:text-xl transition-transform {faq.isOpen ? 'rotate-180' : ''} opacity-70"></i>
                    </button>
                    {#if faq.isOpen}
                        <div class="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 opacity-70 text-sm md:text-base lg:text-lg">
                            {faq.answer}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
