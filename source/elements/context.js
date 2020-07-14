import { Component } from '../../references/quantum.js';

export class Context extends Component {
    constructor() {
        super();

        // TODO: Add radial attribute.
    }

    static template = document.querySelector('#quantum-context');

    static attributes = [];
}

customElements.define('quantum-context', Context);