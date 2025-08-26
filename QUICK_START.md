# ⚡ Quick Start Guide

Get up and running with this React template in under 5 minutes!

## 🚀 Quick Setup

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd vite_react_shadcn_ts
pnpm install
```

### 2. Start Development
```bash
pnpm dev
```

### 3. Open Browser
Navigate to `http://localhost:5173`

That's it! 🎉

## 📁 What You Get

### Pre-configured Components
- ✅ 50+ shadcn/ui components ready to use
- ✅ TypeScript support with strict typing
- ✅ Tailwind CSS for styling
- ✅ React Router for navigation
- ✅ TanStack Query for data fetching
- ✅ React Hook Form for forms
- ✅ ESLint for code quality

### Available Pages
- 🏠 **Home** (`/`) - Landing page with component showcase
- 📚 **Components** (`/components`) - Interactive component documentation
- ❌ **404** (`/*`) - Not found page

## 🎨 Using Components

### Basic Usage
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Form with Validation
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email(),
});

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## 🛠️ Common Tasks

### Adding a New Page
1. Create a new file in `src/pages/`
```tsx
// src/pages/About.tsx
export default function About() {
  return <div>About Page</div>;
}
```

2. Add the route in `src/App.tsx`
```tsx
import About from "./pages/About";

// In the Routes component
<Route path="/about" element={<About />} />
```

### Adding a New Component
1. Create a new file in `src/components/`
```tsx
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

2. Import and use it
```tsx
import { MyComponent } from "@/components/MyComponent";

<MyComponent title="Hello World" />
```

### Styling with Tailwind
```tsx
// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">

// Flexbox layouts
<div className="flex items-center justify-between">

// Spacing
<div className="p-4 m-2 space-y-4">

// Colors
<div className="bg-blue-500 text-white hover:bg-blue-600">
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `eslint.config.js` - ESLint rules
- `components.json` - shadcn/ui configuration

## 🎯 Next Steps

1. **Explore Components**: Visit `/components` to see all available UI components
2. **Read Documentation**: Check `DOCUMENTATION.md` for detailed guides
3. **Customize**: Modify `tailwind.config.ts` to customize your design system
4. **Add Features**: Start building your application features

## 🆘 Need Help?

- 📚 **Full Documentation**: See `DOCUMENTATION.md`
- 🎨 **Component Examples**: Visit `/components` page
- 🔗 **shadcn/ui Docs**: https://ui.shadcn.com/
- ⚡ **Vite Docs**: https://vitejs.dev/
- 🎨 **Tailwind Docs**: https://tailwindcss.com/

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
pnpm build
# Upload the `dist` folder to your hosting platform
```

---

Happy coding! 🎉