import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

quantum.define('sample-container', class SampleContainer extends quantum.Component {
    testMethod1() {
        console.log('invoked test method 1');
    }

    testMethod2() {
        console.log('invoked test method 2');
    }
})

document.body.style.visibility = 'visible';