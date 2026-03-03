<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { onMount } from 'svelte';

	import type { CardModelComponentProps } from '$lib/types/components';

	import { observer } from '$lib/utils/observer';

	import arrowRight from '$lib/assets/arrow-right.svg';
	import Cta from '$lib/components/atoms/cta.svelte';

	const { model, ...props }: CardModelComponentProps = $props();

	let element: HTMLDivElement | undefined = $state();
	let show = $state(false);

	const onShow = () => {
		show = true;
	};

	const onHide = () => {
		show = false;
	};

	onMount(() => {
		if (!element) return;

		const domObserver = observer({ element, onShow, onHide });

		return () => {
			domObserver.destroy();
		};
	});
</script>

<div
	bind:this={element}
	class={cn(
		'flex w-[75vw] shrink-0 snap-center flex-col items-start justify-between gap-8 p-8 md:snap-none',
		'md:aspect-12/16 md:max-h-(--model-card-max-height) md:w-[40%] md:max-w-[500px]',
		'transition-all duration-500 will-change-transform',
		{
			'translate-x-[10%]': !show
		},
		props.class
	)}
>
	<div class="w-full md:max-w-[90%]">
		<h3 class="text-foreground text-[46px] font-normal">{model.title}</h3>
		<p class="text-foreground mb-8 text-xl/[21.6px] leading-6 font-normal md:text-[20px]/[24px]">
			{model.intro}
		</p>
	</div>
	<div class="flex items-start justify-start gap-4 md:max-w-[90%]">
		<img src={arrowRight} class="mt-1 size-4 md:mt-0 md:size-6" alt="arrow right" />
		<span>
			<p class="font-normal">{model.description}</p>
			<Cta class="mt-4" href={model.link} text="Learn more" />
		</span>
	</div>
</div>
