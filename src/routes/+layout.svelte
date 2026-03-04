<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/organisms/footer.svelte';
	import Header from '$lib/components/organisms/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mistral models rebranding</title>
	<meta name="description" content="Mistral models rebranding" />
	<link rel="icon" href={favicon} />
</svelte:head>
<div
	class="relative flex h-auto min-h-dvh w-full flex-col bg-mistral-bg-yellow font-light tracking-normal text-mistral-text-1"
>
	<Header />
	<main class="flex flex-col items-center">
		{@render children()}
	</main>

	<Footer />
</div>
