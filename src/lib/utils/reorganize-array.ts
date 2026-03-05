type arrType = string | object | number;

// rearrange the array content by {x} index
// with offset="1" : [1, 2, 3, 4] -> [4, 1, 2, 3]
// with offset="3" : [1, 2, 3, 4] -> [2, 3, 4, 1]
// used to generate a grid of model in HomeIntro
export const reorganizeArray = (arr: arrType[], offset: number): arrType[] => {
	let i = offset;
	const r = [];

	while (arr.length !== r.length) {
		r.push(arr[i]);

		i += 1;
		if (i >= arr.length) i = 0;
	}

	return r;
};
