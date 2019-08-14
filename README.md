# KMeansPlusPlus

```
KMeansPlusPlus(values, clustersCount, {
  distance(value, otherValue) { /* euclidean distance */ },
  map(value) { /* identity */ },
  maxIterations: 1024,
  mean(values) { /* centroid */ },
  random: Math.random,
})
```

Implementation of the [k-means-plus-plus algorithm](https://en.wikipedia.org/wiki/k-means++) to partition values into clusters.

| argument | description |
| ---: | :--- |
| `values` | An iterable of the values to be clustered. |
| `clustersCount` | The number of clusters. |
| `distance` | A function to calculate the distance between two values. |
| `map` | A function to map the values. |
| `maxIterations` | The maximum number of iterations until convergence. |
| `mean` | A function to calculate the mean value. |
| `random` | A function as the pseudo-random number generator. |

Returns the clustered values as an array of arrays.

## dependencies

- [KMeans](https://github.com/SeregPie/KMeans)
- [JustMyLuck](https://github.com/SeregPie/JustMyLuck)

## setup

### npm

```shell
npm install @seregpie/k-means-plus-plus
```

### es6

```javascript
import KMeansPlusPlus from '@seregpie/k-means-plus-plus';
```

### node

```javascript
let KMeansPlusPlus = require('@seregpie/k-means-plus-plus');
```

### browser

```html
<script src="https://unpkg.com/just-my-luck"></script>
<script src="https://unpkg.com/@seregpie/k-means"></script>
<script src="https://unpkg.com/@seregpie/k-means-plus-plus"></script>
```

The module is globally available as `KMeansPlusPlus`.

## usage

```javascript
let vectorSize = 3, vectorsCount = 1000, clustersCount = 12;
let vectors = Array.from({length: vectorsCount}, () => Array.from(({length: vectorSize}), () => Math.random()));
let clusters = KMeansPlusPlus(vectors, clustersCount);
console.log(clusters.length === clustersCount); // => true
console.log(clusters.flat().length === vectorsCount); // => true
```

---

You can use any values instead of vectors. In this case you must provide a function to convert a value to a vector.

```javascript
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
  new Athlete('A', 185, 72), new Athlete('B', 170, 56), new Athlete('C', 168, 60),
  new Athlete('D', 179, 68), new Athlete('E', 182, 72), new Athlete('F', 188, 77),
  new Athlete('G', 180, 71), new Athlete('H', 180, 70), new Athlete('I', 183, 84),
  new Athlete('J', 180, 88), new Athlete('K', 180, 67), new Athlete('L', 177, 76),
];
let meanHeight = athletes.map(({height}) => height).reduce((r, n, i, {length}) => (r + n) / length, 0);
let meanWeight = athletes.map(({weight}) => weight).reduce((r, n, i, {length}) => (r + n) / length, 0);
let clusteredAthletes = KMeans(athletes, 2, {
  map: athlete => [athlete.height / meanHeight, athlete.weight / meanWeight],
});
```
