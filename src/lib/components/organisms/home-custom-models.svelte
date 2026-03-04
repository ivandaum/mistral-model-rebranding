<script lang="ts">
	import { CUSTOM_MODEL_PERKS, CUSTOM_MODELS } from '$lib/data/wording';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Tabs from '$lib/components/modules/tabs.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';

	let index = $state(0);

	const onSelectTab = (i: number) => {
		index = i;
	};
</script>

<section class="flex w-full max-w-7xl flex-col items-center justify-center px-4">
	<Title
		headline="Custom models <br>for your own needs. <img class='inline-block w-14 shrink-0' alt='custom-model' src='https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2Fca2c4b33-d598-4898-bafc-991a0f4fa7d7.png%3Fwidth%3D88%26amp%3Bheight%3D115&w=128&q=75' />"
		text="Make models your own through fine-tuning and customization. <br> Adapt our models to your specific use cases while maintaining core performance."
		heading="h2"
	/>

	<Tabs value={index} items={['Custom pre-training', 'Fine-tuning']} onselect={onSelectTab} />
	<BackgroundGrid>
		<div class=" bg-grid-size-md bg-grid-pattern relative items-center px-4 pt-[73px] pb-[77px]">
			{#each CUSTOM_MODELS as item, i}
				{#if index === i}
					<div class="flex w-full items-center gap-8">
						<div class="w-1/2">
							<h3
								class="text-foreground mb-[35px] max-w-[410px] text-[24px]/[27.6px] font-normal md:mb-[38px] md:text-[32px]/[36.8px]"
							>
								{item.title}
							</h3>
							<p
								class="text-foreground mb-[35px] max-w-[410px] text-base/[19.6px] font-normal md:mb-11"
							>
								{item.text}
							</p>

							<Cta href={item.ctaLink} text={item.cta} />
						</div>

						<img alt="" class="w-1/2" src={item.image} />
					</div>
				{/if}
			{/each}
		</div>
	</BackgroundGrid>

	<div
		class="mt-[64px] mb-12 grid w-full grid-cols-1 border-r border-mistral-border-1 md:grid-cols-4"
	>
		{#each CUSTOM_MODEL_PERKS as perk}
			<div
				class="flex flex-col gap-1 border-b border-l border-mistral-border-1 px-6 py-6 md:border-b-0 md:py-0"
			>
				<p class="text-foreground mb-6 w-fit text-[19px]/[26px] font-normal">{perk.title}</p>
				<div class="mb-3 flex flex-1 items-start gap-6">
					<img src={perk.image} alt="" />
					<p>{perk.text}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
