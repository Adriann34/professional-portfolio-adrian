# Adrian Tan — Portfolio

My personal portfolio built in React and TypeScript.

🔗 **Live site:** https://adrian-tan-portfolio.web.app/

## Features

- Single-page layout with smooth scroll navigation (About, Skills, Projects, Contact)
- Animated fade-in sections on scroll
- Skills broken down by layer with proficiency bars
- Project showcase with highlights, tech stack tags, and images
- Contact form powered by EmailJS (no backend needed)

## Tech Used

- React 18
- TypeScript
- CSS
- EmailJS (contact form)
- Firebase Hosting (deployment)

## Project Structure

```
adriantan-portfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useFadeIn.ts
│   ├── utils/
│   │   └── scroll.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── firebase.json
└── package.json
```