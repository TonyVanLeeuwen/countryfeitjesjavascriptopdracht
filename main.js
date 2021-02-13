const searchbutton = document.getElementById('searchbutton');

async function getCountryInformation(country) {
    const response = await axios.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
    console.log(response.data[0]);
    console.log(response.data[0].name + " is situated in " + response.data[0].subregion + ". \n" +
        "It has a population of " + response.data[0].population + " people. \n" +
        "The capital city is " + response.data[0].capital + " \n" +
        getCurrencyInformation(response.data))
}

function getCurrencyInformation(country) {
    console.log("hallo functie");
    if (country[0].currencies.length < 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s";
    }
    if (country[0].currencies.length >= 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s and " + country[0].currencies[1].name;
    }
}


const belgie = "belgie";
searchbutton.addEventListener("click", function () {
    getCountryInformation(belgie);
});

// getCurrencyInformation(belgie);