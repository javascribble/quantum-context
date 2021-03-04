export class Context extends Quantum {
    constructor() {
        super();

        this.parentElement.addEventListener('contextmenu', event => {
            event.preventDefault();
            event.stopPropagation();
            this.#show(event);
        });

        this.addEventListener('click', event => {
            this.#hide(event);
            event.stopPropagation();
            const method = event.target.getAttribute('invoke');
            if (method in this.parentElement) {
                this.parentElement[method](event);
            }
        });

        document.addEventListener('click', event => {
            if (this.style.visibility === 'visible') {
                this.#hide(event);
            }
        });
    }

    static get observedAttributes() { return ['radial']; }

    #show(event) {
        Object.assign(this.style, {
            visibility: 'visible',
            top: event.offsetY,
            left: event.offsetX,
            opacity: 1
        });
    }

    #hide(event) {
        Object.assign(this.style, {
            visibility: 'hidden',
            opacity: 0
        });
    }
}