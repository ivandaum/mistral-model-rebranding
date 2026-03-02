<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
</script>

<section class="flex w-full max-w-7xl flex-col justify-center px-4">
	<Title headline="Ready to get started?" heading="h2" class="pt-50">
		<Cta href="https://mistral.ai/contact">Get your commercial license</Cta>
	</Title>

	<Subtitle
		headline="Deploy our models Folder anywhere with flexible infrastructure options spanning cloud providers, edge, VPC and on-premises environments."
	/>
</section>
