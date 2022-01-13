function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeadsSync = new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            attempts >= 100 && reject('Five "heads" in a row were not flipped after 100 tosses.')
        }
        resolve(`It took ${attempts} tosses to flip five "heads" in a row`)
    });
    

    fiveHeadsSync
        .then(resp => console.log(resp))
        .catch(err => console.log(err));