import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';

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