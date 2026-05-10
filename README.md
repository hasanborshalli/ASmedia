# ASMEDIA Portfolio Website

A modern, responsive portfolio website for ASMEDIA - a professional social media agency built with React, TypeScript, and Vite.

## Features

✨ **Smooth Animations** - Framer Motion animations on all pages
🎨 **Modern Design** - Clean, professional design with the brand colors from the logo
🌓 **Dark/Light Mode** - Toggle between light and dark themes with persistent storage
📱 **Responsive** - Fully responsive design that works on all devices
🎯 **Flexible Content** - Services and Clients are stored in `data.ts` for easy updates
⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds

## Pages

- **Home** - Hero section with featured services
- **About** - Company story and team member showcase
- **Services** - Showcase of all services with process workflow
- **Clients** - Client showcase and testimonials
- **Careers** - Join the team section with open positions
- **Contact** - Contact form and business information

## Colors

The website uses colors from the ASMEDIA logo:

- **Primary**: #5b2fff (Purple/Blue)
- **Secondary**: #000000 (Black)
- **Accent**: #6b3fff (Light Purple)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **CSS Modules** - Scoped styling

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd ASmedia
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## Customizing Content

### Services

Edit `src/data.ts` to add, remove, or modify services:

```typescript
export const services: Service[] = [
    {
        id: 1,
        title: "Your Service",
        description: "Service description",
        icon: "IconName", // from lucide-react
    },
];
```

### Clients

Modify the clients array in `src/data.ts`:

```typescript
export const clients: Client[] = [
    {
        id: 1,
        name: "Client Name",
        logo: "emoji_or_image_url",
        industry: "Industry",
    },
];
```

### Team Members

Update team members in `src/data.ts`:

```typescript
export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Name",
        role: "Role",
        image: "emoji",
        bio: "Bio text",
        social: {
            twitter: "url",
            linkedin: "url",
            instagram: "url",
        },
    },
];
```

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components (Header, Footer)
├── context/          # React context (Theme)
├── pages/            # Page components and their styles
├── data.ts           # Centralized data for services, clients, team
├── App.tsx           # Main app component with routing
├── App.css           # Global styles
├── index.css         # Base styles and animations
└── main.tsx          # Entry point
```

## Customization Tips

- **Colors**: Update CSS variables in `src/index.css`
- **Fonts**: Modify font stack in `src/index.css` body styles
- **Animations**: Adjust Framer Motion values in page components
- **Header/Footer**: Edit `src/components/Header.tsx` and `Footer.tsx`

## License

© 2024 ASMEDIA. All rights reserved.
