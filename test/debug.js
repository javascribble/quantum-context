import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

class SampleContainer extends Quantum {
    testMethod1() {
        console.log('invoked test method 1');
    }

    testMethod2() {
        console.log('invoked test method 2');
    }
}

SampleContainer.define('sample-container');

document.body.style.visibility = 'visible';