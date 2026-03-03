// make a dynamic random delay to let letters appears
// allow to set the start, the step delay between letter and a max to
// avoid the animation to take too much time
export const randomDelay = (
	step: number,
	maxDelay: number = 9999,
	delayOffset = 0,
	rand = Math.random()
) => {
	return Math.min(maxDelay, Math.floor(delayOffset + step * rand));
};
