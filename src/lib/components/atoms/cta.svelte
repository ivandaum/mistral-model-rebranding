<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/cn';

	import type { CtaComponentProps } from '$lib/types/components';

	import { observer } from '$lib/utils/observer';

	import arrow from '$lib/assets/chevron-right.svg';
	import LetterAnimated from './letter-animated.svelte';
	import { randomDelay } from '$lib/utils/random-delay';
	import { explodeHtmlString } from '$lib/utils/explode-html-string';

	let { href, text, ...props }: CtaComponentProps = $props();

	let elementRef: HTMLAnchorElement | undefined = $state();

	let showElement = $state(false);
	let hasFadeIn = $state(true);

	let timeout: NodeJS.Timeout | undefined;

	const STEP = 20;

	const onMouseEnter = () => {
		hasFadeIn = false;
		clearTimeout(timeout);
		timeout = setTimeout(() => (hasFadeIn = true), STEP * text.split('').length);
	};

	onMount(() => {
		if (!elementRef) {
			return;
		}

		const domObserver = observer({
			element: elementRef,
			onShow: () => {
				showElement = true;
			}
		});

		return () => {
			domObserver.destroy();
		};
	});
</script>

<a
	class={cn(
		'relative inline-flex border border-mistral-text-1 font-normal',
		// transitions
		'transition-all duration-400 ease-in-out hover:text-mistral-orange hover:[&_img]:animate-blink-twice',
		{
			'opacity-0': !showElement,
			'animate-blink-twice': showElement
		},
		props.class
	)}
	{href}
	onmouseenter={onMouseEnter}
	bind:this={elementRef}
>
	{#if text}
		<p class="relative z-10 py-2 pl-4 text-nowrap">
			<LetterAnimated {text} class="duration-50" step={STEP} rand={1} show={hasFadeIn} />
		</p>
	{/if}
	<p class="relative z-10 flex size-10 shrink-0 items-center justify-center gap-1 overflow-hidden">
		<img class="size-3 translate-y-px" src={arrow} alt={arrow} />
	</p>
</a>
