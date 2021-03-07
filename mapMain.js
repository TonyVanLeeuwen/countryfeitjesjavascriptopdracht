
console.log("gekoppeld?")

async function getAllCountries(){
    const allCountriesResponse = await axios.get("https://restcountries.eu/rest/v2/all")
    return allCountriesResponse;
}

console.log(getAllCountries())