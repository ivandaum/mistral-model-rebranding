<script lang="ts">
	import type { TitleComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	const { headline, text, heading, ...props }: TitleComponentProps = $props();
</script>

<div class={cn('flex flex-col items-center justify-center pt-50 pb-10 text-center', props.class)}>
	<svelte:element
		this={heading}
		class="text-foreground mb-8 flex items-center gap-2 text-[40px]/[42px] font-normal md:mb-5 md:text-7xl/[72px]"
	>
		{@html headline}
	</svelte:element>
	{#if text}
		<p class="text-foreground mb-8 text-xl/[21.6px] font-normal md:mb-10 md:text-2xl/[27px]">
			{@html text}
		</p>
	{/if}
	{@render props.children?.()}
</div>
