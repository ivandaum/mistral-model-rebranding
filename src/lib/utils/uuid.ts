// generate unique ID : used to add RAF animation
// when a component is adding the same animation mutliple time
// (for example: parallax section could be trigger for multiple elements, visible at the same time)
export const uuid = (): string => {
	return crypto ? crypto.randomUUID() : Math.random().toString(16).slice(2);
};
