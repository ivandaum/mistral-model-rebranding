<script lang="ts">
	import { onMount } from 'svelte';

	import { COMMERCIAL_MODELS } from '$lib/data/wording';

	import Raf from '$lib/utils/raf';
	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';

	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import CardModel from '$lib/components/modules/card-model.svelte';

	let contentWidth = 0;
	let sliderWidth = 0;

	let scrollableEl: HTMLDivElement | undefined = $state();
	let stickyEl: HTMLDivElement | undefined = $state();
	let sliderContainer: HTMLDivElement | undefined = $state();

	const RAF_KEY = 'sticky-model';
	// hardcoded magic number, is equal to container max width;

	let x: number = $state(0);
	let easedX = 0;

	const animate = (t: number) => {
		if (!scrollableEl) return;

		// eased X for smooth translate
		easedX = Math.min(1, Math.max(0, t));
		easedX = easedX * contentWidth;
		x += (easedX - x) * 0.1;
	};

	const onShow = () => {
		if (!scrollableEl || !stickyEl) return;

		const { init, onScroll } = sectionScrollProgress(scrollableEl, 0, window.innerHeight);

		sliderWidth = sliderContainer?.getBoundingClientRect().width || 0;
		contentWidth = stickyEl.getBoundingClientRect().width - sliderWidth;

		init();
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, () => onScroll?.((t) => animate(t)));
	};

	const onHide = () => {
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	onMount(() => {
		if (!scrollableEl || !stickyEl || window.innerWidth < 1000) return;

		const domObserver = observer({
			element: scrollableEl,
			onShow,
			onHide,
			rootMargin: '0px 0px 0px 0px'
		});

		return () => {
			domObserver.destroy();
		};
	});
</script>

<section class="flex w-full flex-col" id="models">
	<div class="md:h-[300dvh]" bind:this={scrollableEl} style={`--x:${x}px`}>
		<div class="sticky top-0 left-0 m-auto flex flex-col overflow-x-hidden py-8 pb-16">
			<Subtitle
				headline="Tailored <img class='inline-block size-8' src='https://cms.mistral.ai/assets/5708523c-f221-47bb-bb62-d052ee70bbc6.svg?width=32&height=22' /> for You. <br> Our premier models are designed to be yours to tune, customize, distill, and deploy. "
				text="Available for commercial use."
				heading="h3"
				class="m-auto mt-8 mb-0 max-w-7xl px-4"
			/>
			<div bind:this={sliderContainer} class="m-auto my-0 w-full max-w-7xl">
				<div
					class={[
						'flex snap-x snap-mandatory gap-2 overflow-x-scroll px-4 py-0 will-change-transform md:snap-none md:overflow-visible',
						'h-max w-full -translate-x-(--x) md:w-max'
					]}
					bind:this={stickyEl}
				>
					{#each COMMERCIAL_MODELS as model, i}
						<CardModel {model} class={['bg-mistral-yellow-' + (i + 1)]} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
