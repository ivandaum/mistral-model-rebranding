<script lang="ts">
	import { COMMERCIAL_MODELS, FREE_MODELS } from '$lib/data/wording';
	import { cn } from '$lib/utils/cn';
	import Cta from '$lib/components/atoms/cta.svelte';

	import Subtitle from '$lib/components/modules/subtitle.svelte';
</script>

<section class="flex w-full max-w-7xl flex-col px-4">
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
	<div class="flex flex-col items-center">
		<Subtitle
			headline="Free open-weight models for research."
			text="Free to use under the Apache 2.0 license."
			class="w-full"
		/>
		<div class="grid-wrap mb-4 grid w-full grid-cols-4 gap-4">
			{#each FREE_MODELS as model}
				<a
					class={cn(
						'flex aspect-4/3 flex-col justify-between border border-mistral-yellow-2 p-6 ',
						'hover:border-mistral-yellow-2 hover:bg-mistral-yellow-2'
					)}
					href={model.link}
				>
					<h3 class="flex gap-2 text-[24px]">
						<span class={cn('flex size-10 items-center justify-center')}>
							<img src={model.image} alt="" class={cn(model.imageSize)} />
						</span>
						<p>{model.title}</p>
					</h3>
					<p>{model.description}</p>
				</a>
			{/each}
		</div>

		<Cta href="https://docs.mistral.ai/getting-started/models">Download weights</Cta>
	</div>
</section>
