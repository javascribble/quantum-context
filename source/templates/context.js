export default `
<style>
    :host {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        background-color: var(--background-color);
        box-sizing: var(--box-sizing);
        box-shadow: var(--box-shadow);
        border: var(--border);
        border-radius: var(--border-radius);
        outline: var(--outline);
        padding: var(--padding);
        transition: var(--transition);
    }
</style>
<slot></slot>
`;