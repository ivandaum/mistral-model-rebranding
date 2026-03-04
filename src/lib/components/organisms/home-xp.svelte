<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { normalize, round } from '$lib/utils/math';
	import { cn } from '$lib/utils/cn';
	import { randomDelay } from '$lib/utils/random-delay';
	import { reorganizeArray } from '$lib/utils/reorganize-array';

	import { MODELS_EXAMPLES } from '$lib/data/wording';
	import CardModelIcon from '$lib/components/modules/card-model-icon.svelte';

	const RAF_KEY = 'home_xp_translate';

	type ModelProps = { title: string; link: string; image: string };

	const position: number[] = [0, 0];

	let element: HTMLDivElement | undefined = $state();
	let x = $state(0);
	let y = $state(0);
	let show = $state(false);

	// when user move its mouse, we calculate the mouse position in the window
	const onMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;

		const w = window.innerWidth;
		const h = window.innerHeight;

		// translate the mouse position at coords in the screen
		// been at [x -> 0, y -> window.innerHeight] will translate to [-1, 1]
		position[0] = round((normalize(clientX, 0, w) - 0.5) * 2);
		position[1] = round((normalize(clientY, 0, h) - 0.5) * 2);
	};

	// animate eased --x and --y, fired inside a requestAnimationFrame
	const animate = () => {
		const reachX = position[0] * 15;
		x += (reachX - x) * 0.05;
		const reachY = position[1] * 15;
		y += (reachY - y) * 0.05;
	};

	// bind events for animation
	const onShow = () => {
		show = true;

		// disable on mobile
		if (window.innerWidth > 1000) {
			const raf = Raf.getInstance();
			raf.add(RAF_KEY, animate);
			window.addEventListener('mousemove', onMouseMove);
		}
	};

	// remove events for animation
	const onHide = () => {
		window.removeEventListener('mousemove', onMouseMove);
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	onMount(() => {
		if (!element) return;

		const domObserver = observer({ element, onShow, onHide });

		return () => {
			domObserver.destroy();
			onHide();
		};
	});

	// data formating to generate the grid
	const data = [...MODELS_EXAMPLES, ...MODELS_EXAMPLES];
	const rows = [
		data,
		reorganizeArray(data, 2),
		reorganizeArray(data, 4),
		reorganizeArray(data, 1),
		reorganizeArray(data, 3),
		reorganizeArray(data, 5)
	] as ModelProps[][];
</script>

<div
	class={[
		'absolute top-0 left-0 z-1 flex h-full w-full items-center justify-center overflow-hidden',
		// before
		'before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-5 before:h-full before:w-full',
		// before linear gradient
		'before:pointer-events-none before:bg-radial before:from-transparent before:to-mistral-bg-yellow before:to-80%'
	]}
	style={`--x:${x}%;--y:calc(${y}%)`}
	bind:this={element}
>
	<div
		class={[
			'absolute flex h-full w-full -translate-x-(--x) -translate-y-(--y) flex-wrap items-center justify-center'
		]}
	>
		{#each rows as models, j}
			<div class={['flex w-full items-center justify-center']}>
				{#each models as model, i}
					<div
						style={`--delay: ${randomDelay(i * j * 20, 2000, 500, 1)}ms;transition-delay: var(--delay);`}
						class={cn('border border-mistral-yellow-2 transition-all duration-500', {
							'translate-y-6 opacity-0': !show
						})}
					>
						<CardModelIcon {model} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
