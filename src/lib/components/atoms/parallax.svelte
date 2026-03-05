<script lang="ts">
	import { onMount } from 'svelte';

	import type { ParallaxComponentProps } from '$lib/types/components';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { uuid } from '$lib/utils/uuid';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import { lerp } from '$lib/utils/math';

	const { min, max, ...props }: ParallaxComponentProps = $props();

	// Raf dynamic key if multiple parallax run at the same time
	const RAF_KEY = 'parallax-' + uuid();

	let element: HTMLElement | undefined = $state();

	// y will return a value between max & min, based on t (0 -> 1)
	// example :
	// with min = 0, max = 10, t = 0.5
	// y -> 5
	//
	// with min = -10, max = 10, t = 0.5
	// y -> 0
	//
	// this value is calculated with a lerp in the `animate` fonction
	let y: number = $state(0);

	const animate = (t: number) => {
		if (!element) return;

		y = lerp(min, max, t);
	};

	// when element is visible in the viewport
	const onShow = () => {
		if (!element) return;

		// get the scroll progression based on container
		const { init, onScroll } = sectionScrollProgress(element, window.innerHeight * 0.5);

		init();
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, () => onScroll?.((t) => animate(t)));
	};

	// if element isn't visible
	// or if the component is destroyed
	const onHide = () => {
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	// Trigger or remove when element enters the viewport
	onMount(() => {
		if (!element) return;

		const domObserver = observer({ element: element, onShow, onHide });

		return () => {
			domObserver.destroy();
			onHide();
		};
	});
</script>

<div class={props.class} bind:this={element} style={`--y:${y}%`}>{@render props.children?.()}</div>
