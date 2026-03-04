import type { Snippet } from 'svelte';

export type ComponentProps = {
	children?: Snippet;
	node?: HTMLElement;
	class?: string | string[];
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

export type ParallaxComponentProps = ComponentProps & {
	min: number;
	max: number;
};

export type CardModelComponentProps = ComponentProps & {
	model: {
		title: string;
		description: string;
		intro: string;
		link: string;
	};
};

export type CardModelIconComponentProps = ComponentProps & {
	model: {
		title: string;
		link: string;
		image: string;
	};
};

export type CardModelSmallComponentProps = ComponentProps & {
	model: {
		title: string;
		description: string;
		link: string;
		image: string;
		imageSize?: string;
	};
};

export type AnimatedTextComponentProps = ComponentProps & {
	text: string;
	show: boolean;
	step: number;
	regex?: string;
	maxDelay?: number;
	delayOffset?: number;
	rand?: number;
};
