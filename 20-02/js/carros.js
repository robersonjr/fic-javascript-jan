const cars = [
    {
        brand: "Toyota",
        model: "Corola",
        year: 2022
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2008
    },
    {
        brand: "Nissan",
        model: "Skyline GTR R-34",
        year: 1998
    },
    {
        brand: "Mitsubishi",
        model: "Eclipse GST",
        year: 1995
    },
    {
        brand: "Mazda",
        model: "RX-7",
        year: 1997
    },
];

/* Cria uma função e chama essa função displayCards, aqui mesmo */
function displayCards () {
    //Variavel
    const cardList = document.querySelector("#card-list");
    
    cars.forEach((car) => {
      // Criaos um elemento div pelo JS
      const cardDiv = document.createElement("div");
      //criamos uma class css car
      cardDiv.classList.add('car');

      //Criando o modelo
      const carModel = document.createElement("h2");
      carModel.textContent = `${car.brand} ${car.model}`;

      //Criando o ano
      const carYear = document.createElement("p");
      carYear.textContent = `Ano : ${car.year}`;

    
    //Imprimindo na tela as informações
    cardDiv.appendChild(carModel);
    cardList.appendChild(cardDiv);
    cardDiv.appendChild(carYear)


    })

};

// Chamar função
displayCards ();


