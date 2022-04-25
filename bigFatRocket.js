//Écrire une fonction nommée bigFatRocket qui affiche les nombres de 1 à 87 mais qui affiche les string Big pour un multiple de 3, Fat pour un multiple de 5 et enfin Rocket pour un multiple de 3 et 5.
//Votre code doit contenir la déclaration de fonction et l'exécution de fonction.
//10min

//MON 25 APR 2022
const bigFatRocket = () => {
  for (let i = 1; i < 88; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Rocket");
    } else if (i % 5 === 0) {
      console.log("Fat");
    } else if (i % 3 === 0) {
      console.log("Big");
    } else {
      console.log(i);
    }
  }
};
bigFatRocket();

//pour savoir si un nombre n1 est multiple d'un nombre n2, on cherche si le reste de la division de ce nombre n1 par le nombre n2 dont il est potentiellement le mutliple est nul. Si le reste est nul, notre nombre n1 est bien multiple du nombre n2.
