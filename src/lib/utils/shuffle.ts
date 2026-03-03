type arrType = string | object | number;

export const shuffle = (arr: arrType[]) => {
	return arr.sort(() => Math.random() - 0.5);
};
