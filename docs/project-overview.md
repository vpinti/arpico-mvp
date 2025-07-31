
# Project Documentation: Next.js MVP Starter

## 1. Introduction

This document outlines the architecture, design choices, and key features of this Next.js project starter. The goal is to provide a solid foundation for building modern, elegant, and engaging web applications, complete with pre-configured features and best practices.

The application is built with a focus on performance, maintainability, and a high-quality user experience.

## 2. Technology Stack

- **Framework:** **Next.js 15** (using the App Router for optimal performance and organization).
- **Language:** **TypeScript** for type safety and improved developer experience.
- **UI Library:** **React 18** for building interactive user interfaces.
- **Styling:** **Tailwind CSS** for a utility-first styling approach.
- **Component Library:** **ShadCN UI** for a set of high-quality, accessible, and customizable components.
- **Icons:** **Lucide-react** for a consistent and clean set of icons.
- **Date Formatting:** `date-fns` for reliable and straightforward date manipulation.

## 3. Project Structure

The project follows a standard Next.js `src` directory structure:

```
/
├── src/
│   ├── app/                # Application routes (pages and layouts)
│   │   ├── (main)/         # Main site pages (Home, About, etc.)
│   │   ├── api/            # API routes (if any)
│   │   ├── globals.css     # Global styles and CSS variables for theming
│   │   └── layout.tsx      # Root layout component
│   │
│   ├── components/
│   │   ├── shared/         # Reusable components like Header, Footer, Logo
│   │   └── ui/             # ShadCN UI components
│   │
│   ├── lib/                # Utility functions, data fetching, and type definitions
│   │   ├── events.ts       # Mock data and functions for events
│   │   ├── news.ts         # Mock data and functions for news
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # General utility functions (e.g., cn for classnames)
│   │
│   └── hooks/              # Custom React hooks (e.g., use-toast)
│
├── public/                 # Static assets (images, fonts)
│
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 4. Styling and Theming

The visual identity aims for a balance of elegance, professionalism, and warmth.

### 4.1. Color Palette

The color scheme is defined using HSL CSS variables in `src/app/globals.css`, allowing for easy theming and consistency.

-   `--background` (#F8F4E3): A very light, warm off-white that serves as the main background. It's soft on the eyes and provides a pleasant, welcoming base.
-   `--foreground` (#1B264F): A deep navy blue for primary text. It offers high contrast against the background for excellent readability.
-   `--primary` (#A63F56): A rich **Bordeaux/Garnet** color. This is the main accent color used for buttons, links, and important UI elements. It was chosen to evoke a sense of elegance, passion, and warmth, without the aggression of a bright red.
-   `--primary-foreground` (#F8F4E3): The off-white color used for text on top of the primary color, ensuring readability.
-   `--accent` (#D4AF37): A **Gold** color used for secondary highlights, such as the underline on active navigation links and social media icons. It complements the Bordeaux primary, adding a touch of prestige and celebration.
-   `--muted-foreground` (#64748b): A muted slate gray for secondary text, descriptions, and metadata, providing clear visual hierarchy.
-   `--card` (#F8F4E3 with slight variation): The background color for card components, subtly distinguishing them from the main background.

### 4.2. Typography

Two main fonts are used to create a sophisticated typographic hierarchy:

-   **Headlines (`Playfair Display`):** A classic serif font that brings a sense of elegance, history, and authority to titles.
-   **Body Text (`PT Sans`):** A clean and highly readable sans-serif font that is perfect for paragraphs and general UI text, ensuring a comfortable reading experience.

### 4.3. Microinteractions & Effects

-   **Button Hover:** Buttons feature a subtle scaling effect and shadow (`btn-wow` class) to feel more interactive and responsive.
-   **Navigation Hover:** Navigation links use an animated underline to provide clear feedback on the active/hovered state.
-   **Shadows and Borders:** Cards and other elements use soft shadows and rounded corners to create depth and a modern, polished look.

## 5. MVP Features

The Minimum Viable Product includes the following key sections to demonstrate a full-featured website structure:

-   **Homepage:** A compelling entry point with a hero section, an introduction to the site's purpose, and previews of the latest content.
-   **News/Blog:** A section with a listing page for all articles and detail pages for individual items.
-   **Events/Listings:** A section with a listing page for events or other items and detail pages for individual entries.
-   **About Page:** A page to describe the organization, project, or individual.
-   **Contact Page:** A simple page with contact information and a functional contact form.
