import { currentScroll } from '$lib/utils/current-scroll';
import { normalize } from '$lib/utils/math';

// TODO: make a proper svelte hook ?
// this tool will allow use to get the current scroll in a given section
// to know how much we have scrolled in it
// function onScroll will return a value from 0 to 1, based on the progress
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
		top = 0,
		bottom = 0;

	return {
		init: () => {
			const rect = section.getBoundingClientRect();

			// save location to be sure to scroll at the right path
			top = rect.top + currentScroll();
			// TODO : deal with scrollableAreaOffset < rect height
			// may break the scroll
			height = rect?.height - scrollableAreaOffset;

			bottom = top + height;
		},

		onScroll: (callback: (t: number) => void) => {
			// check where the current scroll is in the section
			const t = normalize(currentScroll() + scrollOffset, top, bottom);
			callback(t);
		}
	};
};
