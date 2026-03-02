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

export type TitleComponentProps = ComponentProps & {
	headline: string;
	text: string;
	heading: 'h1' | 'h2' | 'h3';
};

export type SubtitleComponentProps = ComponentProps & {
	headline: string;
	text: string;
};
