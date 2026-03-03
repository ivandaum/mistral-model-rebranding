<script lang="ts">
	import Cta from '$lib/components/atoms/cta.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import { DEPLOY_OUR_MODELS } from '$lib/data/wording';
</script>

<section class="flex w-full max-w-7xl flex-col justify-center px-4">
	<Subtitle
		headline="Deploy our models <img class='inline-block size-10 -translate-y-[2px]' src='https://cms.mistral.ai/assets/5ee3cbfa-ce33-44d5-a77f-16bf1b1820ba.svg?width=null&height=null' /> anywhere with flexible infrastructure options spanning cloud providers, edge, VPC and on-premises environments."
	/>

	<div class="mt-[64px] mb-12 grid w-full border-mistral-border-1 pt-12 md:grid-cols-3 md:border-r">
		{#each DEPLOY_OUR_MODELS as model}
			<div
				class="flex flex-col items-start gap-4 border-b border-l border-mistral-border-1 px-6 py-6 md:border-b-0 md:py-0"
			>
				<span class="block size-8"><img src={model.image} alt="" class="" /></span>
				<p class="text-foreground mb-6 w-fit text-[19px]/[26px] font-normal">{model.title}</p>
				<p class="mb-4 flex flex-1 items-start gap-6">
					{model.text}
				</p>

				<Cta href={model.link} text={model.cta} />
			</div>
		{/each}
	</div>
</section>
