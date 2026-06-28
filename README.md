# Adrian Tan — Portfolio

Personal portfolio website for Adrian Jude Tan, built as a single-page React application. Showcases skills, featured projects, and a contact form.

🔗 **Live site:** _add your Firebase Hosting URL here_

---

## ✨ Features

- Responsive single-page layout with smooth scroll navigation (About, Skills, Projects, Contact)
- Animated section transitions with a custom fade-in scroll hook
- Skills section broken down by layer (Frontend, Backend, Database & Cloud) with proficiency bars
- Project showcase with highlights, tech stack tags, and images
- Contact form powered by EmailJS — no backend required
- Deployed via Firebase Hosting

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, TypeScript, Tailwind-style CSS |
| Tooling | Create React App (`react-scripts`) |
| Contact form | EmailJS |
| Hosting | Firebase Hosting |

## 📁 Project Structure

```
adriantan-portfolio/
├── public/
│   ├── images/          # Project screenshots and static assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts   # Skills, projects, contact info, nav links
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useFadeIn.ts
│   ├── utils/
│   │   └── scroll.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── firebase.json
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd adriantan-portfolio
npm install
```

### Environment Variables

This project uses [EmailJS](https://www.emailjs.com/) to send messages from the contact form without a backend. Copy `.env.example` to `.env` and fill in your own EmailJS credentials:

```bash
cp .env.example .env
```

```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

Get these values from the [EmailJS dashboard](https://dashboard.emailjs.com):
- **Public key** → Account → General
- **Service ID** → Email Services
- **Template ID** → Email Templates

### Running Locally

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

Builds an optimized production bundle into the `build/` folder.

## ☁️ Deployment (Firebase Hosting)

This project is already configured for Firebase Hosting via `firebase.json`.

```bash
npm install -g firebase-tools   # if not already installed
firebase login
npm run build
firebase deploy
```

## ✏️ Editing Content

Most of the site's content (skills, projects, contact info, nav links) lives in a single file:

```
src/data/content.ts
```

Update the `skillCards`, `projects`, and `contactInfo` objects there to change what's displayed — no need to touch the components themselves for content changes.

## 📄 License

This project is private and personal. All rights reserved.
