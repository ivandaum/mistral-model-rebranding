<script lang="ts">
	import { onMount } from 'svelte';

	import { COMMERCIAL_MODELS, FREE_MODELS } from '$lib/data/wording';
	import { cn } from '$lib/utils/cn';
	import Cta from '$lib/components/atoms/cta.svelte';

	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import { observer } from '$lib/utils/observer';
	import { currentScroll } from '$lib/utils/current-scroll';
	import Raf from '$lib/utils/raf';
	import { normalize, round } from '$lib/utils/math';

	let top = 0;
	let height = 0;
	let contentWidth = 0;

	let stickyContainerEl: HTMLDivElement | undefined = $state();
	let stickyEl: HTMLDivElement | undefined = $state();

	const RAF_KEY = 'sticky-model';
	// hardcoded magic number, is equal to container max width;
	const MAX_WIDTH = 1280;

	let x: number = $state(0);
	let easedX = 0;

	const animate = () => {
		if (!stickyContainerEl) return;

		// check where the current scroll is in the section
		let tmpX = normalize(currentScroll(), top, top + height);
		tmpX = Math.min(1, Math.max(0, tmpX));
		tmpX = round(tmpX);

		easedX = tmpX * contentWidth;

		x += (easedX - x) * 0.1;
	};

	const onShow = () => {
		if (!stickyContainerEl || !stickyEl) return;

		const rect = stickyContainerEl?.getBoundingClientRect();

		// save location to be sure to scroll at the right path
		top = rect.top + currentScroll();
		height = rect?.height - window.innerHeight * 0.75;

		contentWidth = stickyEl.getBoundingClientRect().width - MAX_WIDTH;

		const raf = Raf.getInstance();
		raf.add(RAF_KEY, animate);
	};

	const onHide = () => {
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	onMount(() => {
		if (!stickyContainerEl || !stickyEl) return;

		const domObserver = observer({ element: stickyContainerEl, onShow, onHide });

		return () => {
			domObserver.destroy();
		};
	});
</script>

<section class="flex w-full flex-col">
	<div class="h-[200dvh]" bind:this={stickyContainerEl} style={`--x:-${x}px`}>
		<div class="sticky top-0 left-0 flex flex-col justify-start overflow-x-hidden py-4">
			<Subtitle
				headline="Tailored <img class='inline-block size-8' src='https://cms.mistral.ai/assets/5708523c-f221-47bb-bb62-d052ee70bbc6.svg?width=32&height=22' /> for You. <br />Our premier models are designed to be yours to tune, customize, distill, and deploy. "
				text="Available for commercial use."
				class="m-auto max-w-7xl px-4"
			/>
			<div
				class={cn(
					'm-auto mb-8 w-full max-w-7xl'
					// snap-x snap-mandatory overflow-x-scroll
				)}
			>
				<div
					style="transform: translate3d(calc(var(--x)), 0px, 0px)"
					class="flex w-max gap-2 px-4"
					bind:this={stickyEl}
				>
					{#each COMMERCIAL_MODELS as model, i}
						<div
							class={cn(
								'bg-mistral-yellow-' + (i + 1),
								'flex aspect-12/16 w-[90%] shrink-0 flex-col items-end justify-between p-8 md:w-[40%] md:max-w-[500px]'
							)}
						>
							<div class="w-full">
								<h3 class="text-foreground text-[46px] font-normal">{model.title}</h3>
								<p
									class="text-foreground mb-8 text-xl/[21.6px] leading-6 font-normal md:text-[20px]/[24px]"
								>
									{model.intro}
								</p>
								<Cta class="mt-4" href={model.link} text="Learn more" />
							</div>
							<div class="flex flex-col items-end justify-start">
								<p class="font-normal">{model.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

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
