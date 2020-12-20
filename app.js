let Personne = function (sonNom, sonPrenom, sonAge, saVille) {
    this.name = sonNom;
    this.surname = sonPrenom;
    this.age = sonAge;
    this.ville = saVille;

    this.getAll = function () {
        return "Mon personnage s'appelle " + this.name + " " + this.surname + ", son age est " + this.age + " ans, sa ville natale est " +
            " " + this.ville;
    }

    this.setName = function (newName, newJob) {
        this.name = newName;
        this.job = newJob;
    }
}

let mikasa = new Personne('Ackerman', 'Mikasa', 20, 'Shinganshina');
let eren = new Personne('Jaeger', 'Eren', 20, 'Shinganshina');
let livaie = new Personne('Ackerman', 'Livaie', 30, 'Baffond de la capital');
let armin = new Personne('Arlet', 'Armin', 18, 'Fourmies');
let erwin = new Personne('Smiths', 'Erwin', 47, 'Trost');

let table = [
    mikasa,
    eren,
    livaie,
    armin,
    erwin
];

let infos = document.createElement('div');

for( let persos of table){

    infos.innerHTML += persos.name + " " + persos.surname + " " + persos.age + " " + persos.ville + "<br>" + " " + persos.getAll() + '<br>';
    document.body.appendChild(infos);
}

let classe = {
    hero1 : mikasa,
    hero2 : eren,
    hero3 : livaie,
    hero4 : armin,
    hero5 : erwin

}

let infos2 = document.createElement('div');

for (let member in classe){
    infos2.innerHTML += classe[member].name + " " + classe[member].surname + " " + classe[member].age + " " + classe[member].ville + "<br>" + " " + classe[member].getAll() + '<br>';
    document.body.appendChild(infos2);
}
