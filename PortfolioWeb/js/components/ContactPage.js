export class ContactPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="formulario-container">
                <div class="formulario-content-container">
                  <div class="formulario-content-title-container">
                    <p class="formulario-content-title">¿Tienes alguna pregunta, propuesta o simplemente quieres saludar?</p>
                  </div>
                  <div class="formulario-content-body-container">
                    <p class="formulario-content-body">
                      Completa el formulario y me pondré en contacto contigo lo antes posible. ¡Estoy siempre abierto a nuevas
                      ideas y colaboraciones!
                    </p>
                  </div>
                </div>
                <div class="formulario-form-container">
                  <div class="formulario-form-title">Contáctame</div>
                  <div class="formulario-form-inputs-container">
                    <div class="formulario-form-input-container">
                      <div class="formulario-form-input-title">Titulo o razon del mensaje</div>
                      <input class="formulario-form-input" placeholder="Entrada ..."></input>
                    </div>
                    <div class="formulario-form-input-container-2">
                      <div class="formulario-form-input-title">Detalle</div>
                      <textarea class="formulario-form-input-2" placeholder="Entrada ..."></textarea>
                    </div>
                    <div class="formulario-form-input-container">
                      <div class="formulario-form-input-title">Correo referencia</div>
                      <input class="formulario-form-input" placeholder="Entrada ..." type="email"></input>
                    </div>
                  </div>
                  <div class="formulario-form-button-container">
                    <button class="formulario-form-button" onclick=""><div class="formulario-form-button-text">Enviar Formulario</div></button>
                  </div>
                </div>
              </div>
        `;
    }
}
customElements.define("contact-page", ContactPage);
