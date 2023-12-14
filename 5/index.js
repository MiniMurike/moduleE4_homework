class Electronic {
    constructor(power) {
        this.power = power;
        this.powered = false;
        this.enabled = false;
    }

    powerOn()  {
        if (!this.powered) {
            this.powered = true;
        } else {
            console.log('This device is already powered!');
        }
    }

    powerOff()  {
        if (this.powered) {
            this.powered = false;
        } else {
            console.log('This device is already unpowered');
        }
    }

    switch() {
        if (!this.powered) {
            console.log('You have to power device first!');
            return;
        }

        this.enabled = !this.enabled;
    }
}

/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/

class Toaster extends Electronic {
    constructor(power, toastAmount, time) {
        super(power);
        this.toastsPerOperation = toastAmount;
        this.requiredTime = time;
        this.loaded = false;
        this.working = false;
    }

    load() {
        if (this.loaded) {
            console.log('You already loaded a Toaster with toasts!');
        }
        this.loaded = !this.loaded;
        console.log('Toaster is loaded successfully!')
    }

    start() {
        if (this.working) {
            console.log('Toaster is already running! Wait some time to let it cook please :)')
            return;
        }
        if (!this.enabled) {
            if (!this.powered) {
                console.log('You have to power this device first!')
                return;
            }
            console.log('You have to turn on this device!')
            return;
        }
        if (!this.loaded) {
            console.log('You forgot to load a Toaster with toasts!');
            return;
        }

        console.log('Timer is set!')
        this.working = true;
        setTimeout(function(toaster) {
            console.log('Toasts are cooked!');
            toaster.working = false;
            toaster.loaded = false;
        }, this.requiredTime * 1000, this);
    }
}

/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/

const newToaster = new Toaster(25, 2, 10);
const oldToaster = new Toaster(48, 2, 30);

// Чутка не то место, где стоит задавать вопрос, но перед методами классов не нужно/нельзя/необязательно/надо писать
// ключевое слово 'function'?

newToaster.powerOn();
newToaster.switch();
newToaster.load();
newToaster.start();
newToaster.start();

// It's kinda dangerous to power the old one ¯\_(ツ)_/¯
// But he is still can do something
oldToaster.powerOn();
oldToaster.switch();
oldToaster.powerOff();
oldToaster.load();
oldToaster.powerOn();
oldToaster.start();

console.log(newToaster)
console.log(oldToaster)
