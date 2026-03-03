<script lang="ts">
	import { onMount } from 'svelte';

	import { COMMERCIAL_MODELS, FREE_MODELS } from '$lib/data/wording';

	import Raf from '$lib/utils/raf';
	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';
	import { currentScroll } from '$lib/utils/current-scroll';
	import { normalize, round } from '$lib/utils/math';

	import arrowRight from '$lib/assets/arrow-right.svg';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';

	// let top = 0;
	// let height = 0;
	let contentWidth = 0;

	let stickyContainerEl: HTMLDivElement | undefined = $state();
	let stickyEl: HTMLDivElement | undefined = $state();

	const RAF_KEY = 'sticky-model';
	// hardcoded magic number, is equal to container max width;
	const MAX_WIDTH = 1280;

	let x: number = $state(0);
	let easedX = 0;

	// const animate = () => {
	// 	if (!stickyContainerEl) return;

	// 	// check where the current scroll is in the section
	// 	let tmpX = normalize(currentScroll(), top, top + height);
	// 	tmpX = Math.min(1, Math.max(0, tmpX));
	// 	tmpX = round(tmpX);

	// 	easedX = tmpX * contentWidth;
	// 	x += Math.floor((easedX - x) * 0.1);
	// };

	const animate = (t: number) => {
		if (!stickyContainerEl) return;

		easedX = Math.min(1, Math.max(0, t));
		easedX = easedX * contentWidth;
		x += Math.floor((easedX - x) * 0.1);
	};

	const onShow = () => {
		if (!stickyContainerEl || !stickyEl) return;

		// const rect = stickyContainerEl?.getBoundingClientRect();

		// // save location to be sure to scroll at the right path
		// top = rect.top + currentScroll();
		// // TODO : deal with windowHeight < rect height
		// // may break the scroll
		// height = rect?.height - window.innerHeight;
		const { init, getScroll } = sectionScrollProgress(stickyContainerEl, 0, window.innerHeight);

		contentWidth = stickyEl.getBoundingClientRect().width - MAX_WIDTH;

		init();
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, () => getScroll?.((t) => animate(t)));
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
	<div class="md:h-[300dvh]" bind:this={stickyContainerEl} style={`--x:-${x}px`}>
		<div class="sticky top-8 left-0 flex flex-col justify-start overflow-x-hidden py-4">
			<Subtitle
				headline="Tailored <img class='inline-block size-8' src='https://cms.mistral.ai/assets/5708523c-f221-47bb-bb62-d052ee70bbc6.svg?width=32&height=22' /> for You. <br />Our premier models are designed to be yours to tune, customize, distill, and deploy. "
				text="Available for commercial use."
				class="m-auto max-w-7xl px-4"
			/>
			<div class={cn('m-auto mb-8 w-full max-w-7xl')}>
				<div
					style="transform: translate3d(calc(var(--x)), 0px, 0px)"
					class="flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll px-4 will-change-transform md:w-max md:snap-none md:overflow-visible"
					bind:this={stickyEl}
				>
					{#each COMMERCIAL_MODELS as model, i}
						<div
							class={cn(
								'bg-mistral-yellow-' + (i + 1),
								'flex w-[75vw] shrink-0 snap-center flex-col items-start justify-between gap-8 p-8 md:snap-none',
								'md:aspect-12/16 md:max-h-(--model-card-max-height) md:w-[40%] md:max-w-[500px]'
							)}
						>
							<div class="w-full md:max-w-[90%]">
								<h3 class="text-foreground text-[46px] font-normal">{model.title}</h3>
								<p
									class="text-foreground mb-8 text-xl/[21.6px] leading-6 font-normal md:text-[20px]/[24px]"
								>
									{model.intro}
								</p>
							</div>
							<div class="flex items-start justify-start gap-4 md:max-w-[90%]">
								<img src={arrowRight} class="mt-1 size-4 md:mt-0 md:size-6" alt="arrow right" />
								<span>
									<p class="font-normal">{model.description}</p>
									<Cta class="mt-4" href={model.link} text="Learn more" />
								</span>
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
