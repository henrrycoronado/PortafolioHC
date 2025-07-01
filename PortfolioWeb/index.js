import { Router } from "./services/router.js";

import { HomePage } from "./blocks/Home/Home.js"
import { AboutPage } from "./blocks/About/About.js";
import { ProjectsPage } from "./blocks/Projects/Projects.js";
import { ContactPage } from "./blocks/Contact/Contact.js";

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
});