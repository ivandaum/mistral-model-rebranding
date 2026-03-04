<script lang="ts">
	import { onMount } from 'svelte';

	import type { TitleComponentProps } from '$lib/types/components';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';

	import AnimatedText from '$lib/components/atoms/animated-text.svelte';

	const { headline, text, heading, ...props }: TitleComponentProps = $props();

	let element: HTMLDivElement | undefined = $state();
	let show = $state(false);

	onMount(() => {
		if (!element) {
			return;
		}

		const domObserver = observer({
			element,
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
	bind:this={element}
>
	<svelte:element
		this={heading}
		class="text-foreground mb-8 flex items-center gap-2 text-[40px]/[42px] font-normal md:mb-5 md:text-7xl/[72px]"
	>
		<p>
			<AnimatedText text={headline} step={25} maxDelay={750} {show} />
		</p>
	</svelte:element>

	{#if text}
		<p
			class="text-foreground mb-8 max-w-200 flex-wrap text-xl/[21.6px] font-normal md:mb-10 md:text-2xl/[27px]"
		>
			<AnimatedText
				{text}
				regex=" "
				step={25}
				delayOffset={500}
				maxDelay={1500}
				rand={1}
				{show}
				class={cn('animate-letter mr-1.5 inline-block duration-350', {
					'translate-y-2 opacity-0': !show
				})}
			/>
		</p>
	{/if}
	{@render props.children?.()}
</div>

<style lang="scss">
	.animate-letter {
		transition-delay: var(--delay);
	}
</style>
