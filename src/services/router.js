import { HomePage } from "../pages/Home/Home.js";
import { ServicesPage } from "../pages/Services/Services.js";
import { ProjectsPage } from "../pages/Projects/Projects.js";
import { PostsPage } from "../pages/Posts/Posts.js";
import { ContactPage } from "../pages/Contact/Contact.js";

export const Router = {
    routes: {
        '/': HomePage,
        '/services': ServicesPage,
        '/projects': ProjectsPage,
        '/posts': PostsPage,
        '/contact': ContactPage
    },

    init: () => {
        document.body.addEventListener("click", (event) => {
            const link = event.target.closest('[data-link]');
            if (link) {
                event.preventDefault();
                const href = link.getAttribute("href");
                Router.go(href);
            }
        });

        window.addEventListener("popstate", (event) => {
            const route = event.state?.route || '/';
            Router.go(route, false);
        });

        Router.go(location.pathname, false);
    },

    go: (route, addToHistory = true) => {
        const normalizedRoute = Router.normalizeRoute(route);
        
        if (addToHistory && location.pathname !== normalizedRoute) {
            history.pushState({ route: normalizedRoute }, "", normalizedRoute);
        }

        const PageComponent = Router.routes[normalizedRoute] || Router.routes['/'];
        
        const main = document.getElementById("root");
        main.innerHTML = "";
        
        const pageInstance = new PageComponent();
        main.appendChild(pageInstance.render());
        
        window.scrollTo(0, 0);
    },

    normalizeRoute: (route) => {
        route = route.toLowerCase().replace(/\/$/, '') || '/';
        return Router.routes.hasOwnProperty(route) ? route : '/';
    }
};