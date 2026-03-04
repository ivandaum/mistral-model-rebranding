<script lang="ts">
	import { onMount } from 'svelte';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';
	import Parallax from '$lib/components/atoms/parallax.svelte';
	import { MODELS_EXAMPLES } from '$lib/data/wording';

	const sections = [
		{
			classNames: 'z-1',
			range: [-2, 2],
			images: <[number, string][]>[
				[0, '-translate-x-[27vw] -translate-y-[10vh]'],
				[1, 'translate-x-[35vw] translate-y-[15vh]'],
				[2, '-translate-x-[15vw] translate-y-[15vh]']
			]
		},
		{
			classNames: 'z-2',
			range: [-5, 5],
			images: <[number, string][]>[
				[3, 'translate-x-[37vw] -translate-y-[10vh]'],
				[4, '-translate-x-[40vw]'],
				[5, '-translate-x-[30vw] translate-y-[17vh]'],
				[6, 'translate-x-[13vw] translate-y-[22vh]']
			]
		}
	];
</script>

<section class="relative my-30 flex w-full items-center justify-center overflow-hidden">
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

	{#each sections as section}
		<Parallax
			min={section.range[0]}
			max={section.range[1]}
			class={['absolute top-0 h-full w-full max-w-7xl', section.classNames]}
		>
			<div class="flex h-full w-full translate-y-(--y) items-center justify-around px-[10%]">
				{#each section.images as [index, className]}
					<img
						class={['absolute size-14 md:size-24', className]}
						src={MODELS_EXAMPLES[index].image}
						alt={MODELS_EXAMPLES[index].title}
					/>
				{/each}
			</div></Parallax
		>
	{/each}
</section>
