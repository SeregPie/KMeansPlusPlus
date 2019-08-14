let assert = require('assert');

let KMeansPlusPlus = require('./index');

{
	let vectorSize = 3;
	let vectorsCount = 1000;
	let clustersCount = 12;
	let vectors = Array.from({length: vectorsCount}, () => Array.from(({length: vectorSize}), () => Math.random()));
	let clusters = KMeansPlusPlus(vectors, clustersCount);
	assert.strictEqual(clusters.length, clustersCount);
	assert.strictEqual(clusters.flat().length, vectorsCount);
}

assert.deepStrictEqual(KMeansPlusPlus([], 3), [[], [], []]);

assert.deepStrictEqual(KMeansPlusPlus([[1], [2], [3]], 0), []);

{
	let vectors = [[1], [2], [3]];
	assert.deepStrictEqual(KMeansPlusPlus(vectors, 1), [vectors]);
}
