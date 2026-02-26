# Coin des Étudiants - PRD (Product Requirements Document)

## Problème Original
Site vitrine premium WhatsApp-first pour "Coin des Étudiants" - une communauté étudiante solidaire qui centralise logements, dons, achats/ventes et opportunités (stages/jobs/alternances).

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion + Shadcn/UI
- **Backend**: FastAPI (minimal - formulaire contact)
- **Style**: Mobile-first, design moderne avec glassmorphism

## User Personas
1. **Étudiants** - Cherchent logements, dons, jobs/stages
2. **Bailleurs/Propriétaires** - Proposent des logements
3. **Recruteurs** - Publient des offres d'emploi

## Core Requirements (Statiques)
- CTA WhatsApp omniprésent
- Parcours démontrable sans login (cartes d'annonces + modal)
- Sections: Hero, Showcase, Stats, How it works, Logements, Dons, Offres, Partenaires, Équipe, Témoignages, Contact, Footer
- Design: Bleu #1E5AA8, Vert #4CAF50, Fond #F5F7FA

## What's Been Implemented (Décembre 2025)

### MVP Complet ✅
- [x] Header sticky avec navigation + CTA WhatsApp
- [x] Hero section avec dual CTA (WhatsApp + Publier)
- [x] Section Parcours démontrable avec 6 cartes d'annonces
- [x] Filtre par catégorie fonctionnel (Logements/Dons/Opportunités)
- [x] Modal de détail d'annonce avec CTA WhatsApp
- [x] Compteurs animés (6000+ étudiants, 500+ logements, etc.)
- [x] Section "Comment ça marche" (3 étapes)
- [x] Section Logements étudiants
- [x] Section Dons avec 5 catégories + Section Bailleurs avec FAQ accordéon
- [x] Section Offres avec tabs (Tout/Stages/Alternances/Jobs)
- [x] Section Recruteurs B2B
- [x] Section Partenaires (6 placeholders)
- [x] Section Équipe (3 membres)
- [x] Section Témoignages (3 témoignages)
- [x] Formulaire de contact (visuel)
- [x] CTA final avec gradient bleu
- [x] Footer complet avec réseaux sociaux
- [x] Version mobile responsive
- [x] Animations Framer Motion au scroll

### Liens Configurés
- WhatsApp Group: https://chat.whatsapp.com/FmMwTvOaM2aJI98FShbLnC
- Instagram: https://www.instagram.com/coin_des_etudiants/
- LinkedIn: https://www.linkedin.com/company/coin-des-etudiants/
- TikTok: https://www.tiktok.com/@coindesetudiants
- Email: coindesetudiants@gmail.com
- Formulaires: https://forms.gle/2pWASyBzMzGDAZKYA

## Prioritized Backlog

### P0 - Critique
- ✅ Tous les P0 complétés

### P1 - Important
- [ ] Intégration backend du formulaire de contact (envoi email)
- [ ] Ajout de vrais logos partenaires
- [ ] Photos réelles de l'équipe

### P2 - Nice to Have
- [ ] Analytics/tracking (Google Analytics, Facebook Pixel)
- [ ] SEO avancé (sitemap, schema.org)
- [ ] Témoignages supplémentaires
- [ ] Section blog/actualités

## Next Tasks
1. Remplacer les placeholders partenaires par de vrais logos
2. Ajouter les photos de l'équipe
3. Configurer l'envoi d'emails pour le formulaire contact
4. Optimiser les images pour le SEO
