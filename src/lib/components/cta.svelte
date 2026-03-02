<script lang="ts">
	import type { CtaComponentProps } from '$lib/types/components';

	const { href, ...props }: CtaComponentProps = $props();
</script>

<a class="w-auto" {href}>
	{@render props.children?.()}
</a>
