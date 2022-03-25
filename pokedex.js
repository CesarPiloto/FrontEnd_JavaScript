const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeInput = pokeNameInput.value;
    pokeInput = pokeInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./triste2.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            
            let name = data.name;
            pokename(name);
            console.log(name);
           
            let tipo = data.types.map(typ => typ.type.name); 
            poketipo(tipo);
            console.log(tipo);

            let hp = data.stats[0].base_stat;
            pokestat1(hp);
            console.log(hp);

            let attack = data.stats[1].base_stat;
            pokeAttack(attack);
            console.log(attack);
            
            let defense = data.stats[2].base_stat;
            pokeDefense(defense);
            console.log(defense);

            let special_attack = data.stats[3].base_stat;
            pokeSpecialAttack(special_attack);
            console.log(special_attack);

            let special_defense = data.stats[4].base_stat;
            pokeSpecialDefense(special_defense);
            console.log(special_defense);

            let speed = data.stats[5].base_stat;
            pokeSpeed(speed);
            console.log(speed);
            
            let movimiento = data.moves.map(move => move.move.name);
            pokeMovimiento(movimiento);
            console.log(movimiento);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokename = (name) => {
    const nombre = document.getElementById("name");
    nombre.innerHTML = (name);
}

const poketipo = (tipo) => {
    const type = document.getElementById("tipo");
    type.innerHTML = ("Tipo: " + tipo);
}
const pokestat1 = (hp) => {
    const estadistica1 = document.getElementById("hp");
    estadistica1.innerHTML = ("HP: " + hp); 
}
const pokeAttack = (attack) => {
    const estadistica2 = document.getElementById("attack");
    estadistica2.innerHTML = ("Ataque: " + attack);
}
const pokeDefense = (defense) => {
    const estadistica3 = document.getElementById("defense");
    estadistica3.innerHTML = ("Defensa: " + defense);
}
const pokeSpecialAttack = (special_attack) => {
    const estadistica4 = document.getElementById("special_attack");
    estadistica4.innerHTML = ("Ataque especial: " + special_attack);
}
const pokeSpecialDefense = (special_defense) => {
    const estadistica5 = document.getElementById("special_defense");
    estadistica5.innerHTML = ("Defensa especial: " + special_defense);
}
const pokeSpeed = (speed) => {
    const estadistica6 = document.getElementById("speed");
    estadistica6.innerHTML = ("Velocidad: " + speed);
}
const pokeMovimiento = (movimiento) => {
    const movi = document.getElementById("movimiento");
    movi.innerHTML = ("Movimientos: " + movimiento);
}