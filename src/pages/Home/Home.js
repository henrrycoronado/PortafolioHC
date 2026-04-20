export class HomePage {
    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            <header class="hero">
                <div class="hero-container">
                    <div class="hero-image" style="background: linear-gradient(135deg, #0A1929, #008080); display: flex; align-items: center; justify-content: center; color: white; font-size: 80px;">📱</div>
                    <div class="hero-content">
                        <div class="hero-titles">
                            <p class="subtitle">hc-server</p>
                            <h1 class="title">Henrry Coronado</h1>
                        </div>
                        <div class="hero-quote">
                            <p class="quote-text">Servidor personal de proyectos en línea</p>
                        </div>
                    </div>
                </div>
            </header>
        `;
        return container;
    }
}