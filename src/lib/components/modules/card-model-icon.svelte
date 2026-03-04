<script lang="ts">
	import type { ModelSquareComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	const { model }: ModelSquareComponentProps = $props();

	const onClick = (e: Event) => {
		if (model.link.startsWith('#')) {
			e.preventDefault();
			const el = document.querySelector(model.link);
			const top = el?.getBoundingClientRect().top || 0;

			window.scrollTo({ top, behavior: 'smooth' });
		}
	};
</script>

<a
	href={model.link}
	onclick={onClick}
	class={cn([
		'flex aspect-square min-h-[25dvh] min-w-[12vw] shrink-0 cursor-default flex-col items-center justify-center p-4 grayscale-100',
		'transition-all delay-500 hover:bg-mistral-yellow-1 hover:opacity-100 hover:grayscale-0 hover:delay-0'
	])}
>
	<div class="flex size-24 items-center justify-center">
		<img class="size-18" src={model.image} alt={model.title} />
	</div>
	<p class="text-xl font-medium text-mistral-text-brown">{model.title}</p>
</a>
