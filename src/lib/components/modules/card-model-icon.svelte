<script lang="ts">
	import type { CardModelIconComponentProps } from '$lib/types/components';
	import { cn } from '$lib/utils/cn';

	const { model }: CardModelIconComponentProps = $props();

	// when clicking on a link which is an anchor inside the page
	// we stop the navigation and we smooth scroll to the element
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
		'flex shrink-0 cursor-default flex-col items-center justify-center p-4 grayscale-100 ',
		// sizing
		'aspect-square  min-h-[5dvh] min-w-[5vw] md:min-h-[25dvh] md:min-w-[12vw]',
		'transition-all delay-500 hover:bg-mistral-yellow-1 hover:opacity-100 hover:grayscale-0 hover:delay-0'
	])}
>
	<div class="flex size-18 items-center justify-center md:size-24">
		<img class="size-10 md:size-18" src={model.image} alt={model.title} />
	</div>
	<p class="hidden w-full text-center font-medium text-mistral-text-brown md:block md:text-xl">
		{model.title}
	</p>
</a>
