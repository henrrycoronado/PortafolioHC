export class ContactPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const template = document.getElementById('contact-page-template');
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
}
customElements.define("contact-page", ContactPage);