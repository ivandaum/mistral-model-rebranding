export type ObserverProps = {
	element: HTMLElement;
	onShow: () => void;
	onHide?: () => void;
	threshold?: number[];
	rootMargin?: string;
};
