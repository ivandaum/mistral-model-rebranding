<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import BackgroundGrid from '$lib/components/atoms/background-grid.svelte';
	import HomeXp from '$lib/components/organisms/home-xp.svelte';
	import Parallax from '$lib/components/atoms/parallax.svelte';
</script>

<section class="relative h-auto w-full">
	<BackgroundGrid class="flex min-h-dvh w-full items-center justify-center">
		<!-- <Parallax min={0} max={10} class="relative z-10 h-auto w-full max-w-7xl"> -->
		<Title
			headline="It starts with frontier science."
			text="State of the art models with cutting edge capabilities, from cloud to edge."
			heading="h1"
			class={[
				'relative z-10 translate-y-(--y) px-10 py-20',
				'bg-radial from-mistral-bg-yellow from-40% to-transparent to-70%'
			]}
		>
			<Cta
				href="https://mistral.ai/contact"
				class="bg-mistral-bg-yellow delay-1000"
				text="Contact sales"
			/>
		</Title>
		<!-- </Parallax> -->
		<HomeXp />
	</BackgroundGrid>
</section>
