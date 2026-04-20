export class ProjectsPage {
    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="projects-container">
                <div class="section">
                    <h2 class="section-title">Proyectos</h2>
                    <p class="section-subtitle">Una selección de proyectos que demuestran mi experiencia y habilidades.</p>
                </div>
                <div class="grid">
                    <div class="card">
                        <div class="card-image" style="background: linear-gradient(135deg, #0A1929, #008080); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">📊</div>
                        <h3 class="card-title">Proyecto 1</h3>
                        <p class="card-description">Descripción del primer proyecto destacado. Aplicación web con funcionalidades avanzadas.</p>
                        <div class="card-footer">
                            <span class="card-tag">Activo</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image" style="background: linear-gradient(135deg, #0A1929, #008080); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">📱</div>
                        <h3 class="card-title">Proyecto 2</h3>
                        <p class="card-description">Descripción del segundo proyecto. Aplicación mobile con experiencia optimizada.</p>
                        <div class="card-footer">
                            <span class="card-tag">Activo</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image" style="background: linear-gradient(135deg, #0A1929, #008080); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">🔐</div>
                        <h3 class="card-title">Proyecto 3</h3>
                        <p class="card-description">Descripción del tercer proyecto. Sistema seguro con autenticación avanzada.</p>
                        <div class="card-footer">
                            <span class="card-tag">Reposo</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
}