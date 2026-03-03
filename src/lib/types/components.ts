import type { Snippet } from 'svelte';

export type ComponentProps = {
	children?: Snippet;
	node?: HTMLElement;
	class?: string;
	style?: string;
	onclick?: () => void;
};

export type CtaComponentProps = ComponentProps & {
	href?: string;
	text: string;
};

export type TitleComponentProps = ComponentProps & {
	headline: string;
	heading: 'h1' | 'h2' | 'h3';
	text?: string;
};

export type SubtitleComponentProps = ComponentProps & {
	headline: string;
	text?: string;
};

export type TabsComponentProps = ComponentProps & {
	items: string[];
	value: number;
	onselect?: (index: number) => void;
};

export type LetterAnimatedComponentProps = ComponentProps & {
	text: string;
	show: boolean;
	step: number;
	regex?: string;
	maxDelay?: number;
	delayOffset?: number;
	rand?: number;
};
