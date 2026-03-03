<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { normalize, round } from '$lib/utils/math';

	import { MODELS_EXAMPLES } from '$lib/data/wording';
	import { cn } from '$lib/utils/cn';
	import { randomDelay } from '$lib/utils/random-delay';
	import { shuffle } from '$lib/utils/shuffle';

	const RAF_KEY = 'home_xp_translate';

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
		[...MODELS_EXAMPLES].reverse(),
		[...MODELS_EXAMPLES],
		[...MODELS_EXAMPLES].reverse(),
		[...MODELS_EXAMPLES],
		[...MODELS_EXAMPLES].reverse()
	];
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
						style={`--delay: ${randomDelay(i * j * 250, 1500, 1000)}ms;transition-delay: var(--delay);`}
						class={cn('transition-opacity', {
							'opacity-0': !show
						})}
					>
						<a
							href={model.link}
							class={cn([
								'flex aspect-square min-h-[25dvh] min-w-[15vw] shrink-0 cursor-default flex-col items-center justify-center border border-mistral-yellow-2 p-4',
								'grayscale-100 transition-opacity duration-500 hover:bg-mistral-yellow-1 hover:opacity-100 hover:grayscale-0'
							])}
						>
							<div class="flex size-24 items-center justify-center">
								<img class="size-18" src={model.image} alt={model.title} />
							</div>
							<p class="text-xl font-medium text-mistral-text-brown">{model.title}</p>
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
