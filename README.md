# Franco Kaddour — Portfolio

Portfolio personal de Franco Kaddour, desarrollador web de Buenos Aires.

**[francokaddour.vercel.app](https://francokaddour.vercel.app)**

---

## Stack

- **React 18** + **TypeScript** — UI y lógica
- **Vite** — build tool con code splitting
- **Tailwind CSS** — estilos utilitarios
- **React Router v6** — navegación SPA
- **i18next** — soporte multiidioma (ES / EN / PT)
- **react-hook-form** + **Zod** — formulario de contacto con validación
- **next-themes** — modo claro / oscuro
- **Formspree** — envío de formulario sin backend propio
- **Vercel** — deploy y CDN

## Arquitectura

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout, ErrorBoundary
│   └── ui/            # Tooltip (único componente shadcn en uso)
├── data/
│   └── projects.ts    # Datos de proyectos
├── features/
│   └── projects/      # Componentes de tarjetas de proyectos
├── i18n/
│   └── locales/       # Traducciones ES / EN / PT
├── lib/
│   └── constants.ts   # URLs y constantes globales
├── pages/             # Páginas: Home, About, Projects, Contact, 404
├── test/              # Tests con Vitest + Testing Library
└── types/             # Tipos TypeScript compartidos
```

## Desarrollo local

```sh
git clone https://github.com/FrancoKaddour/portfolio-web-franco-kaddour.git
cd portfolio-web-franco-kaddour
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

| Variable | Descripción | Requerida |
|---|---|---|
| `VITE_FORMSPREE_ID` | ID del formulario en formspree.io | Para probar el formulario |
| `VITE_GA_ID` | ID de Google Analytics 4 | No, solo en producción |

## Scripts

```sh
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build local
npm run test      # Tests (65 tests)
npm run lint      # Linter
```

## Tests

```sh
npm test
# Test Files: 8 passed
# Tests:      65 passed
```

## Contribuir

¿Encontraste un bug o tenés una mejora técnica? Leé [CONTRIBUTING.md](CONTRIBUTING.md) antes de abrir un PR.

**Importante:** el contenido personal (bio, proyectos, textos, imágenes) no es parte de lo que se puede modificar.

## Licencia

El código fuente está bajo licencia [MIT](LICENSE).  
El contenido personal (textos, imágenes, datos de proyectos) **no está licenciado** — no puede copiarse ni redistribuirse.  
Si usás este proyecto como base para tu propio portfolio, reemplazá todo el contenido personal.
