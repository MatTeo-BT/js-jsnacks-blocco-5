// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.
const cars = [
    {
        brand: `porsche`,
        model:`cayenne`,
        engine:`gas`
    },
    {
        brand: `fiat`,
        model:`panda`,
        engine:`diesel`
    },
    {
        brand: `fiat`,
        model:`punto`,
        engine:`diesel`
    },
    {
        brand: `porsche`,
        model:`macan`,
        enginer:`gpl`
    },
    {
        brand: `porsche`,
        model:`cayenne`,
        engine:`methane`
    },
    {
        brand: `audi`,
        model:`q3`,
        engine:`gas`
    },
    {
        brand: `audi`,
        model:`q8`,
        engine:`electric`
    },
    {
        brand: `porsche`,
        model:`panamera`,
        engine:`gas`
    },
    {
        brand: `audi`,
        model:`q5`,
        engine:`methane`
    },
    {
        brand: `toyota`,
        model:`yaris`,
        engine:`electric`
    }
]
const dieselCars = cars.filter((car) => {
    if (car.engine === `diesel`){
        return true
    }
});
console.log(dieselCars)
const gasCars = cars.filter((car) => {
    if (car.engine === `gas`){
        return true
    }
});
console.log(gasCars)
const otherCars = cars.filter((car) => {
    if (car.engine != `gas` && car.engine != `diesel`){
        return true
    }
});
console.log(otherCars)