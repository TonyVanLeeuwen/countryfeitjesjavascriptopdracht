const countryContainer = document.getElementsByClassName("countryMapContainer");
const countryList = document.getElementById("countrylist");


async function getAllCountries() {
    const allCountriesResponse = await axios.get("https://restcountries.eu/rest/v2/all");
    allCountriesResponse.data.sort((countryA, countryB) => {
        return countryA.population - countryB.population;
    });
    for (const country of allCountriesResponse.data) {
        addCountryToList(country);
    }
    return allCountriesResponse;
}

function addCountryToList(country) {
    const {name, flag} = country;
    const countryElement = document.createElement('li');
    countryElement.textContent = name;
    const flagElement = document.createElement('img');
    flagElement.setAttribute('src', flag);
    flagElement.setAttribute('class', 'flag');
    countryElement.appendChild(flagElement);
    countryList.appendChild(countryElement);
}


getAllCountries();