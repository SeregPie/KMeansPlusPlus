export default function(array, iteratee) {
	let maxIterateeValue = iteratee(array[0], 0);
	return array.reduce((maxValue, value, index) => {
		let iterateeValue = iteratee(value, index);
		if (maxIterateeValue < iterateeValue) {
			maxIterateeValue = iterateeValue;
			maxValue = value;
		}
		return maxValue;
	});
}
