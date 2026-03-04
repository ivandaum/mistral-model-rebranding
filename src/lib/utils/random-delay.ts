// make a dynamic random delay
// used to let letters appears
// allow to set the start, the step delay between letter and a max (to avoid the animation to take too much time)
/**
 *
 * @param step : the step (in ms) between each elements.
 * 							 Usually i * my_step to allow every element to be animated after its previous sibling
 * @param maxDelay : the max delay it can be
 * @param delayOffset : if the delay should start with an offset (ex: 500ms)
 * @param rand : the random seed factor. Cancel it with rand=1
 * @returns
 */
export const randomDelay = (
	step: number,
	maxDelay: number = 9999,
	delayOffset = 0,
	rand = Math.random()
): number => {
	return Math.min(maxDelay, Math.floor(delayOffset + step * rand));
};
