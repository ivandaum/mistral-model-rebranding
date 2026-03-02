<script lang="ts">
	import type { CtaComponentProps } from '$lib/types/components';

	const { href, ...props }: CtaComponentProps = $props();
</script>

<a class="inline-block underline" {href}>
	{@render props.children?.()} ->
</a>
