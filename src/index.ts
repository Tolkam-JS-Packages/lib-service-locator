/**
 * Base class for building a basic service locator
 *
 * @type {ServiceLocator}
 */
export default class ServiceLocator {

    /**
     * Cached instances
     * @type {Object}
     */
    private cached = {};

    /**
     * Caches a service instance creating a singleton
     *
     * @param  {String}   name
     * @param  {Function} callable
     * @return {T}
     */
    protected cache<T>(name: string, callable: (locator: this) => T): T {
        const that = this;
        const cached = that.cached;

        if (cached[name] === undefined) {
            cached[name] = callable(that);
        }

        return cached[name];
    }
}
