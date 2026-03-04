<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { normalize, round } from '$lib/utils/math';
	import { cn } from '$lib/utils/cn';
	import { randomDelay } from '$lib/utils/random-delay';
	import { offsetArray } from '$lib/utils/array';

	import { MODELS_EXAMPLES } from '$lib/data/wording';
	import ModelSquare from '$lib/components/atoms/model-square.svelte';

	const RAF_KEY = 'home_xp_translate';

	type ModelProps = { title: string; link: string; image: string };

	const position: number[] = [0, 0];

	let element: HTMLDivElement | undefined = $state();
	let x = $state(0);
	let y = $state(0);

	const onMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;

		const w = window.innerWidth;
		const h = window.innerHeight;

		// translate the mouse position at coords in the screen
		// been at [x -> 0, y -> window.innerHeight] will translate to [-1, 1]
		position[0] = round((normalize(clientX, 0, w) - 0.5) * 2);
		position[1] = round((normalize(clientY, 0, h) - 0.5) * 2);
	};

	let show = $state(false);

	// animate eased --x and --y
	const animate = () => {
		const reachX = position[0] * 15;
		x += (reachX - x) * 0.05;
		const reachY = position[1] * 15;
		y += (reachY - y) * 0.05;
	};

	// bind events for animation
	const onShow = () => {
		window.addEventListener('mousemove', onMouseMove);
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, animate);
		show = true;
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

	const data = [
		[...MODELS_EXAMPLES],
		offsetArray([...MODELS_EXAMPLES], 2),
		offsetArray([...MODELS_EXAMPLES], 4),
		offsetArray([...MODELS_EXAMPLES], 1),
		offsetArray([...MODELS_EXAMPLES], 3),
		offsetArray([...MODELS_EXAMPLES], 5)
	] as ModelProps[][];
	console.log(data);
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
		{#each data as models, j}
			<div class={['flex w-full items-center justify-center']}>
				{#each models as model, i}
					<div
						style={`--delay: ${randomDelay(i * j * 50, 2000, 1000, 1)}ms;transition-delay: var(--delay);`}
						class={cn('border border-mistral-yellow-2 transition-all duration-500', {
							'translate-y-6 opacity-0': !show
						})}
					>
						<ModelSquare {model} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
