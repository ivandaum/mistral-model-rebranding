<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	const props: ComponentProps = $props();
</script>

<div class={cn('bg-grid  h-full w-full', props.class)}>
	{@render props.children?.()}
</div>

<style lang="scss">
	.bg-grid {
		--grid-size-x: 50px;
		--grid-size-y: 50px;
		--grid-thickness: 1px;
		--grid-color: var(--color-mistral-yellow-1);

		background-image:
			linear-gradient(
				to right,
				var(--grid-color, hsl(var(--color-mistral-yellow-3))) var(--grid-thickness, 1px),
				transparent var(--grid-thickness, 1px)
			),
			linear-gradient(
				to bottom,
				var(--grid-color, hsl(var(--color-mistral-yellow-3))) var(--grid-thickness, 1px),
				transparent var(--grid-thickness, 1px)
			);
		background-size: var(--grid-size-x, 50.12px) var(--grid-size-y, 50.14px);
	}
</style>
