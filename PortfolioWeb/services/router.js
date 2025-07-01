export const Router = {
    init: () => {
        document.body.addEventListener("click", event => {
            const link = event.target.closest('[data-link]');
            if (link) {
                event.preventDefault();
                Router.go(link.getAttribute("href"));
            }
        });
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        });
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("home-page");
                break;
            case "/about":
                pageElement = document.createElement("about-page");
                break;
            case "/projects":
                pageElement = document.createElement("projects-page");
                break;
            case "/contact":
                pageElement = document.createElement("contact-page");
                break;
            default:
                pageElement = document.createElement("home-page");
                break;
        }

        const main = document.getElementById("root");
        main.innerHTML = "";
        main.appendChild(pageElement);
        window.scrollTo(0, 0);
    },
};