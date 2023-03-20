const getRestLink = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countryHTML = countries.map((country) => getCountryHTML(country));
  const container = document.getElementById("card-section");
  container.innerHTML = countryHTML.join(" ");
};

const getCountryHTML = (country) => {
  return `
    <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="${country.flags.png}"
              alt="Shoes" class="bg-cover bg-center"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${country.name.common}!</h2>
            <p>${country.capital}</p>
          </div>
        </div>
    `;
};
getRestLink();
