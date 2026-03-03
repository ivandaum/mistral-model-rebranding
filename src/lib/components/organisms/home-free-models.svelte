<script lang="ts">
	import { FREE_MODELS } from '$lib/data/wording';

	import { cn } from '$lib/utils/cn';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
</script>

<section class="flex w-full flex-col">
	<div class="m-auto flex max-w-7xl flex-col items-center px-4">
		<Subtitle
			headline="Free open-weight models for research."
			text="Free to use under the Apache 2.0 license."
			class="w-full"
		/>
		<div class="grid-wrap mb-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
			{#each FREE_MODELS as model}
				<a
					class={cn(
						'flex flex-col justify-between border border-mistral-yellow-2 p-6 md:aspect-4/3 ',
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
					<p class="pt-4 md:pt-0">{model.description}</p>
				</a>
			{/each}
		</div>

		<Cta href="https://docs.mistral.ai/getting-started/models" text="Download weights" />
	</div>
</section>
