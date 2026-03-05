<script lang="ts">
	import checkmark from '$lib/assets/checkmark.svg';

	import type { TabsComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	let { items, value, onselect }: TabsComponentProps = $props();

	let index = $derived(value);

	// when selecting a tab
	const onSelectHandler = (i: number) => {
		onselect?.(i);
	};
</script>

<div class="inline-flex w-full justify-center border md:w-[612px]">
	{#each items as text, i}
		<button
			class={cn(
				'flex flex-1 cursor-default items-center justify-between gap-2 border-black px-4 py-2 text-sm/normal whitespace-nowrap md:gap-10',
				{
					'bg-black text-white': i === index,
					'hover:bg-mistral-yellow-3': i !== index,
					'border-l': i !== 0
				}
			)}
			onclick={() => onSelectHandler(i)}
			aria-label={text}
		>
			<span>{text}</span>

			{#if i === index}
				<img src={checkmark} alt="checkmark" class="animate-blink-twice" />
			{/if}
		</button>
	{/each}
</div>
