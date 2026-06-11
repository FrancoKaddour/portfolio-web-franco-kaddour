# Portfolio — Franco Kaddour

Portfolio personal de Franco Kaddour, desarrollador web de Buenos Aires, Argentina.

## Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — estilos
- **React Router** — navegación SPA
- **i18next** — soporte multiidioma (ES / EN / PT)
- **react-hook-form** + **Zod** — formulario de contacto
- **next-themes** — modo claro / oscuro

## Desarrollo local

```sh
git clone https://github.com/FrancoKaddour/portfolio-web-franco-kaddour.git
cd portfolio-web-franco-kaddour
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_FORMSPREE_ID` | ID del formulario en formspree.io |
| `VITE_GA_ID` | ID de Google Analytics 4 |

## Scripts

```sh
npm run dev       # Desarrollo
npm run build     # Build de producción
npm run test      # Tests
npm run lint      # Linter
```

## Deploy

Deploy automático en [Vercel](https://vercel.com) desde la rama `main`.
