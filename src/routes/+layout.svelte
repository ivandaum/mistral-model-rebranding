<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="relative flex h-auto min-h-dvh w-full flex-col bg-mistral-bg-yellow text-mistral-text-1"
>
	<Header />
	<main class="flex flex-col items-center">
		{@render children()}
	</main>

	<Footer />
</div>
