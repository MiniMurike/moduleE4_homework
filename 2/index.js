const Computer = {
    processor: "Intel core i9 12100K",
    RAM: 16,
}

const laptop = Object.create(Computer);

laptop.gaming = true;
laptop.screenDiagonal = 17.3;

function isKeyInObject(searchValue, someObject) {
    for (let key in someObject) {
        if (key === searchValue) {
            return true;
        }
    }
    return false;
}

console.log(isKeyInObject('gaming', laptop));
console.log(isKeyInObject('RAM', laptop));
console.log(isKeyInObject('color', laptop));
