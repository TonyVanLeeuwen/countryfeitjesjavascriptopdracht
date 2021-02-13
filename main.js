const searchbutton = document.getElementById('searchbutton');

async function getCountryInformation(country) {
    const response = await axios.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
    console.log(response.data[0]);
    console.log("talen: " + response.data[0].languages[0].name);
    console.log(response.data[0].name + " is situated in " + response.data[0].subregion + ". \n" +
        "It has a population of " + response.data[0].population + " people. \n" +
        "The capital city is " + response.data[0].capital + " \n" +
        getCurrencyInformation(response.data) + "\n" +
        getLanguageInformation(response.data));
}

function getLanguageInformation(country) {
    // console.log("hallo functie");
    if (country[0].languages.length < 2) {
        return "They speak " + country[0].languages[0].name;
    } else {
        console.log("dit land heeft meer dan 1 taal");
        let text = "They speak ";
        for (let i = 0; i < country[0].languages.length; i++) {
            if (country[0].languages[i] === country[0].languages[country[0].languages.length - 2]) {
                text += country[0].languages[i].name + " and ";
            } else if (country[0].languages[i] === country[0].languages[country[0].languages.length - 1]) {
                text += country[0].languages[i].name;
            } else {
                text += country[0].languages[i].name + ", ";
            }
        }
        return text;
    }
}

function getCurrencyInformation(country) { //als alles werkt, bug wegwerken voor valuta eindigend op medeklinkers (vb. gulden's moet zijn guldens)
    // console.log("hallo functie");
    if (country[0].currencies.length < 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s";
    }
    if (country[0].currencies.length >= 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s and " + country[0].currencies[1].name;
    }
}


const belgie = "belgie";
const aruba = "aruba";
const Nederland = "nederland";
searchbutton.addEventListener("click", function () {
    getCountryInformation(belgie);
});

// getCurrencyInformation(belgie);
// getLanguageInformation(belgie)