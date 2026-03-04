<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
</script>

<section class="flex w-full max-w-7xl flex-col items-center justify-center py-[64px] text-center">
	<Title
		headline="Get started with Mistral models."
		text="It's time to get to the frontier."
		heading="h2"
		class="px-4 pt-25"
	>
		<div class="flex flex-wrap justify-center gap-4">
			<Cta
				href="https://auth.mistral.ai/ui/login?flow=b85e6c5d-4960-4a6f-81eb-c4d521110d6a"
				class="bg-mistral-bg-yellow"
				text="Try our models"
			/>
			<Cta href="https://doc.mistral.ai" class="bg-mistral-bg-yellow" text="Read our docs" />
			<Cta href="https://mistral.ai/contact" class="bg-mistral-bg-yellow" text="Talk to our team" />
		</div>
	</Title>
</section>
