<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';
	import Parallax from '$lib/components/atoms/parallax.svelte';
	import { MODELS_EXAMPLES } from '$lib/data/wording';

	let containerEl: HTMLElement | undefined = $state();

	// const parallaxSections = [
	// 	{
	// 		min: -2,
	// 		max: 2,
	// 		images: [0],
	// 		inlineClass: '-translate-y-[-10vh] -translate-x-[25vw]'
	// 	},
	// 	{
	// 		min: -5,
	// 		max: 5,
	// 		images: [1],
	// 		inlineClass: 'translate-x-[25vw]'
	// 	},
	// 	{
	// 		min: -10,
	// 		max: 10,
	// 		images: [2, 3],
	// 		inlineClass: '-translate-x-[5vw] -translate-y-[10vh]'
	// 	},
	// 	{
	// 		min: -3,
	// 		max: 3,
	// 		images: [4, 5, 6],
	// 		inlineClass: ''
	// 	}
	// ];
</script>

<section
	class="relative my-10 flex w-full items-center justify-center overflow-hidden"
	bind:this={containerEl}
>
	<div class="relative z-5 flex w-full flex-col justify-center px-4">
		<Title
			headline="Ready to get started?"
			heading="h2"
			class="m-auto w-full max-w-7xl translate-y-(--y) pt-50 pb-50"
		>
			<Cta href="https://mistral.ai/contact" text="Get your commercial license" />
		</Title>
	</div>

	<BackgroundGrid class="h-ful absolute top-0 left-0 z-1 w-full" />
	<!-- <Parallax min={-10} max={10} class="absolute top-0 left-0 h-full w-full">
	</Parallax> -->

	<Parallax min={-2} max={2} class="absolute top-0 z-2 h-full w-full max-w-7xl">
		<div class="flex h-full w-full translate-y-(--y) items-center justify-around px-[10%]">
			<img
				class={['absolute size-32 -translate-x-[35vw] -translate-y-[15vh]']}
				src={MODELS_EXAMPLES[0].image}
				alt={MODELS_EXAMPLES[0].title}
			/>
			<img
				class={['absolute size-24 translate-x-[35vw] translate-y-[15vh]']}
				src={MODELS_EXAMPLES[1].image}
				alt={MODELS_EXAMPLES[1].title}
			/>
			<img
				class={['absolute size-24 -translate-x-[15vw] translate-y-[15vh]']}
				src={MODELS_EXAMPLES[2].image}
				alt={MODELS_EXAMPLES[2].title}
			/>
		</div>
	</Parallax>
	<Parallax min={-5} max={5} class="absolute top-0 z-2 h-full w-full max-w-7xl">
		<div class="flex h-full w-full translate-y-(--y) items-center justify-around px-[10%]">
			<img
				class={['absolute translate-x-[37vw] -translate-y-[10vh]']}
				src={MODELS_EXAMPLES[3].image}
				alt={MODELS_EXAMPLES[3].title}
			/>
			<img
				class={['absolute size-24 -translate-x-[40vw]']}
				src={MODELS_EXAMPLES[4].image}
				alt={MODELS_EXAMPLES[4].title}
			/>
			<img
				class={['absolute size-32 -translate-x-[30vw] translate-y-[17vh]']}
				src={MODELS_EXAMPLES[5].image}
				alt={MODELS_EXAMPLES[5].title}
			/>
			<img
				class={['absolute size-24 translate-x-[13vw] translate-y-[22vh]']}
				src={MODELS_EXAMPLES[6].image}
				alt={MODELS_EXAMPLES[6].title}
			/>
		</div>
	</Parallax>
</section>
