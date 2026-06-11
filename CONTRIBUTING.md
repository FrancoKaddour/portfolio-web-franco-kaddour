# Contribuciones

Gracias por tomarte el tiempo de contribuir. Este es mi portfolio personal pero lo hice público para que sirva de referencia y para recibir mejoras de la comunidad.

## Qué tipo de contribuciones acepto

**Bienvenidas:**
- Bugs de UI o comportamiento (algo que se rompe, no se ve bien, no funciona)
- Mejoras de accesibilidad (ARIA, contraste, navegación por teclado)
- Mejoras de performance (imágenes, bundle, carga)
- Fixes de responsive en dispositivos reales
- Correcciones de código TypeScript o tests
- Typos en el código (no en el contenido personal)

**No acepto:**
- Cambios en el contenido personal (bio, proyectos, textos, imágenes)
- Rediseños completos o cambios de identidad visual
- Nuevas features sin discutir primero en un Issue
- Dependencias nuevas sin justificación clara

## Cómo contribuir

1. **Abrí un Issue** describiendo el problema antes de hacer cualquier cambio
2. Esperá confirmación de que el Issue es válido
3. Hacé fork del repo
4. Creá una rama con nombre descriptivo: `fix/navbar-mobile-overflow` o `improve/contact-form-a11y`
5. Hacé los cambios
6. Asegurate de que los tests pasen: `npm test`
7. Abrí un Pull Request referenciando el Issue

## Setup local

```sh
git clone https://github.com/FrancoKaddour/portfolio-web-franco-kaddour.git
cd portfolio-web-franco-kaddour
npm install
cp .env.example .env.local
npm run dev
```

Variables necesarias en `.env.local`:

```
VITE_FORMSPREE_ID=   # Solo necesario para probar el formulario
VITE_GA_ID=          # No necesario para desarrollo local
```

## Estilo de código

- TypeScript estricto — no usar `any`
- Tailwind para estilos — no agregar CSS custom salvo casos excepcionales
- Componentes funcionales con hooks
- Sin dependencias nuevas salvo casos muy justificados

## Commits

Usar prefijos convencionales:
- `fix:` para correcciones de bugs
- `improve:` para mejoras sin cambiar funcionalidad
- `refactor:` para cambios internos sin impacto visual

## Preguntas

Abrí un Issue con el label `question`.
