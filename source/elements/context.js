import { Quantum, define } from '../../references/quantum.js';
import { context } from '../templates/context.js';

export class Context extends Quantum {
    constructor() {
        super(context);

        //add radial
    }
}

define(Context);