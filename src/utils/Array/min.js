export default function(array) {
	return array.reduce((minValue, value) => Math.min(minValue, value));
}
