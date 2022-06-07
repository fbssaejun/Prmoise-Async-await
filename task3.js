// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchCountry = async () => {
  // Get the result of the API queue
  const res = await fetch('https://restcountries.eu/rest/v2/alpha/col');
  // Convert the returned data into json format
  const country = await rest.json();
  // Log out the reulst
  console.log(country);
}

fetchCountry();
