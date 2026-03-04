type arrType = string | object | number;

export const shuffleArray = (arr: arrType[]) => {
	return arr.sort(() => Math.random() - 0.5);
};

// move the array index content by an offset
// with offset 1 : [1, 2, 3, 4] -> [4, 1, 2, 3]
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
