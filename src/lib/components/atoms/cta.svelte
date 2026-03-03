<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/cn';

	import type { CtaComponentProps } from '$lib/types/components';

	import { observer } from '$lib/utils/observer';

	import arrow from '$lib/assets/chevron-right.svg';
	import LetterAnimated from './letter-animated.svelte';

	let { href, text, ...props }: CtaComponentProps = $props();

	let elementRef: HTMLAnchorElement | undefined = $state();
	let show = $state(false);

	const onMouseEnter = () => {
		show = false;
		setTimeout(() => (show = true), 350);
	};

	onMount(() => {
		if (!elementRef) {
			return;
		}

		const domObserver = observer({
			element: elementRef,
			onShow: () => {
				show = true;
				console.log('show cta');
			}
		});

		return () => {
			domObserver.destroy();
		};
	});
</script>

<a
	class={cn('inline-flex border border-mistral-text-1 font-normal transition-all', props.class)}
	{href}
	onmouseenter={onMouseEnter}
	bind:this={elementRef}
>
	{#if text}
		<p class="py-2 pl-4 text-nowrap">
			<LetterAnimated
				{text}
				step={25}
				{show}
				class={cn({
					'': show
				})}
			/>
		</p>
	{/if}
	<span class="flex size-10 shrink-0 items-center justify-center">
		<img class="size-3 translate-y-[1px]" src={arrow} alt="arrow" />
	</span>
</a>
