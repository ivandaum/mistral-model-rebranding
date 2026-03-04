<script lang="ts">
	import { onMount } from 'svelte';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';
	import { FREE_MODELS } from '$lib/data/wording';

	import arrow from '$lib/assets/chevron-right.svg';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';

	let element: HTMLElement | undefined = $state();
	let show = $state(false);

	onMount(() => {
		if (!element) return;

		const obs = observer({
			element,
			onShow: () => (show = true),
			rootMargin: '0px 0px -350px 0px'
		});

		return () => {
			obs.destroy();
		};
	});
</script>

<section class={'flex w-full flex-col'} bind:this={element}>
	<div class="m-auto flex max-w-7xl flex-col items-center overflow-hidden px-4">
		<Subtitle
			headline="Free open-weight models for research."
			text="Free to use under the Apache 2.0 license."
			class="w-full"
			heading="h2"
		/>
		<div class="grid-wrap mb-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
			{#each FREE_MODELS as model, i}
				<a
					style={`--delay: ${i * 100}ms`}
					class={cn(
						'flex flex-col justify-between border border-mistral-yellow-2 p-6 md:aspect-4/3 ',
						'transition-transform delay-(--delay) duration-500 hover:border-mistral-yellow-2 hover:bg-mistral-yellow-2 hover:[&_p_img]:animate-blink-twice',
						{
							'translate-x-8': !show
						}
					)}
					href={model.link}
				>
					<h3
						class={cn('flex gap-2 text-[24px] delay-(--delay) duration-500', {
							'translate-x-4 opacity-0': !show
						})}
					>
						<span class={cn('flex size-10 items-center justify-center')}>
							<img src={model.image} alt="" class={cn(model.imageSize)} />
						</span>
						<p>{model.title}</p>
					</h3>
					<p class="flex items-center gap-8 pt-4 md:pt-0">
						{model.description}
						<img class="size-4" src={arrow} alt="" />
					</p>
				</a>
			{/each}
		</div>

		<Cta href="https://docs.mistral.ai/getting-started/models" text="Download weights" />
	</div>
</section>
