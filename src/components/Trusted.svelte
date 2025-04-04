<script>
  let companies = [
      {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
      },
      {
        name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
      },
      {
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
      },
      {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
      },
      {
        name: 'Meta',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
      },
      {
        name: 'Netflix',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      },
      {
        name: 'IBM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
      },
      {
        name: 'Intel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg'
      },
      {
        name: 'Samsung',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
      },
      {
        name: 'Salesforce',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
      },
      {
        name: 'LinkedIn',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
      },
  ];
</script>

<div class="w-full bg-white/5 relative overflow-hidden py-4 md:py-6 lg:py-10">
    <div class="text-center mb-4 md:mb-6 lg:mb-10 opacity-50 px-2 md:px-4 lg:px-6">
        <h3 class="text-sm md:text-base lg:text-lg font-semibold">Trusted by Industry Leaders</h3>
        <p class="text-xs md:text-sm lg:text-base opacity-70 mt-1 md:mt-1.5 lg:mt-2">Join thousands of companies using SABERG for smart nutrition</p>
    </div>

    <div class="flex items-center space-x-4 md:space-x-8 lg:space-x-16 animate-scroll">
        {#each companies as company}
            <div class="flex-shrink-0">
                <img src={company.logo} alt={company.name} class="h-3 md:h-4 lg:h-5 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-pointer" />
            </div>
        {/each}
        {#each companies as company}
            <div class="flex-shrink-0">
                <img src={company.logo} alt={company.name} class="h-3 md:h-4 lg:h-5 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
        {/each}
        {#each companies as company}
            <div class="flex-shrink-0">
                <img src={company.logo} alt={company.name} class="h-3 md:h-4 lg:h-5 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
        {/each}
        {#each companies as company}
            <div class="flex-shrink-0">
                <img src={company.logo} alt={company.name} class="h-3 md:h-4 lg:h-5 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
        {/each}
        {#each companies as company}
            <div class="flex-shrink-0">
                <img src={company.logo} alt={company.name} class="h-3 md:h-4 lg:h-5 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
        {/each}
    </div>
</div>
