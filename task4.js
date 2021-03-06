// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async (alpha3Code) => {
  const columbia = await fetchCountry(alpha3Code)

  const neighbors = await Promise.all(
    columbia.borders.map(border => fetchCountry(border))
  )

  console.log(neighbors)
}

fetchCountryAndNeighbors('col'); // => Logs 5 neighbor countries of columbia to the console : Brazil, Ecuador, Peru, Venezuela, Panama each as an object with more specific data
