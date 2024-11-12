const myBikes = [
    {nome: "bike1", peso: 10, colore: "verde"},
    {nome: "bike2", peso: 7, colore: "rosso"},
    {nome: "bike3", peso: 9, colore: "giallo"},
    {nome: "bike4", peso: 10, colore: "blu"},
    {nome: "bike5", peso: 4, colore: "nero"},
]

let lighterBike = myBikes[0];

for (let i = 0; i < myBikes.length; i++) {
    if (myBikes[i].peso < lighterBike.peso) {
        lighterBike = myBikes [i];
    }
}

console.log("La bici più leggera è:", lighterBike);