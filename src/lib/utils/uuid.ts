export const uuid = () => {
	return crypto ? crypto.randomUUID() : Math.random().toString(16).slice(2);
};
