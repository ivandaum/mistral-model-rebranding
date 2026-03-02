<script lang="ts">
	import { COMMERCIAL_MODELS, FREE_MODELS } from '$lib/data/models';
	import { cn } from '$lib/utils/cn';
	import Cta from './cta.svelte';

	import Subtitle from './subtitle.svelte';
</script>

<section class="flex max-w-7xl flex-col px-4">
	<Subtitle
		headline="Tailored for You. <br />Our premier models are designed to be yours to tune, customize, distill, and deploy. "
		text="Available for commercial use."
	/>

	<div class="grid-wrap mb-8 grid w-full grid-cols-2 gap-2">
		{#each COMMERCIAL_MODELS as model, i}
			<div class={cn(['bg-mistral-yellow-' + (i + 1)], 'aspect-4/3 p-8')}>
				<h3 class="text-foreground text-[46px] font-normal">{model.title}</h3>
				<p class="mb-8">{model.intro}</p>
				<p>{model.description}</p>

				<Cta href={model.link}>Learn more</Cta>
			</div>
		{/each}
	</div>

	<Subtitle
		headline="Free open-weight models for research."
		text="Free to use under the Apache 2.0 license."
	/>
	<div class="grid-wrap mb-4 grid w-full grid-cols-4 gap-4">
		{#each FREE_MODELS as model}
			<div class="flex aspect-4/3 flex-col justify-between border border-mistral-yellow-2 p-6">
				<h3 class="flex text-[24px]">
					<img src={model.image} alt="" class="mr-2 w-8" />
					<p>{model.title}</p>
				</h3>
				<p>{model.description}</p>
			</div>
		{/each}
	</div>

	<Cta href="https://docs.mistral.ai/getting-started/models">Download weights</Cta>
</section>
