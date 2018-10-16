import KMeans from 'almete.kmeans';

import Array_maxBy from '/utils/Array/maxBy';
import Array_min from '/utils/Array/min';

export default function(values, clustersCount, options) {
	let {
		map,
		distanceBetween,
	} = {...KMeans, ...options};
	let centroids = [];
	if (values.length > 0 && clustersCount > 0 && clustersCount < values.length) {
		let vectors = values.map(value => map(value));
		let indexes = values.map((value, index) => index);
		centroids.push(0);
		while (centroids.length < clustersCount) {
			let newCentroid = Array_maxBy(indexes, index => {
				let vector = vectors[index];
				return Array_min(centroids.map(index => {
					let centroid = vectors[index];
					return distanceBetween(vector, centroid);
				}));
			});
			centroids.push(newCentroid);
		}
		centroids = centroids.map(index => values[index]);
	}
	return KMeans(values, centroids, options);
}
