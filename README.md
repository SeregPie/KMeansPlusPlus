# KMeansPlusPlus

```
KMeansPlusPlus(values, clustersCount, {
  distance(value, otherValue) { /* euclidean distance */ },
  map(value) { /* identity */ },
  maxIterations: 1024,
  mean(...values) { /* centroid */ },
  random: Math.random,
})
```

Implementation of the [k-means-plus-plus algorithm](https://en.wikipedia.org/wiki/k-means++) to partition the values into the clusters.

| argument | description |
| ---: | :--- |
| `values` | An iterable of the values to be clustered. |
| `clustersCount` | Nhe number of the clusters. |
| `distance` | A function to calculate the distance between two values. |
| `map` | A function to map the values. |
| `maxIterations` | The maximum number of iterations until the convergence. |
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

### ES module

```javascript
import KMeansPlusPlus from '@seregpie/k-means-plus-plus';
```

### Node

```javascript
let KMeansPlusPlus = require('@seregpie/k-means-plus-plus');
```

### browser

```html
<script src="https://unpkg.com/just-my-luck"></script>
<script src="https://unpkg.com/@seregpie/vector-math"></script>
<script src="https://unpkg.com/@seregpie/k-means"></script>
<script src="https://unpkg.com/@seregpie/k-means-plus-plus"></script>
```

The module is globally available as `KMeansPlusPlus`.

## usage

```javascript
let vectors = [[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]];
let clusters = KMeans(vectors, 2);
// => [[[1, 4], [0, 4], [1, 3]], [[6, 2], [5, 1], [4, 0]]]
```

---

Provide a `map` function to convert a value to a vector.

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
  new Athlete('A', 185, 72), new Athlete('B', 183, 84), new Athlete('C', 168, 60),
  new Athlete('D', 179, 68), new Athlete('E', 182, 72), new Athlete('F', 188, 77),
  new Athlete('G', 180, 71), new Athlete('H', 180, 70), new Athlete('I', 170, 56),
  new Athlete('J', 180, 88), new Athlete('K', 180, 67), new Athlete('L', 177, 76),
];
let clusteredAthletes = KMeansPlusPlus(athletes, 2, {
  map: athlete => [athlete.weight / athlete.height],
});
console.log(JSON.parse(JSON.stringify(clusteredAthletes)));
// => [['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'], ['B', 'J', 'L']]
```
