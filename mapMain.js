const countryContainer = document.getElementsByClassName("countryMapContainer");
const countryList = document.getElementById("countrylist");


async function getAllCountries() {
    const allCountriesResponse = await axios.get("https://restcountries.eu/rest/v2/all");
    sortCountries(allCountriesResponse);
    for (const country of allCountriesResponse.data) {
        addCountryToList(country);
    }
    for (const country of allCountriesResponse.data){
        checkContinentForCountry(country)
    }
    return allCountriesResponse;
}

async function addCountryToList(country) {
    //class toevoegen aan countryelement
    const {name, flag} = country;
    const countryElement = document.createElement('li');
    countryElement.textContent = name;
    const flagElement = document.createElement('img');
    flagElement.setAttribute('src', flag);
    flagElement.setAttribute('class', 'flag');

    switch (checkContinentForCountry(country)){
        case "Africa":
            countryElement.style.color = "rgb(91,118,188)"
            break;
        case "Americas":
            countryElement.style.color = "rgb(89,128,81)"
            break;
        case "Asia":
            countryElement.style.color = "rgb(194,87,94)"
            break;
        case "Europe":
            countryElement.style.color = "rgb(249,212,88)"
            break;
        case "Oceania":
            countryElement.style.color = "rgb(155,90,181)"
            break;
        default:
            countryElement.style.color = "pink"
            break;
    }

    countryElement.appendChild(flagElement);
    countryList.appendChild(countryElement);

}

function checkContinentForCountry(country){
        const {region} = country;
        return region;
}

function sortCountries(countries) {
    countries.data.sort((countryA, countryB) => {
        return countryA.population - countryB.population;
    });
}



getAllCountries();