const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

    const idDivThree = pokemon.filter(p => p.id%3 === 0);
    console.log(idDivThree);

    const firePokemon = pokemon.filter(p => p.types.indexOf('fire')!=-1);
    console.log(firePokemon);

    const multiType = pokemon.filter(p => p.types.length > 1);
    console.log(multiType);

    const pokemonNames = pokemon.map(p => p.name);
    console.log(pokemonNames);

    const idOver99 = pokemon.filter(p => p.id > 99);
    const over99Names = idOver99.map(p => p.name);
    console.log(over99Names);

    const singleType = pokemon.filter(p => p.types.length <=1);
    const onlyPoison = singleType.filter(p => p.types.indexOf('poison')!=-1);
    console.log(onlyPoison);

    const secondTypeFlying = multiType.filter(p => p.types[1]==="flying");
    const firstOfFlying = secondTypeFlying.map(p => p.types[0]);
    console.log(firstOfFlying);
    
    const normalPokemon = pokemon.filter(p => p.types.indexOf('normal')!=-1);
    console.log(normalPokemon.length);