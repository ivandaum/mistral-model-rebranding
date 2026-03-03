import { currentScroll } from '$lib/utils/current-scroll';
import { normalize, round } from '$lib/utils/math';

export const sectionScrollProgress = (section: HTMLElement, scrollOffset: number = 0) => {
	if (!section) return { init: () => null, getScroll: () => null };
	let height = 0,
		top = 0;

	return {
		init: () => {
			const rect = section.getBoundingClientRect();

			// save location to be sure to scroll at the right path
			top = rect.top + currentScroll();
			// TODO : deal with scrollOffset < rect height
			// may break the scroll
			height = rect?.height - scrollOffset;
		},

		getScroll: (callback: (t: number) => void) => {
			// check where the current scroll is in the section
			let t = normalize(currentScroll(), top, top + height);
			t = Math.min(1, Math.max(0, t));
			t = round(t);

			callback(t);
		}
	};
};
