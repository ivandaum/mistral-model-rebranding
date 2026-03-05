<script lang="ts">
	import { onMount } from 'svelte';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';
	import { FREE_MODELS } from '$lib/data/wording';

	import arrow from '$lib/assets/chevron-right.svg';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import CardModelSmall from '../modules/card-model-small.svelte';

	let element: HTMLElement | undefined = $state();
	let show = $state(false);

	onMount(() => {
		if (!element) return;

		// Trigger when element enters the viewport
		const obs = observer({
			element,
			onShow: () => (show = true),
			rootMargin: '0px 0px -150px 0px'
		});

		return () => {
			obs.destroy();
		};
	});
</script>

<section class={'flex w-full flex-col'} bind:this={element} id="free">
	<div class="m-auto flex max-w-7xl flex-col items-center overflow-hidden px-4">
		<Subtitle
			headline="Free open-weight models for research."
			text="Free to use under the Apache 2.0 license."
			class="w-full"
			heading="h3"
		/>
		<div class="grid-wrap mb-4 grid w-full grid-cols-1 gap-4 md:grid-cols-4">
			{#each FREE_MODELS as model, i}
				<CardModelSmall
					{model}
					style={`--delay: ${i * 100}ms`}
					class={cn({
						'translate-x-8': !show
					})}
				/>
			{/each}
		</div>

		<Cta href="https://docs.mistral.ai/getting-started/models" text="Download weights" />
	</div>
</section>
