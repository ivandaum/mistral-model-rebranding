// give a value between 0 and 1, based on "value" relative to min & max
export const normalize = (value: number, min: number, max: number) => {
	return (value - min) / (max - min);
};

// give a value between a and b, based on T (which is 0 to 1)
// normalized but inverse kind of
export const lerp = (a: number, b: number, t: number) => {
	return a * (1 - t) + b * t;
};

// round number to 2 numbers after digit
export const round = (value: number, decimals: number = 2) => {
	return parseFloat(Number(value).toFixed(decimals));
};
