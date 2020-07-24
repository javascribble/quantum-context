import html from '../templates/context.js';

export class Context extends quantum.Component {
    constructor() {
        super();

        // TODO: Add radial attribute.
    }

    static template = quantum.template(html);
}

quantum.define('quantum-context', Context);