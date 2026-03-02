<script lang="ts">
	import type { TitleComponentProps } from '$lib/types/components';

	const { headline, text, heading, ...props }: TitleComponentProps = $props();
</script>

<div class="flex h-dvh flex-col items-center justify-center text-center">
	<svelte:element
		this={heading}
		class="text-foreground mb-8 text-[40px]/[42px] font-normal tracking-tight md:mb-5 md:text-7xl/[72px]"
	>
		{headline}
	</svelte:element>
	<p class="text-foreground mb-8 text-xl/[21.6px] font-normal md:mb-10 md:text-2xl/[27px]">
		{text}
	</p>
	{@render props.children?.()}
</div>
