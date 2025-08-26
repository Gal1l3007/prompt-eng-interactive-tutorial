# 📚 Project Documentation

## Overview

This is a modern React application template built with TypeScript, Vite, and shadcn/ui. It provides a solid foundation for building production-ready web applications with a comprehensive component library and modern development tools.

## 🏗️ Architecture

### Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 6.3.4
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack Query 5.56.2
- **Forms**: React Hook Form 7.53.0 + Zod 3.23.8
- **Icons**: Lucide React
- **Package Manager**: pnpm

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── accordion.tsx      # Collapsible content
│   │   │   ├── alert.tsx          # Status alerts
│   │   │   ├── alert-dialog.tsx   # Confirmation dialogs
│   │   │   ├── avatar.tsx         # User profile images
│   │   │   ├── badge.tsx          # Status indicators
│   │   │   ├── button.tsx         # Interactive buttons
│   │   │   ├── calendar.tsx       # Date picker
│   │   │   ├── card.tsx           # Content containers
│   │   │   ├── carousel.tsx       # Image carousels
│   │   │   ├── chart.tsx          # Data visualization
│   │   │   ├── checkbox.tsx       # Checkbox inputs
│   │   │   ├── collapsible.tsx    # Expandable sections
│   │   │   ├── command.tsx        # Command palette
│   │   │   ├── context-menu.tsx   # Right-click menus
│   │   │   ├── dialog.tsx         # Modal dialogs
│   │   │   ├── drawer.tsx         # Side drawers
│   │   │   ├── dropdown-menu.tsx  # Dropdown menus
│   │   │   ├── form.tsx           # Form components
│   │   │   ├── hover-card.tsx     # Hover content cards
│   │   │   ├── input.tsx          # Text inputs
│   │   │   ├── input-otp.tsx      # OTP inputs
│   │   │   ├── label.tsx          # Form labels
│   │   │   ├── menubar.tsx        # Application menus
│   │   │   ├── navigation-menu.tsx # Navigation menus
│   │   │   ├── pagination.tsx     # Page navigation
│   │   │   ├── popover.tsx        # Floating content
│   │   │   ├── progress.tsx       # Progress indicators
│   │   │   ├── radio-group.tsx    # Radio buttons
│   │   │   ├── resizable.tsx      # Resizable panels
│   │   │   ├── scroll-area.tsx    # Custom scrollbars
│   │   │   ├── select.tsx         # Dropdown selections
│   │   │   ├── separator.tsx      # Visual dividers
│   │   │   ├── sheet.tsx          # Slide-out panels
│   │   │   ├── sidebar.tsx        # Navigation sidebar
│   │   │   ├── skeleton.tsx       # Loading placeholders
│   │   │   ├── slider.tsx         # Range sliders
│   │   │   ├── sonner.tsx         # Toast notifications
│   │   │   ├── switch.tsx         # Toggle switches
│   │   │   ├── table.tsx          # Data tables
│   │   │   ├── tabs.tsx           # Tabbed interfaces
│   │   │   ├── textarea.tsx       # Multi-line inputs
│   │   │   ├── toast.tsx          # Toast notifications
│   │   │   ├── toaster.tsx        # Toast container
│   │   │   ├── toggle.tsx         # Toggle buttons
│   │   │   ├── toggle-group.tsx   # Toggle groups
│   │   │   ├── tooltip.tsx        # Hover tooltips
│   │   │   └── use-toast.ts       # Toast hook
│   │   └── made-with-dyad.tsx     # Attribution component
│   ├── pages/
│   │   ├── Index.tsx              # Home page
│   │   ├── Components.tsx         # Component documentation
│   │   └── NotFound.tsx           # 404 page
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility libraries
│   ├── utils/                     # Helper functions
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # Entry point
│   ├── globals.css                # Global styles
│   ├── App.css                    # App-specific styles
│   └── vite-env.d.ts              # Vite type definitions
├── public/                        # Static assets
├── package.json                   # Dependencies and scripts
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint configuration
├── postcss.config.js              # PostCSS configuration
├── components.json                # shadcn/ui configuration
├── vercel.json                    # Vercel deployment config
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
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

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm build:dev` | Build for development |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint for code quality |

## 🎨 Component Library

### Component Categories

#### Layout & Navigation
- **Sidebar**: Collapsible navigation sidebar with customizable content
- **Navigation Menu**: Horizontal navigation with dropdown support
- **Breadcrumb**: Page navigation breadcrumbs
- **Menubar**: Application menu bar with keyboard navigation

#### Data Display
- **Table**: Sortable and paginated data tables
- **Card**: Flexible content containers
- **Avatar**: User profile images with fallbacks
- **Badge**: Status indicators and labels
- **Progress**: Progress indicators and loading states
- **Skeleton**: Loading placeholders for content

#### Forms & Input
- **Button**: Interactive buttons with multiple variants
- **Input**: Text input fields with validation
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection component
- **Checkbox**: Checkbox inputs with labels
- **Radio Group**: Radio button groups
- **Switch**: Toggle switches
- **Slider**: Range sliders with custom values
- **Form**: Form components with validation

#### Feedback & Overlays
- **Dialog**: Modal dialogs for focused interactions
- **Alert Dialog**: Confirmation dialogs for destructive actions
- **Sheet**: Slide-out panels from screen edges
- **Drawer**: Side drawers for navigation or content
- **Popover**: Floating content overlays
- **Tooltip**: Hover tooltips for additional information
- **Toast**: Notification toasts for user feedback
- **Alert**: Status alerts for important messages

#### Interactive Elements
- **Accordion**: Collapsible content sections
- **Collapsible**: Expandable sections with smooth animations
- **Tabs**: Tabbed interfaces for organizing content
- **Carousel**: Image carousels with navigation
- **Command**: Command palette for keyboard navigation
- **Context Menu**: Right-click context menus
- **Dropdown Menu**: Dropdown menus with sub-items
- **Hover Card**: Hover content cards for previews

#### Data Visualization
- **Chart**: Data charts and graphs using Recharts
- **Calendar**: Date picker calendar component

### Usage Examples

#### Basic Button
```tsx
import { Button } from "@/components/ui/button";

<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
```

#### Form with Validation
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const MyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
```

#### Data Table
```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MyTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
```

## 🎯 Best Practices

### Code Organization

1. **Component Structure**
   - Keep components in `src/components/`
   - Use PascalCase for component names
   - Create separate files for complex components
   - Use TypeScript interfaces for props

2. **File Naming**
   - Use kebab-case for file names
   - Use PascalCase for component names
   - Use camelCase for functions and variables

3. **Import Organization**
   ```tsx
   // React imports
   import { useState, useEffect } from "react";
   
   // Third-party imports
   import { Button } from "@/components/ui/button";
   
   // Local imports
   import { MyComponent } from "./MyComponent";
   ```

### Styling Guidelines

1. **Tailwind CSS**
   - Use utility classes for styling
   - Follow mobile-first responsive design
   - Use semantic color names from the design system
   - Leverage Tailwind's spacing scale

2. **Component Styling**
   ```tsx
   // Good: Using Tailwind utilities
   <div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm">
   
   // Avoid: Inline styles
   <div style={{ display: 'flex', padding: '16px' }}>
   ```

3. **Responsive Design**
   ```tsx
   // Mobile-first approach
   <div className="w-full md:w-1/2 lg:w-1/3">
   ```

### State Management

1. **Local State**
   - Use `useState` for simple component state
   - Use `useReducer` for complex state logic
   - Keep state as close to where it's used as possible

2. **Server State**
   - Use TanStack Query for API calls and caching
   - Implement proper loading and error states
   - Use optimistic updates for better UX

3. **Form State**
   - Use React Hook Form for form management
   - Implement proper validation with Zod
   - Handle form submission and errors gracefully

### Performance Optimization

1. **Component Optimization**
   - Use `React.memo` for expensive components
   - Implement proper dependency arrays in hooks
   - Avoid unnecessary re-renders

2. **Code Splitting**
   - Use dynamic imports for route-based splitting
   - Lazy load components when possible
   - Implement proper loading states

3. **Bundle Optimization**
   - Use tree shaking for unused code
   - Optimize images and assets
   - Implement proper caching strategies

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with a custom configuration:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... more color variables
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### TypeScript

TypeScript is configured for strict type checking:

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### ESLint

ESLint is configured for code quality:

```javascript
// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Vite configuration

2. **Environment Variables**
   - Add any required environment variables in Vercel dashboard
   - Use `VITE_` prefix for client-side variables

3. **Build Settings**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

### Other Platforms

The project can be deployed to any static hosting platform:

1. **Netlify**
   - Connect repository and set build command to `pnpm build`
   - Set publish directory to `dist`

2. **GitHub Pages**
   - Use GitHub Actions for automated deployment
   - Configure for static site hosting

3. **AWS S3 + CloudFront**
   - Build the project locally
   - Upload `dist` folder to S3 bucket
   - Configure CloudFront for CDN

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   pnpm lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a pull request**

### Code Style

- Follow the existing code style and conventions
- Use TypeScript for all new code
- Write meaningful commit messages
- Add proper documentation for new features
- Include tests for new functionality

### Commit Message Format

Use conventional commit messages:

```
type(scope): description

feat: add new user authentication
fix: resolve navigation issue
docs: update README
style: format code
refactor: improve component structure
test: add unit tests
chore: update dependencies
```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for the accessible UI primitives
- [React](https://reactjs.org/) for the amazing UI library

---

Built with ❤️ using modern web technologies