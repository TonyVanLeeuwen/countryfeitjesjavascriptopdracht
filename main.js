const searchbutton = document.getElementById('searchbutton');

async function getCountryInformation(country) {
    // console.log("werk ik? ")
    const belgie = "belgie"
    const response = await axios.get("https://restcountries.eu/rest/v2/name/" + country +"?fullText=true");
    console.log(response)
}

const belgie = "belgie"
searchbutton.addEventListener("click", function(){
    getCountryInformation(belgie)
});

