// explose title to letter while preventing balise to be cut
// TODO : deal with imbricated balises ?
export const explodeHtmlString = (text: string, regex: string = ''): string[] => {
	const letters = text.split(regex);

	const str: string[] = [];

	let isInBalise = false;
	let tmpBalise = '';

	letters.forEach((l) => {
		// closing balise, we clean the tmp variables
		if (l.match('>')) {
			tmpBalise += l;
			isInBalise = false;
			str.push(tmpBalise);
			tmpBalise = '';
		}
		// new balise, we start the process
		else if (l.match('<')) {
			isInBalise = true;
			tmpBalise += l;
		} else if (isInBalise) {
			tmpBalise += regex + l;
		} else {
			str.push(l);
		}
	});

	return str;
};
