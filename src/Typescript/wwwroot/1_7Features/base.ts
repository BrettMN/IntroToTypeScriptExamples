export default class Base {
    public constructor(protected something:string = '') { }

    public getCurrentSomething() {
        return this.something;
    }

    public setSomething(newSomething: string) {
        this.something = newSomething;
        return this;
    }
}

