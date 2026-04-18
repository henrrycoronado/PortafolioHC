export const Router = {
    routes: {
        '/': 'home-page',
        '/about': 'about-page',
        '/projects': 'projects-page',
        '/contact': 'contact-page'
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

        const componentTag = Router.routes[normalizedRoute] || Router.routes['/'];
        
        const main = document.getElementById("root");
        main.innerHTML = "";
        
        const pageElement = document.createElement(componentTag);
        main.appendChild(pageElement);
        
        window.scrollTo(0, 0);
    },

    normalizeRoute: (route) => {
        route = route.toLowerCase().replace(/\/$/, '') || '/';
        return Router.routes.hasOwnProperty(route) ? route : '/';
    }
};