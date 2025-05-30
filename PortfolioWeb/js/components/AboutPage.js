export class AboutPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container-content">
                <div class="titulo-container">
                    <div class="titulo">Sobre mí</div>
                    <img class="titulo-line" src="/img/fondo.png" />
                </div>
                <div class="presentation-container">
                    <div class="presentation-container-img">
                        <img class="presentation-img" src="/img/perfil.png" />
                    </div>
                    <div class="presentation-container-content">
                        <div class="presenttion-content-title-container">
                            <div class="presentation-content-title1">Mayo de 2025</div>
                            <p class="presentation-content-title2">Sobre mí : Henrry Alberto Coronado Villca</p>
                        </div>
                        <div class="presentation-content-detail-container">
                            <p class="presentation-content-detail">
                                Soy un estudiante apasionado en el área de desarrollo de software, con un enfoque en crear soluciones
                                precisas y eficientes. Mi formación académica en Ingeniería me ha proporcionado una base
                                técnica en metodologias y estrategias, que complementa mi capacidad para trabajar en equipo y
                                adaptarme a diferentes entornos. Tengo experiencia en desarrollo web, utilizando principios
                                SOLID y diferentes patrones de diseño. La variedad de proyectos en mi formacion me hicieron
                                conocer diferentes frameworks y espacios de trabajo. Mi estilo de personalidad es alguien
                                perfeccionista, comunicativo, lider nato, critico, adaptativo, sociable y apasionado por
                                conocer tecnologias nuevas y abarcar diferentes retos en el area de desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="feature-container">
                    <div class="feature-body-container">
                        <div class="feature-body-img-container">
                            <img class="feature-body-img" src="/img/img1.png" />
                        </div>
                        <div class="feature-body-content-container">
                            <div class="feature-body-content-title-container">
                                <div class="feature-body-content-title">⚙️ Habilidades Técnicas ⚙️</div>
                            </div>
                            <div class="feature-body-content-detail-container">
                                <p class="feature-body-content-detail-1">
                                    💻 Lenguajes de Programación<br />C# (.NET)<br />JavaScript<br />Python<br />C++<br />Delphi
                                </p>
                                <p class="feature-body-content-detail-1">
                                    🗃️ Bases de Datos<br />SQL Server<br />MariaDB / MySQL<br />Oracle<br />Mongo<br />Supabase
                                </p>
                                <p class="feature-body-content-detail-1">
                                    🧱 Frameworks y Librerías<br />.NET Framework<br />React<br />Angular<br />Xamarin
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="feature-body-container">
                        <div class="feature-body-content-container">
                            <div class="feature-body-content-title-container">
                                <div class="feature-body-content-title">🤝 Habilidades Blandas 🤝</div>
                            </div>
                            <div class="feature-body-content-detail-container-2">
                                <p class="feature-body-content-detail-2">
                                    Me gusta analizar bien los problemas antes de actuar y buscar soluciones prácticas. Suelo
                                    comunicarme de forma clara, tanto con colegas técnicos como no técnicos. Me adapto rápido al
                                    trabajo en equipo y valoro mucho el intercambio de ideas. Organizo bien mis tiempos y cumplo con lo
                                    que me comprometo. Siempre estoy aprendiendo algo nuevo para seguir mejorando.
                                </p>
                            </div>
                        </div>
                        <div class="feature-body-img-container">
                            <img class="feature-body-img" src="/img/img2.png" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("about-page", AboutPage);