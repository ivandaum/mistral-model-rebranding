<script lang="ts">
	import { onMount } from 'svelte';

	import { COMMERCIAL_MODELS } from '$lib/data/wording';

	import Raf from '$lib/utils/raf';
	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';

	import arrowRight from '$lib/assets/arrow-right.svg';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import CardModel from '../modules/card-model.svelte';

	let contentWidth = 0;

	let stickyContainerEl: HTMLDivElement | undefined = $state();
	let stickyEl: HTMLDivElement | undefined = $state();

	const RAF_KEY = 'sticky-model';
	// hardcoded magic number, is equal to container max width;
	const MAX_WIDTH = 1280;

	let x: number = $state(0);
	let easedX = 0;

	const animate = (t: number) => {
		if (!stickyContainerEl) return;

		// eased X for smooth translate
		easedX = Math.min(1, Math.max(0, t));
		easedX = easedX * contentWidth;
		x += Math.floor((easedX - x) * 0.1);
	};

	const onShow = () => {
		if (!stickyContainerEl || !stickyEl) return;

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
						<CardModel {model} class={'bg-mistral-yellow-' + (i + 1)} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
