import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

define('sample-container', class SampleContainer extends Component {
    testMethod1() {
        console.log('invoked test method 1');
    }

    testMethod2() {
        console.log('invoked test method 2');
    }
})

document.body.style.visibility = 'visible';