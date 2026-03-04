type arrType = string | object | number;

// Shuffle array
// Not used anymore
export const shuffleArray = (arr: arrType[]) => {
	return arr.sort(() => Math.random() - 0.5);
};

// move the array index content by an offset
// with offset 1 : [1, 2, 3, 4] -> [4, 1, 2, 3]
// used to generate a grid of model in HomeIntro
export const offsetArray = (arr: arrType[], offseting: number) => {
	let i = offseting;
	const r = [];

	while (arr.length !== r.length) {
		r.push(arr[i]);

		i += 1;
		if (i >= arr.length) i = 0;
	}

	return r;
};
