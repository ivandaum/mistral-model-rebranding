<script lang="ts">
	import type { SubtitleComponentProps } from '$lib/types/components';

	const { headline, text, ...props }: SubtitleComponentProps = $props();
</script>

<div class="flex w-full flex-col items-start justify-start">
	<p
		class="models-accordion-heading text-foreground mb-4 max-w-[952px] text-[30px]/[34.5px] font-normal md:text-5xl/[50px]"
	>
		{@html headline}
	</p>
	<p class="text-foreground mb-8 text-xs/[21.6px] font-normal md:mb-10 md:text-xl/[27px]">
		{text}
	</p>
	{@render props.children?.()}
</div>
