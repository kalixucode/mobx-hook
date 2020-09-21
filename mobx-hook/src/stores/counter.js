import { observable } from 'mobx';

const counter = observable( {
    number:1,
    increase() {
        this.number++;
        console.log("counter.js");
    },
    decrease() {
        this.number--;
    },
});

export { counter };