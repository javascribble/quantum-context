import { Component, template } from '../../references/quantum.js';
import html from '../templates/context.js';

export class Context extends Component {
    constructor() {
        super();

        // TODO: Add radial attribute.
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-context', Context);