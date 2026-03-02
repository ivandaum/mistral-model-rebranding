<script lang="ts">
	import { onMount } from 'svelte';

	import type { TitleComponentProps } from '$lib/types/components';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';
	import { explodeHtmlString } from '$lib/utils/explode-html-string';

	const { headline, text, heading, ...props }: TitleComponentProps = $props();

	let elementRef: HTMLDivElement | undefined = $state();
	let show = $state(false);

	// make a dynamic random animation to let
	// letters appears
	// allow to set the start, the step delay between letter and a max to
	// avoid the animation to take too much time
	const rAnimation = (step: number, max: number, start = 0, r = Math.random()) => {
		return Math.min(max, Math.floor(start + step * r));
	};

	onMount(() => {
		if (!elementRef) {
			return;
		}

		const domObserver = observer({
			element: elementRef,
			rootMargin: '0px 0px -350px 0px',
			onShow: () => {
				show = true;
			}
		});

		return () => {
			domObserver.destroy();
		};
	});
</script>

<div
	class={cn('flex flex-col items-center justify-center pt-50 pb-10 text-center', props.class)}
	bind:this={elementRef}
>
	<svelte:element
		this={heading}
		class="text-foreground mb-8 flex items-center gap-2 text-[40px]/[42px] font-normal md:mb-5 md:text-7xl/[72px]"
	>
		<p>
			{#each explodeHtmlString(headline) as letter, i}
				<span
					style={`--delay: ${rAnimation(i * 25, 750)}ms`}
					class={cn('animate-letter transition-all duration-0', {
						'opacity-0': !show
					})}
				>
					{@html letter}
				</span>
			{/each}
		</p>
	</svelte:element>
	{#if text}
		<p
			class="text-foreground mb-8 max-w-200 flex-wrap text-xl/[21.6px] font-normal md:mb-10 md:text-2xl/[27px]"
		>
			{#each explodeHtmlString(text, ' ') as letter, i}
				<span
					style={`--delay: ${rAnimation(i * 15, 1500, 500, 1)}ms`}
					class={cn('animate-letter mr-1 inline-block transition-all duration-350', {
						'translate-y-2 opacity-0': !show
					})}
				>
					{@html letter}
				</span>
			{/each}
		</p>
	{/if}
	{@render props.children?.()}
</div>

<style lang="scss">
	.animate-letter {
		transition-delay: var(--delay);
	}
</style>
