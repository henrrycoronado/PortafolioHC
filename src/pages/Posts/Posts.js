export class PostsPage {
    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="posts-container">
                <div class="section">
                    <h2 class="section-title">Posts</h2>
                    <p class="section-subtitle">Artículos y reflexiones sobre desarrollo de software.</p>
                </div>
                <div class="grid">
                    <article class="card">
                        <h3 class="card-title">Post 1: Introducción a Web Components</h3>
                        <p class="card-description">Exploramos cómo crear componentes reutilizables con Web Components nativos de JavaScript.</p>
                        <div class="card-footer">
                            <span class="card-tag">Tecnología</span>
                            <span class="card-tag">Frontend</span>
                        </div>
                    </article>
                    <article class="card">
                        <h3 class="card-title">Post 2: DevOps y Automatización</h3>
                        <p class="card-description">Mejores prácticas para automatizar tu flujo de desarrollo con CI/CD pipelines.</p>
                        <div class="card-footer">
                            <span class="card-tag">DevOps</span>
                            <span class="card-tag">Automatización</span>
                        </div>
                    </article>
                    <article class="card">
                        <h3 class="card-title">Post 3: Diseño de APIs RESTful</h3>
                        <p class="card-description">Principios fundamentales para diseñar APIs escalables y mantenibles.</p>
                        <div class="card-footer">
                            <span class="card-tag">Backend</span>
                            <span class="card-tag">API</span>
                        </div>
                    </article>
                </div>
            </div>
        `;
        return container;
    }
}
