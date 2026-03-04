<script lang="ts">
	/**
	 * This component is an helper to help split a text to <span/>, to be able to animate each letters/words.
	 * Every letters will have a unique "--delay" html variable
	 *
	 * By default, each letter will have a random delay, but this can be controlled by overwritting
	 * the "rand" seed variable (with rand="1" for example, to avoid the factor to be random)
	 *
	 * See `utils/random-delay.ts` for explanation about each args
	 */

	import type { AnimatedTextComponentProps } from '$lib/types/components';
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
	}: AnimatedTextComponentProps = $props();
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
			// if we have to make a line break
			// need to be after "props.class"
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
