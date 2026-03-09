# Plan de Refonte — tonuxcorp.dev

## Contexte & Diagnostic du Site Actuel

### Ce qui existe aujourd'hui
Le site actuel est une single-page application minimaliste avec les sections suivantes :
- **Hero** : "Hi, I'm Tonux" + titre "Senior |" (texte animé tronqué) + photo + liens sociaux
- **Skills** : Grille d'icônes technologiques (Languages, Frontend, Backend, Mobile, Database/Cloud, DevOps)
- **Experience** : Cartes listant les postes (Desjardins, Astek, Norma, Eng Technologies, Finetech, Sonatel, TonuxCorp, Dakar Ruby Brigade, Weekend Startups Dakar)
- **Trainer/Mentor Experience** : Cartes pour Force N, Sonatel Academy, Edacy, SIR FST/UCAD, OpenClassrooms, SpringBoard
- **Portfolio** : Cartes de projets (Cashgui, Sembass, People Input, ONG Enda Oscar, Wird Maaxuuz, Finetech Group, Wingui, Cash Gui)
- **About me** : Paragraphe de présentation + illustration + liens Instagram/Twitter/Discord

### Points faibles identifiés

1. **Positionnement flou** — Le site se présente comme un portfolio de développeur, pas comme une offre de services de consultant senior/CTO avec 12+ ans d'expérience
2. **Pas de proposition de valeur claire** — Aucun texte d'accroche qui dit ce que vous faites pour vos clients
3. **Navigation inexistante** — Pas de menu de navigation visible (juste le nom en haut à gauche + un engrenage)
4. **Pas de CTA (Call-to-Action)** — Aucun bouton "Me contacter", "Réserver un appel", "Demander un devis"
5. **Pas de section Services** — On ne sait pas ce que vous proposez concrètement
6. **Dropcolis absent** — Votre rôle de CTO/co-fondateur n'est pas mis en avant
7. **Blog déconnecté** — Le blog (tonux-dev.com) n'est pas intégré au portfolio
8. **Design daté** — Beaucoup d'espace vide, mise en page basique, pas d'identité visuelle forte
9. **Pas de témoignages / preuves sociales** — Rien qui inspire la confiance d'un prospect
10. **SEO quasi inexistant** — Pas de contenu textuel riche, pas de meta descriptions adaptées

---

## Vision de la Refonte

**Transformer tonuxcorp.dev d'un portfolio de développeur en une plateforme professionnelle de consultant tech senior**, orientée conversion de prospects, qui met en valeur 3 piliers :

1. **Consulting & Freelance** (pilier principal — attirer des clients)
2. **Entrepreneuriat Tech** (CTO de Dropcolis Canada)
3. **Formation & Mentorat** (enseignement, transmission de savoir)

---

## Stack Technique Recommandée

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG, SEO optimal, React ecosystem |
| Styling | **Tailwind CSS** + composants headless | Design system cohérent, rapidité de dev |
| Animations | **Framer Motion** | Animations fluides et professionnelles |
| CMS/Blog | **MDX** ou **Contentlayer** | Articles de blog directement dans le repo, Markdown enrichi |
| Internationalisation | **next-intl** | Bilingue FR/EN natif |
| Formulaire contact | **React Hook Form** + **Resend** (email) | Formulaire de contact sans backend lourd |
| Analytics | **Vercel Analytics** ou **Plausible** | Respect de la vie privée, léger |
| Déploiement | **Vercel** | CI/CD automatique, domaine custom, performances |
| Hébergement code | **GitHub** | Versionning, collaboration |

---

## Architecture du Site — Pages & Sections

### Page d'accueil (/)

#### 1. Navigation fixe (sticky header)
```
Logo TonuxCorp | Accueil | Services | Dropcolis | Formation | Portfolio | Blog | Contact | [FR/EN]
```
- Logo professionnel à gauche
- Menu sobre avec les sections clés
- Toggle langue FR/EN
- Bouton CTA "Parlons de votre projet" toujours visible

#### 2. Hero Section — Impact immédiat
- **Titre principal** : "Consultant Tech Senior & CTO — 12+ ans d'expertise au service de votre transformation digitale"
- **Sous-titre** : "J'accompagne institutions, entreprises et particuliers dans la conception, le développement et le pilotage de solutions technologiques sur mesure."
- **Photo professionnelle** (celle actuelle est bien, la garder)
- **2 CTA** : "Réserver un appel découverte" (primaire) + "Voir mes services" (secondaire)
- **Badges de confiance** : Logos des entreprises clientes (Desjardins, Sonatel, Pratt & Whitney/WADA, Astek, etc.)
- Animation subtile au scroll (Framer Motion)

#### 3. Section "Qui suis-je" — Résumé percutant
- Court paragraphe de 3-4 lignes maximum
- **Chiffres clés en bannière** :
  - 12+ années d'expérience
  - 30+ projets livrés
  - 500+ étudiants formés
  - 3 pays (Sénégal, France, Canada)
- Lien vers la page "À propos" complète

#### 4. Section Services — Le cœur commercial
Présentation en grille de 3-4 cartes avec icônes, titres et descriptions :

**Carte 1 — Consulting IT & Architecture**
> Audit technique, architecture de solutions, choix technologiques, accompagnement à la transformation digitale pour entreprises et institutions.

**Carte 2 — Développement sur mesure**
> Conception et développement d'applications web, mobile et API. Full-stack : React/Next.js, Node.js, Ruby on Rails, Flutter, React Native.

**Carte 3 — Direction Technique (CTO as a Service)**
> Pilotage technique de projets, mise en place de bonnes pratiques, recrutement tech, scaling d'équipes et de produits.

**Carte 4 — Formation & Mentorat**
> Formations sur mesure pour entreprises, bootcamps, mentorat individuel. Du débutant au confirmé.

Chaque carte → lien vers une page dédiée

#### 5. Section Dropcolis — Vitrine entrepreneuriale
- Présentation visuelle de Dropcolis avec le logo
- "Co-fondateur & CTO de Dropcolis Canada — Service de livraison de colis au Québec"
- Résumé des services : livraison express 24h, fulfillment e-commerce, livraison interurbaine et groupages
- Screenshots ou mockup de l'app mobile (App Store + Google Play)
- Bouton : "Découvrir Dropcolis" → lien vers dropcolis.ca

#### 6. Section Formation & Mentorat
- Titre : "Transmettre le savoir, c'est aussi ma mission"
- Timeline visuelle ou grille des expériences d'enseignement :
  - **UCAD (SIR FST)** — Formateur universitaire, Dakar
  - **Sonatel Academy** — Speaker et formateur
  - **OpenClassrooms** — Mentor certifié
  - **SpringBoard** — Mentor
  - **Edacy** — Formateur
  - **Force N** — Mentor
  - **Mentorat sur mesure** — Accompagnement personnalisé pour particuliers
- Chiffres : nombre d'étudiants, taux de satisfaction si disponible
- CTA : "Vous cherchez un formateur ?" → formulaire de contact

#### 7. Section Portfolio — Projets sélectionnés
- **Ne garder que 4-6 projets phares** (pas tous)
- Pour chaque projet : image/screenshot, titre, description courte, technologies utilisées, lien
- Projets recommandés à mettre en avant :
  - **Dropcolis** — Plateforme de livraison (web + mobile)
  - **People Input / Zamani** — App mobile money (Niger)
  - **ONG Enda Oscar** — Système de collecte de données
  - **Cashgui** — Application mobile de gestion budgétaire
- Bouton "Voir tous les projets" pour une page dédiée

#### 8. Section Témoignages / Social Proof
- 3-4 témoignages de clients, collègues ou étudiants
- Format carrousel avec photo, nom, titre, témoignage
- Logos des entreprises partenaires en bandeau

#### 9. Section Blog — Derniers articles
- Afficher les 3 derniers articles du blog (intégré via MDX ou feed RSS de tonux-dev.com)
- Aperçu : image, titre, date, extrait
- Bouton "Lire le blog" → page blog complète

#### 10. Section Contact / CTA Final
- Titre : "Prêt à collaborer ?"
- Formulaire simple : Nom, Email, Type de demande (Consulting / Développement / Formation / Autre), Message
- Ou alternativement : lien Calendly pour réserver un appel
- Liens : LinkedIn, GitHub, Email, Twitter

#### 11. Footer
- Logo + slogan
- Liens rapides vers toutes les sections
- Liens sociaux
- "© 2026 TonuxCorp — Montréal, Canada"

---

### Pages secondaires

| Page | Contenu |
|------|---------|
| **/services** | Détail de chaque offre avec tarification indicative, processus de travail, FAQ |
| **/dropcolis** | Présentation approfondie de Dropcolis, votre rôle de CTO, la stack technique, l'équipe |
| **/formation** | Détail des formations, témoignages d'étudiants, programmes proposés |
| **/portfolio** | Galerie complète de tous les projets avec filtres (Web, Mobile, Consulting) |
| **/blog** | Liste des articles, catégories, recherche |
| **/blog/[slug]** | Article individuel en MDX |
| **/a-propos** | Parcours complet, valeurs, CV téléchargeable |
| **/contact** | Formulaire complet + informations de contact + carte Montréal |

---

## Design & Identité Visuelle

### Palette de couleurs proposée
- **Primaire** : Bleu nuit profond (#1a1a2e ou #0f172a) — confiance, expertise, professionnalisme
- **Accent** : Bleu vif (#3b82f6) ou Indigo (#6366f1) — modernité, tech
- **Secondaire** : Blanc cassé (#f8fafc) — clarté, lisibilité
- **Texte** : Gris foncé (#1e293b) sur fond clair
- **Touche chaude** : Orange/ambre (#f59e0b) — pour les CTA et éléments d'attention

### Typographie
- **Titres** : Inter ou Satoshi (géométrique, moderne, professionnel)
- **Corps** : Inter ou Source Sans Pro (lisibilité optimale)
- **Code (blog)** : JetBrains Mono ou Fira Code

### Principes de design
- **Espacement généreux** mais pas vide — chaque espace a une fonction
- **Micro-animations** au scroll (fade-in, slide-up) — professionnalisme sans excès
- **Mode sombre / clair** — toggle dans le header
- **Mobile-first** — responsive parfait sur tous les devices
- **Accessibilité WCAG AA** — contraste, navigation clavier, aria-labels

---

## SEO & Performance

### SEO
- Balises meta optimisées par page (titre, description, Open Graph, Twitter Cards)
- Schema.org : Person, Organization, BlogPosting, Service
- Sitemap XML automatique (next-sitemap)
- URLs propres en FR et EN (/fr/services, /en/services)
- Blog avec contenu riche pour le référencement naturel

### Performance
- Score Lighthouse cible : 95+ sur tous les critères
- Images optimisées (next/image, WebP/AVIF)
- Chargement lazy des sections below-the-fold
- Fonts optimisées (next/font)

---

## Plan de Migration du Blog

### Option recommandée : Blog intégré dans Next.js
1. Migrer les articles existants de tonux-dev.com en fichiers MDX dans le repo Next.js
2. Créer des composants MDX custom (code blocks avec syntax highlighting, callouts, etc.)
3. Mettre en place des redirections 301 de tonux-dev.com vers tonuxcorp.dev/blog
4. Conserver tonux-dev.com comme redirection ou alias

### Alternative : Blog externe avec intégration
- Garder tonux-dev.com tel quel
- Afficher les derniers articles sur la page d'accueil via RSS/API
- Lien direct vers le blog externe

---

## Internationalisation (i18n)

### Structure des URLs
```
tonuxcorp.dev/fr/          → Accueil FR
tonuxcorp.dev/en/          → Accueil EN
tonuxcorp.dev/fr/services  → Services FR
tonuxcorp.dev/en/services  → Services EN
tonuxcorp.dev/fr/blog/...  → Blog FR
tonuxcorp.dev/en/blog/...  → Blog EN
```

### Implémentation
- `next-intl` pour la gestion des traductions
- Fichiers JSON de traductions (/messages/fr.json, /messages/en.json)
- Détection automatique de la langue du navigateur
- Balises hreflang pour le SEO multilingue

---

## Planning de Réalisation Estimé

| Phase | Durée estimée | Contenu |
|-------|--------------|---------|
| **Phase 1 — Fondation** | 1 semaine | Setup Next.js, Tailwind, structure de fichiers, config i18n, layout de base, navigation |
| **Phase 2 — Page d'accueil** | 1 semaine | Hero, Services, Dropcolis, Formation, Portfolio (sections), Contact, Footer |
| **Phase 3 — Pages secondaires** | 1 semaine | /services, /dropcolis, /formation, /portfolio, /a-propos, /contact |
| **Phase 4 — Blog** | 1 semaine | Setup MDX, migration des articles, page listing, page article, RSS feed |
| **Phase 5 — Polish & SEO** | 3-4 jours | Animations, dark mode, SEO, Open Graph images, tests responsive, accessibilité |
| **Phase 6 — Déploiement** | 1-2 jours | Déploiement Vercel, DNS, redirections, analytics, tests finaux |

**Durée totale estimée : 4-5 semaines**

---

## Structure du Projet Next.js

```
tonuxcorp.dev/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Accueil
│   │   ├── services/page.tsx
│   │   ├── dropcolis/page.tsx
│   │   ├── formation/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── a-propos/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/
│   │       ├── page.tsx             # Liste des articles
│   │       └── [slug]/page.tsx      # Article individuel
│   └── api/
│       └── contact/route.ts         # API envoi d'email
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Dropcolis.tsx
│   │   ├── Training.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   └── ContactCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── ...
├── content/
│   └── blog/
│       ├── article-1.mdx
│       └── article-2.mdx
├── messages/
│   ├── fr.json
│   └── en.json
├── public/
│   ├── images/
│   └── fonts/
├── lib/
│   ├── mdx.ts
│   └── utils.ts
└── tailwind.config.ts
```

---

## Actions Immédiates Recommandées

1. **Photo professionnelle** — Votre photo actuelle est bien. Si possible, en ajouter une en contexte professionnel (conférence, bureau, etc.)
2. **Collecter des témoignages** — Demander 3-5 témoignages à d'anciens clients, collègues ou étudiants
3. **Rédiger les textes des services** — Définir précisément vos offres et tarifs
4. **Préparer les captures d'écran** — Screenshots de vos projets phares pour le portfolio
5. **Choisir un outil de prise de RDV** — Calendly, Cal.com ou autre pour le CTA de contact

---

## Résumé

Cette refonte transforme votre site d'un simple CV/portfolio en ligne en une **machine à générer des leads** pour vos services de consulting, tout en mettant en valeur votre triple casquette de consultant, entrepreneur (Dropcolis) et formateur. Le tout avec une stack moderne (Next.js), un design professionnel, et une présence bilingue FR/EN pour couvrir le marché québécois et international.
