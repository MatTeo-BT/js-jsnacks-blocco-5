// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, 
// una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
const users = [
    {
        name:`Nino`,
        surname:`Frassica`,
        age: `18`,
    },
    {
        name:`Giacomo`,
        surname:`Poretti`,
        age: `38`,
    },
    {
        name:`Giovanni`,
        surname:`Storti`,
        age: `15`,
    },
    {
        name:`Aldo`,
        surname:`Baglio`,
        age: `60`,
    },
    {
        name:`Checco`,
        surname:`Zalone`,
        age: `13`,
    },
    {
        name:`Enrico`,
        surname:`Brignano`,
        age: `42`,
    },
    {
        name:`Massimo`,
        surname:`Boldi`,
        age: `88`,
    },
]
const adult = users.map ((user) => {
    if (user.age >= 18){
        return `può guidare`
    }
});
console.log(adult)