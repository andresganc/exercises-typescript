
class ContainerWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
            <style>
                .main {
                }
            </style>
            <div class='main'>
                <slot></slot>
            </div>
        `
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('container-wc', ContainerWC);