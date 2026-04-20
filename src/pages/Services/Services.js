export class ServicesPage {
    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="services-container">
                <div class="section">
                    <h2 class="section-title">Servicios</h2>
                    <p class="section-subtitle">Ofrecemos soluciones tecnológicas personalizadas para tu negocio.</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <div class="card-image">💻</div>
                        <h3 class="card-title">Desarrollo Web</h3>
                        <p class="card-description">Creamos aplicaciones web modernas, responsivas y escalables con tecnologías actuales.</p>
                        <div class="card-footer">
                            <span class="card-tag">Frontend</span>
                            <span class="card-tag">Backend</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">⚙️</div>
                        <h3 class="card-title">APIs & Backend</h3>
                        <p class="card-description">Desarrollamos APIs robustas y escalables para potenciar tus aplicaciones.</p>
                        <div class="card-footer">
                            <span class="card-tag">Node.js</span>
                            <span class="card-tag">.NET</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">🗄️</div>
                        <h3 class="card-title">Bases de Datos</h3>
                        <p class="card-description">Diseño e implementación de bases de datos optimizadas y seguras.</p>
                        <div class="card-footer">
                            <span class="card-tag">SQL</span>
                            <span class="card-tag">NoSQL</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">🚀</div>
                        <h3 class="card-title">DevOps & Deploy</h3>
                        <p class="card-description">Automatización, CI/CD y gestión de infraestructura en la nube.</p>
                        <div class="card-footer">
                            <span class="card-tag">Docker</span>
                            <span class="card-tag">Nginx</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
}
