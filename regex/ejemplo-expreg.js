const names = ["Pedro", "Sara", "Miriam", "Nestor", "Adrian", "sandro"];

names.forEach(function(name) {
    const firstLetter = name.at(0).toLowerCase();
    const lastLetter = name.at(-1).toLowerCase();
    if ((firstLetter == "p" || firstLetter == "s") && (lastLetter == "o" || lastLetter == "a")) {
        console.log(`El nombre ${name} cumple las restrinciones.`);
    }

})

names.forEach(function(name) {
    const regex = /^(p|s).+(o|a)$/i;
    
    if (regex.test(name)) {
        console.log(`El nombre ${name} cumple las restrinciones.`);
    }
})