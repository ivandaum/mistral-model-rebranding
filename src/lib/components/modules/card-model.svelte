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

	onMount(() => {
		if (!element) return;

		const domObserver = observer({
			element,
			onShow: () => {
				show = true;
			},
			onHide: () => {
				show = false;
			}
		});

		return () => {
			domObserver.destroy();
		};
	});
</script>

<div
	bind:this={element}
	class={cn(
		'relative flex shrink-0 snap-center flex-col items-start justify-between p-6 md:snap-none md:p-8',
		// sizes
		'w-[75vw] md:h-[600px] md:max-h-(--model-card-max-height) md:w-[50%] md:max-w-[500px]',
		// transitions
		'transition-all duration-500 will-change-transform',
		{
			'md:translate-x-[20%]': !show
		},
		props.class
	)}
>
	<div class="w-full md:max-w-[90%]">
		<h3 class="text-foreground text-[24px] font-normal md:text-[46px]">{model.title}</h3>
		<p class="text-foreground text-md/[21.6px] mb-2 leading-6 font-normal md:text-[20px]/[24px]">
			{model.intro}
		</p>
	</div>
	<div class="flex items-start justify-start gap-4 md:max-w-[90%]">
		<img src={arrowRight} class="mt-1 size-4 md:mt-0 md:size-6" alt="arrow right" />
		<span>
			<p class="text-md/[21.6px] font-normal md:text-[20px]/[24px]">{model.description}</p>
			<Cta class="mt-4" href={model.link} text="Learn more" />
		</span>
	</div>
</div>
