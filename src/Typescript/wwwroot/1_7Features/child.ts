import Base from "./Base";

export default class Child extends Base {

    public constructor(something: string = '') {
        super(something);
    }

    public deleteSomething() {
        return this;
    }

}