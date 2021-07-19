
class MenuBasic01Wc extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <style>
            .menu {
                display: flex;
                justify-content: space-between;
                color: #ffff;
                background-color: #2979FF;
                padding: .1rem .5rem;
                flex-flow: row wrap;
            }

            .menu--logo {
                
            }

            .menu--ul {
                display: flex;  
            }

            .menu--a {
                color: #fff;
                text-decoration: none !important;

                list-style: none;
                margin-left: .1rem;
                margin-right: .1rem;
                border-radius: .3rem;
                padding: .6rem 1rem;
                cursor: pointer;
                transition: .5s
            }

            .menu--a:hover {
                background-color: #757575;
            }

        </style>

        <nav class='menu'>
            <slot></slot>
            <ul class='menu--logo'>
                <image src='https://bucket-nc-images.s3.amazonaws.com/nc/logos/nc/imagotipo/imagotipo-nc.png' width='35'>
            </ul>

            <ul class='menu--ul'>
                <a class="menu--a" href="index.html"> Inicio </a>
                <a class="menu--a" href="exercises-basic.html"> Basic</a>
                <a class="menu--a" href="exercises-medium.html"> Medium </a>
                <a class="menu--a" href="exercises-avanced.html"> Avanced </a>
            </ul>

            <ul>
                <input placeholder='Buscar'></input>
            </ul>
        </nav>
        
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

window.customElements.define('menu-basic-01-wc', MenuBasic01Wc);