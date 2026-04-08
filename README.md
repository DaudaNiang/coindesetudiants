# Coin des Etudiants

Site vitrine de la communaute etudiante solidaire Coin des Etudiants.

## Stack

- **React 19** (Create React App + CRACO)
- **React Router DOM 7** (client-side routing)
- **Tailwind CSS 3.4** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icones)

## Installation

```bash
cd frontend
npm install
```

## Developpement

```bash
npm start
```

Le site tourne sur `http://localhost:3000`.

## Build production

```bash
npm run build
```

Le dossier `build/` est pret pour le deploiement.

## Deploiement Vercel

1. **Root Directory** dans Vercel : `frontend`
2. **Build Command** : `npm run build`
3. **Output Directory** : `build`
4. **Node.js version** : 20.x

Le fichier `vercel.json` gere les rewrites pour React Router (SPA).

## Variables d'environnement

Voir `frontend/.env.example`. Aucune variable n'est requise pour le build du site vitrine.

## Structure

```
frontend/
  public/          # Assets statiques (images, favicon)
  src/
    components/    # Composants reutilisables
    pages/         # Pages du site
    config/        # Configuration (constants, liens)
    index.css      # Styles globaux + Tailwind
    App.js         # Router principal
```
