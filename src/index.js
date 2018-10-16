import KMeans from 'almete.kmeans';

import Array_maxBy from '/utils/Array/maxBy';
import Array_min from '/utils/Array/min';

export default function(values, clustersCount, options) {
	let {
		map,
		distanceBetween,
	} = {...KMeans, ...options};
	if (values.length < 1) {
		return [];
	}
	if (clustersCount < 1) {
		return [];
	}
	let vectors = values.map(value => map(value));
	let centroids = [vectors[0]];
	while (centroids.length < clustersCount) {
		centroids.push(
			Array_maxBy(vectors, vector =>
				Array_min(centroids.map(centroid =>
					distanceBetween(vector, centroid)
				))
			)
		);
	}
	return KMeans(values, centroids, options);
}
