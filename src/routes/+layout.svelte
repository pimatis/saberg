<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    :global(body) {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
    }

    :global(h1) {
        font-family: 'EB Garamond', serif;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-150px * 8));
        }
    }

    :global(.animate-scroll) {
        animation: scroll 40s linear infinite;
    }

    @media (min-width: 768px) {
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-200px * 8));
            }
        }
    }

    @media (min-width: 1024px) {
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-250px * 8));
            }
        }
    }
</style>
