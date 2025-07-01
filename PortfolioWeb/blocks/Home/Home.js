export class HomePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const template = document.getElementById('home-page-template');
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
}
customElements.define("home-page", HomePage);