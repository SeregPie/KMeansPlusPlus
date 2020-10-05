export default function(that) {
	let result = 0;
	that.reduce((r, n, i) => {
		if (n < r) {
			r = n;
			result = i;
		}
		return r;
	});
	return result;
}
