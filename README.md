# 🚀 Modern React Application Template

A comprehensive, production-ready React application built with modern web technologies and best practices.

## ✨ Features

- **⚡ Vite** - Lightning fast build tool and development server
- **⚛️ React 18** - Latest React with concurrent features
- **🔷 TypeScript** - Type-safe development experience
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn/ui** - Beautiful, accessible UI components
- **🔄 React Router** - Client-side routing
- **📊 TanStack Query** - Powerful data fetching and caching
- **🎯 ESLint** - Code quality and consistency
- **🚀 Vercel Ready** - Optimized for deployment

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 6.3.4** - Build tool and dev server
- **React Router DOM 6.26.2** - Routing

### UI & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons
- **next-themes** - Theme management

### Data & Forms
- **TanStack Query 5.56.2** - Data fetching
- **React Hook Form 7.53.0** - Form management
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Form validation

### Additional Libraries
- **Recharts 2.12.7** - Data visualization
- **date-fns 3.6.0** - Date utilities
- **Embla Carousel** - Carousel component
- **Sonner** - Toast notifications
- **Vaul** - Drawer component

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── made-with-dyad.tsx
│   ├── pages/            # Route components
│   │   ├── Index.tsx     # Home page
│   │   └── NotFound.tsx  # 404 page
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vite_react_shadcn_ts
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build:dev` - Build for development
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 UI Components

This project includes a comprehensive set of shadcn/ui components:

### Layout & Navigation
- **Sidebar** - Collapsible navigation sidebar
- **Navigation Menu** - Horizontal navigation
- **Breadcrumb** - Page navigation breadcrumbs
- **Menubar** - Application menu bar

### Data Display
- **Table** - Data tables with sorting and pagination
- **Card** - Content containers
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Progress** - Progress indicators
- **Skeleton** - Loading placeholders

### Forms & Input
- **Button** - Interactive buttons
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Select** - Dropdown selections
- **Checkbox** - Checkbox inputs
- **Radio Group** - Radio button groups
- **Switch** - Toggle switches
- **Slider** - Range sliders
- **Form** - Form components with validation

### Feedback & Overlays
- **Dialog** - Modal dialogs
- **Alert Dialog** - Confirmation dialogs
- **Sheet** - Slide-out panels
- **Drawer** - Side drawers
- **Popover** - Floating content
- **Tooltip** - Hover tooltips
- **Toast** - Notification toasts
- **Alert** - Status alerts

### Interactive Elements
- **Accordion** - Collapsible content
- **Collapsible** - Expandable sections
- **Tabs** - Tabbed interfaces
- **Carousel** - Image carousels
- **Command** - Command palette
- **Context Menu** - Right-click menus
- **Dropdown Menu** - Dropdown menus
- **Hover Card** - Hover content cards

### Data Visualization
- **Chart** - Data charts and graphs
- **Calendar** - Date picker calendar

## 🎯 Best Practices

### Code Organization
- Keep components in `src/components/`
- Place pages in `src/pages/`
- Use TypeScript for type safety
- Follow ESLint rules for code quality

### Styling
- Use Tailwind CSS classes for styling
- Leverage shadcn/ui components for consistency
- Follow the design system patterns

### State Management
- Use React Query for server state
- Use React hooks for local state
- Implement proper error handling

## 🚀 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static file hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for the accessible UI primitives

---

Built with ❤️ using modern web technologies
