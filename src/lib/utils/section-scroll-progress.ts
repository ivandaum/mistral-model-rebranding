import { currentScroll } from '$lib/utils/current-scroll';
import { normalize, round } from '$lib/utils/math';

// TODO: make a proper svelte hook ?
// this tool will allow use to get the current scroll in a given section
// to know how much we have scrolled in it
// will return "r" (0 -> 1) based on the progress
export const sectionScrollProgress = (
	section: HTMLElement,
	scrollOffset: number = 0,
	scrollableAreaOffset: number = 0
) => {
	if (!section) {
		return {
			init: () => null,
			onScroll: () => null
		};
	}

	let height = 0,
		top = 0;

	return {
		init: () => {
			const rect = section.getBoundingClientRect();

			// save location to be sure to scroll at the right path
			top = rect.top + currentScroll();
			// TODO : deal with scrollableAreaOffset < rect height
			// may break the scroll
			height = rect?.height - scrollableAreaOffset;
		},

		onScroll: (callback: (t: number) => void) => {
			// check where the current scroll is in the section
			let t = normalize(currentScroll() + scrollOffset, top, top + height);
			t = round(t);

			callback(t);
		}
	};
};
