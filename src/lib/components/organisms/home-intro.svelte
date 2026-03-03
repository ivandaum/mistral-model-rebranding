<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import { lerp } from '$lib/utils/math';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '../atoms/background-grid.svelte';

	const RAF_KEY = 'home_intro_parallax';

	let containerEl: HTMLElement | undefined = $state();

	let y = $state();

	const animate = (t: number) => {
		if (!containerEl) return;

		y = lerp(0, 25, t);
	};

	const onShow = () => {
		if (!containerEl) return;

		const { init, getScroll } = sectionScrollProgress(containerEl);

		init();
		const raf = Raf.getInstance();
		raf.add(RAF_KEY, () => getScroll?.((t) => animate(t)));
	};

	const onHide = () => {
		const raf = Raf.getInstance();
		raf.remove(RAF_KEY);
	};

	onMount(() => {
		if (!containerEl) return;

		const domObserver = observer({ element: containerEl, onShow, onHide });

		return () => {
			domObserver.destroy();
		};
	});
</script>

<section class="h-auto w-full" bind:this={containerEl} style={`--y:${y}%`}>
	<BackgroundGrid class="flex min-h-dvh w-full items-center justify-center">
		<Title
			headline="It starts with frontier science."
			text="State of the art models with cutting edge capabilities, from cloud to edge."
			heading="h1"
			class="max-w-7xl translate-y-(--y)"
		>
			<Cta href="https://mistral.ai/contact" class="bg-mistral-bg-yellow" text="Contact sales" />
		</Title>
	</BackgroundGrid>
</section>
