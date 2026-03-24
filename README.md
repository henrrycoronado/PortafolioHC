# PortafolioHC

**Portafolio personal de Henrry Alberto Coronado Villca**

🔗 **Repositorio:** [github.com/henrrycoronado/PortafolioHC](https://github.com/henrrycoronado/PortafolioHC)

---

## ¿Qué es esto?

Es mi portafolio personal, una web app de una sola página (SPA) donde muestro quién soy, qué sé hacer y en qué he trabajado. Está hecho completamente con tecnologías web estándar — sin frameworks de frontend, solo JavaScript puro con Web Components, CSS y HTML.

---

## Tecnologías usadas

### Frontend
- **Vanilla JavaScript (ES6+)** con Web Components nativos
- **HTML5** con plantillas (`<template>`) para cada sección
- **CSS3** con Shadow DOM para encapsulación de estilos por componente

### Backend / Servidor
- **Node.js** (ES Modules)
- **Express.js v5** — sirve la aplicación como SPA
- **Morgan** — logging de peticiones HTTP
- **CORS** — habilitado para desarrollo cruzado

---

## Estructura del proyecto

```
PortafolioHC/
├── PortfolioWeb/
│   ├── blocks/
│   │   ├── About/          # Sección "Sobre mí" (JS + CSS)
│   │   ├── Contact/        # Sección de contacto (JS + CSS)
│   │   ├── Home/           # Página de inicio / hero (JS + CSS)
│   │   ├── Projects/       # Sección de proyectos (JS + CSS)
│   │   └── style.css       # Importa todos los CSS de bloques
│   ├── img/                # Imágenes y assets (logo, iconos, fondos)
│   ├── services/
│   │   └── router.js       # Router cliente con History API
│   ├── index.html          # HTML principal con todas las plantillas
│   ├── index.js            # Punto de entrada, inicializa el router
│   └── server.js           # Servidor Express
├── package.json
└── README.md
```

---

## Secciones del portafolio

| Ruta | Sección | Descripción |
|------|---------|-------------|
| `/` | **Inicio** | Hero con nombre, foto y frase |
| `/about` | **Sobre mí** | Descripción personal, habilidades técnicas y blandas |
| `/projects` | **Proyectos** | Cards con proyectos realizados, stack y enlaces |
| `/contact` | **Contacto** | Formulario para enviar un mensaje directo |

La navegación es sin recarga de página — el router usa la History API (`pushState` / `popstate`) para cambiar entre vistas.

---

## Cómo correrlo localmente

**Requisitos:** Node.js instalado

```bash
# Clonar el repositorio
git clone https://github.com/henrrycoronado/PortafolioHC.git
cd PortafolioHC

# Instalar dependencias
npm install

# Iniciar el servidor
npm run dev
```

El servidor levanta en `http://localhost:5173`.

---

## Habilidades técnicas que se mencionan

**Lenguajes de programación:**
- C# (.NET), JavaScript, Python, C++, Delphi

**Bases de datos:**
- SQL Server, MariaDB / MySQL, Oracle, MongoDB, Supabase

**Frameworks y tecnologías:**
- .NET Framework, React, Angular, Xamarin

---

## Proyectos destacados

### Gestionador de Eventos
- **Fecha:** Septiembre 2024
- **Stack:** Angular + .NET
- **Descripción:** Sistema de gestión y seguimiento de eventos, construido con enfoque orientado a objetos y principios SOLID.

---

## Diseño

El diseño fue prototipado en Figma antes de ser desarrollado:

🎨 [Ver diseño en Figma](https://www.figma.com/design/uhqIJbfVx3txb7DIEuzcNe/PortfolioHC?node-id=4-7178&t=tar7KakKZ6Rhczf6-1)

El estilo es oscuro (`#000b1d`), tipografía **Inter**, responsive para móvil, tablet y escritorio.

---

## Contacto y redes

- 💼 [LinkedIn — Henrry Alberto Coronado Villca](https://www.linkedin.com/in/henrry-alberto-coronado-villca/)
- 🐙 [GitHub — @henrrycoronado](https://github.com/henrrycoronado)
