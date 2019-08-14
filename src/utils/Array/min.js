export default function(array) {
	return array.reduce((r, n) => Math.min(r, n));
}
