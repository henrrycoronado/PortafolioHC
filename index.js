import { Router } from "./src/services/router.js";

import { HomePage } from "./src/pages/Home/Home.js"
import { AboutPage } from "./src/pages/About/About.js";
import { ProjectsPage } from "./src/pages/Projects/Projects.js";
import { ContactPage } from "./src/pages/Contact/Contact.js";

window.app = {
    router: Router,
    version: "2.0.0"
};

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
});