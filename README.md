# EPS React + Tailwind Skeleton

Ce dépôt contient un squelette minimal pour démarrer l'application EPS mentionnée dans la discussion précédente. L'objectif est de disposer d'une base légère en React et Tailwind utilisable sans backend.

## Structure
- `index.html` : point d'entrée utilisant les CDN React, React Router et Tailwind.
- `src/` : code source React (format ES Modules).
  - `main.jsx` : initialisation de l'application.
  - `App.jsx` : navigation principale et routes.
  - `pages/` : pages vides pour chaque module (gestion des classes, élèves, cycles, etc.).

## Utilisation
1. Servez le dossier via un serveur local (ex. `npx serve` ou l'extension Live Server de VS Code).
2. Ouvrez `http://localhost:PORT/index.html` dans votre navigateur.
3. Les pages affichent pour l'instant un simple message ; elles sont prêtes à être complétées ultérieurement.

Ce squelette charge React et Tailwind depuis des CDN pour éviter l'installation de dépendances. Vous pourrez basculer vers un outil comme Vite et ajouter Supabase plus tard.
