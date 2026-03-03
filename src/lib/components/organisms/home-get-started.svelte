<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import { lerp } from '$lib/utils/math';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '../atoms/background-grid.svelte';

	const RAF_KEY = 'home_get_started_parallax';

	let containerEl: HTMLElement | undefined = $state();

	let y = $state();

	const animate = (t: number) => {
		if (!containerEl) return;

		y = lerp(-5, 5, t);
	};

	const onShow = () => {
		if (!containerEl) return;

		const { init, getScroll } = sectionScrollProgress(containerEl, window.innerHeight * 0.5);

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

<section class="w-full" bind:this={containerEl} style={`--y:${y}%`}>
	<BackgroundGrid class="flex w-full flex-col justify-center px-4">
		<Title
			headline="Ready to get started?"
			heading="h2"
			class="m-auto w-full max-w-7xl translate-y-(--y) pt-50 pb-50"
		>
			<Cta href="https://mistral.ai/contact" text="Get your commercial license" />
		</Title>
	</BackgroundGrid>
</section>
