🌸 Aromática Fragancias

Aromática Fragancias es un proyecto de e-commerce desarrollado con React + Vite para la venta de velas aromáticas artesanales.
Forma parte del proyecto final del curso de React de Coderhouse, y fue extendido con funcionalidades adicionales, optimizaciones visuales y estructura escalable.

🕯️ Descripción General

Este proyecto permite al usuario navegar por distintas categorías de velas, ver detalles de cada producto, agregar items al carrito, realizar un checkout y explorar ofertas especiales.
Incluye un diseño moderno, totalmente responsive, con SCSS modularizado, animaciones suaves y persistencia de datos en Firebase.

----------------------------------------------------------------------------

⚙️ Funcionalidades Principales
🛍️ Tienda

Visualización de categorías y productos desde Firebase.

Página individual para detalle de producto.

Listado de ofertas dinámicas obtenidas desde Firestore.

🧺 Carrito de Compras

Implementación con Context API.

Persistencia con localStorage.

Suma, eliminación y vaciado del carrito.

Cálculo automático del total.

💳 Checkout

Formulario con validación básica.

Creación de órdenes en la colección orders de Firebase.

Redirección tras la compra.

🔥 Ofertas

Sección “Ofertas y Promociones” con productos destacados.

Efectos hover y animaciones.

Cards ajustadas en altura para un diseño uniforme.

🌿 Info Section

Sección interactiva con información sobre la filosofía ecológica del proyecto.

Cards expandibles con animación CSS + React state.

🧭 Navbar y Footer

Navbar sticky con transición de transparencia al hacer scroll.

Navegación con React Router DOM.

Footer informativo con redes y créditos.

----------------------------------------------------------------------------

🧰 Tecnologías Utilizadas
Categoría	Tecnologías
Frontend	React + Vite
Routing	React Router DOM
Estado Global	Context API
Backend / DB	Firebase (Firestore)
Estilos	SCSS modularizado + Variables + Mixins de breakpoints
Animaciones	CSS transitions + keyframes personalizados
Build & Deploy	Vite + configuración optimizada para producción

----------------------------------------------------------------------------

🧾 Scripts Disponibles

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build
npm run preview

----------------------------------------------------------------------------

🔥 Variables Globales (SCSS)

El proyecto usa variables y mixins personalizados definidos en variables.scss y _breakpoints.scss, incluyendo:

--color-primary, --color-secondary, --color-soft

--radius-lg, --radius-sm

--font-size-base, --font-size-title

Mixin: @include responsive(tablet) { ... } para breakpoints reutilizables.

----------------------------------------------------------------------------


💫 Autor

Desarrollado por Juan Pablo Vignolles
📘 E-commerce funcional, mejorado del Proyecto Final del curso React.js – Coderhouse
💻 Hecho con pasión, café y paciencia ✨