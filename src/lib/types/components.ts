import type { Snippet } from 'svelte';

export type ComponentProps = {
	children?: Snippet;
	node?: HTMLElement;
	class?: string;
	style?: string;
};

export type CtaComponentProps = ComponentProps & {
	href?: string;
};
