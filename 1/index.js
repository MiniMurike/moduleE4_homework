const Computer = {
    processor: "Intel core i9 12100K",
    RAM: 16,
}

const laptop = Object.create(Computer);

laptop.gaming = true;
laptop.screenDiagonal = 17.3

function lookForOwnProperties(someObject) {
    for (key in someObject) {
        if (someObject.hasOwnProperty(key)) {
            console.log(`Key: ${key}, value: ${someObject[key]}`)
        }
    }
}

lookForOwnProperties(laptop)
