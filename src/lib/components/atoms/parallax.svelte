<script lang="ts">
	import { onMount } from 'svelte';

	import type { ParallaxComponentProps } from '$lib/types/components';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { uuid } from '$lib/utils/uuid';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import { lerp } from '$lib/utils/math';

	const { min, max, ...props }: ParallaxComponentProps = $props();

	const RAF_KEY = 'parallax-' + uuid();

	let element: HTMLElement | undefined = $state();

	let y = $state();

	const animate = (t: number) => {
		if (!element) return;

		y = lerp(min, max, t);
	};

	const onShow = () => {
		if (!element) return;

		const { init, onScroll } = sectionScrollProgress(element, window.innerHeight * 0.5);

		init();
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, () => onScroll?.((t) => animate(t)));
	};

	const onHide = () => {
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	onMount(() => {
		if (!element) return;

		const domObserver = observer({ element: element, onShow, onHide });

		return () => {
			domObserver.destroy();
		};
	});
</script>

<div class={props.class} bind:this={element} style={`--y:${y}%`}>{@render props.children?.()}</div>
