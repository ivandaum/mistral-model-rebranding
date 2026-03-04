import type { ObserverProps } from '$lib/types/utils';

// Custom IntersectionObserver so I don't have to rewrite everything all the time
// Is used to know when to trigger animation (if element is visible)
export const observer = ({
	element,
	onShow,
	onHide,
	threshold = [],
	rootMargin = '0px 0px 0px 0px'
}: ObserverProps): { destroy: () => void } => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					onShow();
				} else {
					onHide?.();
				}
			});
		},
		{ threshold, rootMargin }
	);

	observer.observe(element);

	return {
		destroy: () => {
			observer.unobserve(element);
		}
	};
};
