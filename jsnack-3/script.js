// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.
const socialList = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram", "Youtube", "Twitter","Telegram","Bing"],
    "activeTab": 0
}
const removeList = ["Facebook","Instagram","Twitter","Telegram"]
socialList.tab = socialList.tab.filter((element) => {
    if (!removeList.includes(element.toLowerCase())){
        return true;
    }
});
console.log(socialList)
