<script lang="ts">
	import type { CtaComponentProps } from '$lib/types/components';
	import arrow from '$lib/assets/chevron-right.svg';
	import { cn } from '$lib/utils/cn';

	const { href, ...props }: CtaComponentProps = $props();
</script>

<a class={cn('inline-flex border border-mistral-text-1 font-normal', props.class)} {href}>
	<p class="py-2 pl-4 text-nowrap">{@render props.children?.()}</p>
	<span class="flex size-10 shrink-0 items-center justify-center">
		<img class="size-3 translate-y-[1px]" src={arrow} alt="arrow" />
	</span>
</a>
