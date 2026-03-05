<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/cn';

	import type { CtaComponentProps } from '$lib/types/components';

	import { observer } from '$lib/utils/observer';

	import arrow from '$lib/assets/chevron-right.svg';
	import AnimatedText from '$lib/components/atoms/animated-text.svelte';

	let { href, text, ...props }: CtaComponentProps = $props();

	let element: HTMLAnchorElement | undefined = $state();
	let show = $state(false);

	// step to animate each letters, to be sure they fade-in after their previous sibling
	const STEP = 15;

	onMount(() => {
		if (!element) {
			return;
		}

		// Watch element to trigger animation if it enter the viewport
		const domObserver = observer({
			element,
			onShow: () => {
				show = true;
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
		'transition-all duration-400 ease-in-out',
		// hover states
		'hover:[&_img]:animate-blink-twice hover:[&_span]:animate-cta-letter hover:[&_span]:text-mistral-orange',
		{
			'translate-y-2 opacity-0': !show
		},
		props.class
	)}
	{href}
	bind:this={element}
	aria-label={text}
>
	{#if text}
		<p class="relative z-10 py-2 pl-4 text-nowrap">
			<AnimatedText
				{text}
				class="duration-150"
				style="animation-delay: var(--delay);"
				step={STEP}
				// disable randomness to be sure letters plays after each others
				rand={1}
				// overwrite because we don't need fade-in for cta, only hover animations
				show={true}
			/>
		</p>
	{/if}
	<p class="relative z-10 flex size-10 shrink-0 items-center justify-center gap-1 overflow-hidden">
		<img class="size-3 translate-y-px" src={arrow} alt={arrow} />
	</p>
</a>
