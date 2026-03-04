<script lang="ts">
	import checkmark from '$lib/assets/checkmark.svg';

	import type { TabsComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	let { items, value, onselect }: TabsComponentProps = $props();

	let index = $derived(value);

	const onSelectHandler = (i: number) => {
		onselect?.(i);
	};
</script>

<div class="inline-flex w-full justify-center border md:w-[612px]">
	{#each items as text, i}
		<button
			class={cn(
				'flex flex-1 cursor-default items-center justify-between gap-10 border-black px-4 py-2 text-sm/normal whitespace-nowrap',
				[i === index && 'bg-black text-white'],
				[i !== 0 && 'border-l']
			)}
			onclick={() => onSelectHandler(i)}
			aria-label={text}
		>
			{text}

			{#if i === index}
				<img src={checkmark} alt="checkmark" class="animate-blink-twice" />
			{/if}
		</button>
	{/each}
</div>
