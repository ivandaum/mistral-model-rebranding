<script lang="ts">
	import type { LetterAnimatedComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';
	import { explodeHtmlString } from '$lib/utils/explode-html-string';
	import { randomDelay } from '$lib/utils/random-delay';

	const {
		text,
		show,
		step,
		maxDelay,
		delayOffset,
		rand,
		regex = '',
		...props
	}: LetterAnimatedComponentProps = $props();
</script>

{#each explodeHtmlString(text, regex) as letter, i}
	<span
		style={`--delay: ${randomDelay(i * step, maxDelay, delayOffset, rand)}ms;${props.style}`}
		class={cn(
			'animate-letter transition-all duration-0',
			{
				'opacity-0': !show
			},
			props.class,
			{
				'block h-0': ['<br>', '<br />'].includes(letter)
			}
		)}
	>
		{@html letter}
	</span>
{/each}

<style lang="scss">
	.animate-letter {
		transition-delay: var(--delay);
	}
</style>
