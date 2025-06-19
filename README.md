# Luis Mellado Portfolio

Portfolio personal moderno y minimalista desarrollado con Next.js, Tailwind CSS y Framer Motion.

## Descripción

Este portfolio muestra proyectos destacados, experiencia profesional, habilidades técnicas y permite descargar el CV. El diseño es asimétrico, oscuro y responsive, con animaciones sutiles y enfoque en la experiencia de usuario.

## Tecnologías principales
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)
- TypeScript (en algunos componentes)

## Estructura del proyecto

```
portfolio/
  ├─ public/           # Imágenes, videos, PDF del CV
  ├─ src/app/
  │    ├─ components/  # Componentes principales (Hero, About, Projects, Career, Contact, etc)
  │    ├─ globals.css  # Estilos globales
  │    ├─ layout.tsx   # Layout principal
  │    └─ page.tsx     # Página principal
  ├─ package.json
  └─ README.md
```

## Instalación y desarrollo

```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Despliegue

El proyecto está optimizado para Vercel, pero puede desplegarse en cualquier plataforma compatible con Next.js.

## Personalización
- Edita los datos de proyectos, experiencia y skills en los componentes dentro de `src/app/components/`.
- Cambia imágenes y videos en la carpeta `public/`.

## Créditos e inspiración
- Inspiración de layout: [aaspinwall.com](https://www.aaspinwall.com/)
- Inspiración de estilo: [daspritam.in](https://www.daspritam.in/)

## Licencia
MIT
