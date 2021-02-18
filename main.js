const searchbutton = document.getElementById('searchbutton');
const countryInput = document.getElementById("countryInput");
const container = document.getElementById("countryContainer");

async function getCountryInformation(country) {
   try {
       const response = await axios.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
       let getFlag = response.data[0].flag;
       const flagImage = document.createElement("img");
       flagImage.setAttribute("src", getFlag);
       const countryInfo = document.createElement("p");
       countryInfo.setAttribute('style', 'white-space: pre;');
       countryInfo.textContent = response.data[0].name + "\n" + response.data[0].name + " is situated in " + response.data[0].subregion + ". \n" +
           "It has a population of " + response.data[0].population + " people. \n" +
           "The capital city is " + response.data[0].capital + " \n" +
           getCurrencyInformation(response.data) + "\n" +
           getLanguageInformation(response.data);
       container.appendChild(flagImage);
       container.appendChild(countryInfo);
   } catch (e){
            const errormessage = document.createElement("p")
            errormessage.textContent = 'dat is echt geen land'
            container.appendChild(errormessage)
   }
}

function getLanguageInformation(country) {
    if (country[0].languages.length < 2) {
        return "They speak " + country[0].languages[0].name;
    } else {
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
    if (country[0].currencies.length < 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s";
    }
    if (country[0].currencies.length >= 2) {
        return "and you can pay with " + country[0].currencies[0].name + "'s and " + country[0].currencies[1].name;
    }
}

const userInput = countryInput.value;
searchbutton.addEventListener("click", function () {
    removeChildren();
    removeChildren();
    const userInput = countryInput.value;
    getCountryInformation(userInput);
    countryInput.value = "";
});

countryInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        removeChildren();
        removeChildren();
        const userInput = countryInput.value;
        getCountryInformation(userInput);
        console.log(userInput);
        countryInput.value = "";
    }
});

function removeChildren() {
    for (const containerNode of container.childNodes) {
        container.removeChild(containerNode);
    }
}
