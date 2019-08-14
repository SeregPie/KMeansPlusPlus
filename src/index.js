import KMeans from '@seregpie/k-means';
import JustMyLuck from 'just-my-luck';

import Array_indexes from './utils/Array/indexes';
import Array_min from './utils/Array/min';

export default function(rawValues, clustersCount, options = {}) {
	let {
		distance: calculateDistance = KMeans.distance,
		map = KMeans.map,
		random = KMeans.random,
	} = options;
	if (!clustersCount) {
		return [];
	}
	rawValues = Array.from(rawValues);
	if (clustersCount === rawValues.length) {
		return KMeans(rawValues, rawValues, options);
	}
	if (clustersCount > rawValues.length) {
		return KMeans(rawValues, clustersCount, options);
	}
	let values = rawValues.map(map);
	let indexedMeanCandidates = Array_indexes(values);
	let myLuck = new JustMyLuck(random);
	let index = myLuck.index(indexedMeanCandidates);
	let indexedMeans = indexedMeanCandidates.splice(index, 1);
	while (indexedMeans.length < clustersCount) {
		let index = myLuck.indexWeighted(indexedMeanCandidates.map(i => {
			let meanCandidate = values[i];
			let distance = Array_min(indexedMeans.map(i => {
				let mean = values[i];
				return calculateDistance(meanCandidate, mean);
			}));
			return [i, Math.pow(distance, 2)];
		}));
		let [i] = indexedMeanCandidates.splice(index, 1);
		indexedMeans.push(i);
	}
	let rawMeans = indexedMeans.map(i => rawValues[i]);
	return KMeans(rawValues, rawMeans, options);
}
