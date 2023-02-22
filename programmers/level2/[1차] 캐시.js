function solution(cacheSize, cities) {
  cities = cities.map(ele => ele.toLowerCase())
  let cache = []
  let second = 0
  if (cacheSize === 0) return cities.length * 5
  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      second++
      cache.splice(cache.indexOf(cities[i]), 1)
      cache.push(cities[i])
    } else {
      second += 5
      if (cache.length === cacheSize) cache.shift()
      cache.push(cities[i])
    }
  }
  return second
}
