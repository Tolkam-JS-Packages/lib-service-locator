# tolkam/lib-service-locator

Basic service locator.

## Usage

````ts
import ServiceLocator from '@tolkam/lib-service-locator';

class MyLocator extends ServiceLocator {

    get myNewService(): number {
        return Math.random();
    }

    get myCachedService(): number {
        return this.cache('myCachedService', () => {
            return Math.random();
        });
    }
}

const myLocator = new MyLocator();

// locator may create a new instance of the service
console.log(myLocator.myNewService === myLocator.myNewService);

// or return the same instance (singleton) on each call
console.log(myLocator.myCachedService === myLocator.myCachedService);
````

## Documentation

The code is rather self-explanatory and API is intended to be as simple as possible. Please, read the sources/Docblock if you have any questions. See [Usage](#usage) for quick start.

## License

Proprietary / Unlicensed 🤷
