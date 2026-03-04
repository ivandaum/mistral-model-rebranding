<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';
	import Parallax from '$lib/components/atoms/parallax.svelte';

	let containerEl: HTMLElement | undefined = $state();
</script>

<section class="relative my-10 w-full overflow-hidden" bind:this={containerEl}>
	<div class="relative z-5 flex w-full flex-col justify-center bg-fixed px-4">
		<Title
			headline="Ready to get started?"
			heading="h2"
			class="m-auto w-full max-w-7xl translate-y-(--y) pt-50 pb-50"
		>
			<Cta href="https://mistral.ai/contact" text="Get your commercial license" />
		</Title>
	</div>

	<Parallax min={-10} max={10} class="absolute top-0 left-0 h-full w-full">
		<BackgroundGrid class="z-1 h-[200%] w-full translate-y-(--y)" />
	</Parallax>
</section>
