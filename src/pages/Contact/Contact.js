export class ContactPage {
    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="contact-container">
                <div class="section" style="max-width: 600px; margin: 0 auto; text-align: center; width: 100%;">
                    <h2 class="section-title">Ponte en Contacto</h2>
                    <p class="section-subtitle">¿Tienes una pregunta o propuesta? Me encantaría escucharte. Contáctame a través de cualquiera de estos canales.</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-xl); max-width: 1000px; margin: var(--spacing-2xl) auto;">
                    <div class="card" style="text-align: center;">
                        <div style="font-size: 48px; margin-bottom: var(--spacing-md);">📧</div>
                        <h3 class="card-title">Email</h3>
                        <p class="card-description">henrry@hc-server.xyz</p>
                        <a href="mailto:henrry@hc-server.xyz" class="btn btn-primary" style="margin-top: auto;">Enviar Email</a>
                    </div>
                    <div class="card" style="text-align: center;">
                        <div style="font-size: 48px; margin-bottom: var(--spacing-md);">🔗</div>
                        <h3 class="card-title">LinkedIn</h3>
                        <p class="card-description">Conecta conmigo profesionalmente</p>
                        <a href="https://www.linkedin.com/in/henrry-alberto-coronado-villca/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="margin-top: auto;">Visitar</a>
                    </div>
                    <div class="card" style="text-align: center;">
                        <div style="font-size: 48px; margin-bottom: var(--spacing-md);">💻</div>
                        <h3 class="card-title">GitHub</h3>
                        <p class="card-description">Explora mis proyectos</p>
                        <a href="https://github.com/henrrycoronado" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="margin-top: auto;">Visitar</a>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
}