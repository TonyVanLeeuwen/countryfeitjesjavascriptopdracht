const searchbutton = document.getElementById('searchbutton');

async function getCountryInformation(country) {
    // console.log("werk ik? ")
    const response = await axios.get("https://restcountries.eu/rest/v2/name/" + country +"?fullText=true");
    console.log(response.data[0]);

    console.log(response.data[0].name + " is situated in " + response.data[0].subregion + ". \n" +
        "It has a population of " + response.data[0].population + " people");
}

const belgie = "belgie"
searchbutton.addEventListener("click", function(){
    getCountryInformation(belgie)
});

