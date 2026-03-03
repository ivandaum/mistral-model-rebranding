<script>
	import HomeIntro from '$lib/components/organisms/home-intro.svelte';
	import HomeModels from '$lib/components/organisms/home-models.svelte';
	import HomeCustomModels from '$lib/components/organisms/home-custom-models.svelte';
	import HomeGetStarted from '$lib/components/organisms/home-get-started.svelte';
	import HomeLicensesExplained from '$lib/components/organisms/home-licenses-explained.svelte';
	import HomeConclusion from '$lib/components/organisms/home-conclusion.svelte';
	import HomeDeployOurModels from '$lib/components/organisms/home-deploy-our-models.svelte';
	import HomeFreeModels from '$lib/components/organisms/home-free-models.svelte';
</script>

<!-- intro -->
<HomeIntro />
<!-- Tailored for you -->
<HomeModels />
<!-- Free models for research -->
<HomeFreeModels />
<!-- Custom models for your own needs -->
<HomeCustomModels />
<!-- Ready to get start - optional ? -->
<HomeGetStarted />
<!-- Deploy our models anywhere -->
<HomeDeployOurModels />
<!-- Model licenses explained -->
<HomeLicensesExplained />
<!-- CTA get started -->
<HomeConclusion />
