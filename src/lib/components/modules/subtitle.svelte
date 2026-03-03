<script lang="ts">
	import { onMount } from 'svelte';

	import type { TitleComponentProps } from '$lib/types/components';

	import { cn } from '$lib/utils/cn';
	import { observer } from '$lib/utils/observer';

	import LetterAnimated from '$lib/components/atoms/letter-animated.svelte';

	const { headline, text, heading, ...props }: TitleComponentProps = $props();

	let elementRef: HTMLDivElement | undefined = $state();

	let show = $state(false);

	onMount(() => {
		if (!elementRef) {
			return;
		}

		const domObserver = observer({
			element: elementRef,
			rootMargin: '0px 0px -250px 0px',
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
	class={cn('flex w-full flex-col items-start justify-start', props.class)}
	bind:this={elementRef}
>
	<p class="mb-4 text-[30px]/[34.5px] md:max-w-[75%] md:text-5xl/[50px]">
		<LetterAnimated
			regex=" "
			text={headline}
			step={25}
			rand={1}
			{show}
			class={cn('mr-2 inline-block duration-300', {
				'translate-x-2': !show
			})}
		/>
	</p>
	{#if text}
		<p class="text-foreground mb-8 text-xs/[21.6px] md:mb-10 md:text-xl/[27px]">
			{text}
		</p>
	{/if}
	{@render props.children?.()}
</div>
