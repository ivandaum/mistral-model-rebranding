import type { ObserverProps } from '$lib/types/utils';

/**
 * Custom IntersectionObserver
 *
 * @return IntersectionObserver
 */
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
