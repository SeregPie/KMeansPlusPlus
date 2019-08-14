let assert = require('assert');

let KMeansPlusPlus = require('./index');

/*{
	let vectors = [[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]];
	let clusters = KMeansPlusPlus(vectors, 2);
	assert.deepStrictEqual(clusters, [[[1, 4], [0, 4], [1, 3]], [[6, 2], [5, 1], [4, 0]]]);
}*/

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

assert.deepStrictEqual(KMeansPlusPlus([[1]], 2), [[[1]], []]);

/*{
	let Athlete = class {
		constructor(name, height, weight) {
			this.name = name;
			this.height = height;
			this.weight = weight;
		}
		toJSON() {
			return this.name;
		}
	};
	let athletes = [
		new Athlete('A', 185, 72), new Athlete('B', 183, 84), new Athlete('C', 168, 60),
		new Athlete('D', 179, 68), new Athlete('E', 182, 72), new Athlete('F', 188, 77),
		new Athlete('G', 180, 71), new Athlete('H', 180, 70), new Athlete('I', 170, 56),
		new Athlete('J', 180, 88), new Athlete('K', 180, 67), new Athlete('L', 177, 76),
	];
	let clusteredAthletes = KMeansPlusPlus(athletes, 2, {
		map: athlete => [athlete.weight / athlete.height],
	});
	assert.deepStrictEqual(JSON.parse(JSON.stringify(clusteredAthletes)), [['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'], ['B', 'J', 'L']]);
}*/
