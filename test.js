/*eslint no-console: 0*/

let KMeansPlusPlus = require('./almete.KMeansPlusPlus');

{
	let vectorSize = 3;
	let vectorsCount = 1000;
	let clustersCount = 12;
	let vectors = Array.from({length: vectorsCount}, () => Array.from(({length: vectorSize}), () => Math.random()));
	let clusters = KMeansPlusPlus(vectors, clustersCount);
	console.log(clusters.length === clustersCount); // => true
	console.log([].concat(...clusters).length === vectorsCount); // => true
}
{
	let vectors = [
		[6, 7, 9],
		[0, 1, 6],
		[5, 2, 4],
		[7, 7, 0],
		[0, 4, 8],
		[0, 9, 2],
		[2, 3, 5],
		[0, 3, 6],
		[7, 6, 4],
		[8, 3, 4],
		[7, 8, 7],
		[6, 5, 5],
		[8, 5, 8],
		[3, 8, 2],
		[0, 4, 9],
	];
	let clusters = KMeansPlusPlus(vectors, 3);
	console.log(JSON.stringify(clusters[0]));
	console.log(JSON.stringify(clusters[1]));
	console.log(JSON.stringify(clusters[2]));
}
{
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
		new Athlete('A', 185, 72),
		new Athlete('B', 170, 56),
		new Athlete('C', 168, 60),
		new Athlete('D', 179, 68),
		new Athlete('E', 182, 72),
		new Athlete('F', 188, 77),
		new Athlete('G', 180, 71),
		new Athlete('H', 180, 70),
		new Athlete('I', 183, 84),
		new Athlete('J', 180, 88),
		new Athlete('K', 180, 67),
		new Athlete('L', 177, 76),
	];
	let clusters = KMeansPlusPlus(athletes, 2, {
		map: athlete => [athlete.height, athlete.weight],
	});
	console.log(JSON.stringify(clusters));
}
