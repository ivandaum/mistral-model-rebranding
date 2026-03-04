<script lang="ts">
	import { onMount } from 'svelte';

	import type { CardModelSmallComponentProps } from '$lib/types/components';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';

	import arrow from '$lib/assets/chevron-right.svg';

	const { model }: CardModelSmallComponentProps = $props();

	let element: HTMLElement | undefined = $state();
	let show = $state(false);

	onMount(() => {
		if (!element) return;

		const obs = observer({
			element,
			onShow: () => (show = true),
			rootMargin: '0px 0px -150px 0px'
		});

		return () => {
			obs.destroy();
		};
	});
</script>

<a
	bind:this={element}
	// custom delay for fade-in
	class={cn(
		'flex flex-col justify-between border border-mistral-yellow-2 p-6 md:aspect-4/3 ',
		'transition-transform delay-(--delay) duration-500 hover:border-mistral-yellow-2 hover:bg-mistral-yellow-2 hover:[&_p_img]:animate-blink-twice'
	)}
	href={model.link}
>
	<h3
		class={cn('flex gap-2 text-[24px] delay-(--delay) duration-500', {
			'translate-x-4 opacity-0': !show
		})}
	>
		<span class={cn('flex size-10 items-center justify-center')}>
			<img src={model.image} alt="" class={cn(model.imageSize)} />
		</span>
		<p>{model.title}</p>
	</h3>
	<p class="flex items-center gap-2 pt-4 md:gap-8 md:pt-0">
		{model.description}
		<img class="size-4" src={arrow} alt="" />
	</p>
</a>
