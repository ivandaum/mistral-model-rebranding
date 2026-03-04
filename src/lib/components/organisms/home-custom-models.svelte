<script lang="ts">
	import { onMount } from 'svelte';
	import { CUSTOM_MODEL_PERKS, CUSTOM_MODELS } from '$lib/data/wording';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Tabs from '$lib/components/modules/tabs.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';
	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';

	let index = $state(-1);
	let element: HTMLElement | undefined = $state();

	const onSelectTab = (i: number) => {
		index = i;
	};

	onMount(() => {
		if (!element) return;

		const obs = observer({
			element,
			rootMargin: '0px 0px -350px 0px',
			onShow: () => {
				index === -1 ? (index = 0) : null;
				console.log('show');
			}
		});

		return () => {
			obs.destroy();
		};
	});
</script>

<section class="flex w-full flex-col items-center justify-center px-4">
	<Title
		headline="Custom models <br>for your own needs. <img class='inline-block w-14 shrink-0' alt='custom-model' src='https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2Fca2c4b33-d598-4898-bafc-991a0f4fa7d7.png%3Fwidth%3D88%26amp%3Bheight%3D115&w=128&q=75' />"
		text="Make models your own through fine-tuning and customization. <br> Adapt our models to your specific use cases while maintaining core performance."
		heading="h2"
	/>

	<Tabs value={index} items={['Custom pre-training', 'Fine-tuning']} onselect={onSelectTab} />
	<BackgroundGrid class="flex h-auto w-full items-center justify-center">
		<div
			class="relative flex w-full max-w-7xl items-center justify-center py-[70px] md:h-[640px]"
			bind:this={element}
		>
			{#each CUSTOM_MODELS as item, i}
				<div
					class={cn(
						'h-full w-full flex-col items-center justify-center gap-16 px-4 md:absolute md:flex md:flex-row',
						{
							'pointer-events-none hidden animate-tab-content-out opacity-0 ': i !== index,
							'animate-tab-content-in': i === index
						}
					)}
				>
					<div class="mb-16 w-full md:mb-0 md:w-auto">
						<h3
							class="text-foreground mb-[35px] text-[24px]/[27.6px] font-normal md:mb-[38px] md:max-w-[410px] md:text-[32px]/[36.8px]"
						>
							{item.title}
						</h3>
						<p
							class="text-foreground mb-[35px] text-base/[19.6px] font-normal md:mb-11 md:max-w-[410px]"
						>
							{item.text}
						</p>

						<Cta href={item.ctaLink} text={item.cta} />
					</div>

					<img
						alt="chart"
						class={cn('w-full transition-all delay-200 duration-400 md:w-1/2', {
							'-translate-x-6': i !== index
						})}
						src={item.image}
					/>
				</div>
			{/each}
		</div>
	</BackgroundGrid>

	<div
		class="mt-[64px] mb-12 grid w-full max-w-7xl grid-cols-1 border-r border-mistral-border-1 md:grid-cols-4"
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
