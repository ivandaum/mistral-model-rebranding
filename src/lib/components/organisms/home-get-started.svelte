<script lang="ts">
	import { onMount } from 'svelte';

	import Raf from '$lib/utils/raf';

	import { observer } from '$lib/utils/observer';
	import { sectionScrollProgress } from '$lib/utils/section-scroll-progress';
	import { lerp } from '$lib/utils/math';

	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';

	let containerEl: HTMLElement | undefined = $state();
</script>

<section class="w-full" bind:this={containerEl}>
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
