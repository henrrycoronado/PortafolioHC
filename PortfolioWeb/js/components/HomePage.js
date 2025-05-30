export class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="hero">
                <div class="hero-container">
                    <img src="/img/fondo.png" alt="Hero background" class="hero-image" />
                    <div class="hero-content">
                        <div class="hero-titles">
                            <p class="subtitle">Portafolio web</p>
                            <h1 class="title">Henrry Coronado</h1>
                        </div>
                        <div class="hero-quote">
                            <p class="quote-text">"Si lo puedes imaginar, lo puedes programar"</p>
                            <p class="quote-author">~ Alejandro Miguel Taboada Sanchez</p>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}
customElements.define("home-page", HomePage);
