<script lang="ts">
	import type { SubtitleComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	const { headline, text, ...props }: SubtitleComponentProps = $props();
</script>

<div class={cn('flex w-full flex-col items-start justify-start', props.class)}>
	<p class="mb-4 text-[30px]/[34.5px] md:max-w-[75%] md:text-5xl/[50px]">
		{@html headline}
	</p>
	{#if text}
		<p class="text-foreground mb-8 text-xs/[21.6px] md:mb-10 md:text-xl/[27px]">
			{text}
		</p>
	{/if}
	{@render props.children?.()}
</div>
