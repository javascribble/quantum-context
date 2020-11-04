import { Component, template, define } from '../import.js';
import html from '../templates/context.js';

export class Context extends Component {
    constructor() {
        super();

        // TODO: Add radial attribute.
    }

    static template = template(html);
}

define('quantum-context', Context);