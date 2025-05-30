export const Router = {
  init: () => {
    document.querySelectorAll("a.nav-link").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router.go(href);
      });
    });

    window.addEventListener("popstate", (event) => {
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
    if (pageElement) {
      let currentPage = document.querySelector("main").firstElementChild;
      if (currentPage) {
        currentPage.remove();
        document.querySelector("main").appendChild(pageElement);
      } else {
        document.querySelector("main").appendChild(pageElement);
      }
    }

    window.scrollX = 0;
    window.scrollY = 0;
  },
};