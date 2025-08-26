import { useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Rocket, 
  Code, 
  Palette, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  Star,
  Heart,
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info,
  Settings,
  Package,
  Layers,
  Sparkles
} from "lucide-react";

const Index = () => {
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);

  const techStack = [
    { name: "React 18", icon: Code, color: "bg-blue-500", description: "Latest React with concurrent features" },
    { name: "TypeScript", icon: Shield, color: "bg-blue-600", description: "Type-safe development experience" },
    { name: "Vite", icon: Zap, color: "bg-purple-500", description: "Lightning fast build tool" },
    { name: "Tailwind CSS", icon: Palette, color: "bg-cyan-500", description: "Utility-first CSS framework" },
    { name: "shadcn/ui", icon: Layers, color: "bg-green-500", description: "Beautiful UI components" },
    { name: "TanStack Query", icon: Database, color: "bg-orange-500", description: "Data fetching and caching" },
  ];

  const componentCategories = [
    {
      title: "Layout & Navigation",
      components: ["Sidebar", "Navigation Menu", "Breadcrumb", "Menubar"],
      icon: Globe
    },
    {
      title: "Data Display",
      components: ["Table", "Card", "Avatar", "Badge", "Progress", "Skeleton"],
      icon: Database
    },
    {
      title: "Forms & Input",
      components: ["Button", "Input", "Textarea", "Select", "Checkbox", "Radio Group", "Switch", "Slider"],
      icon: Settings
    },
    {
      title: "Feedback & Overlays",
      components: ["Dialog", "Alert Dialog", "Sheet", "Drawer", "Popover", "Tooltip", "Toast", "Alert"],
      icon: AlertCircle
    },
    {
      title: "Interactive Elements",
      components: ["Accordion", "Collapsible", "Tabs", "Carousel", "Command", "Context Menu", "Dropdown Menu", "Hover Card"],
      icon: Sparkles
    },
    {
      title: "Data Visualization",
      components: ["Chart", "Calendar"],
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Modern React Template
                </h1>
                <p className="text-sm text-gray-600">Production-ready React application</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Ready to Deploy
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Build Amazing Web Apps
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive React template with modern technologies, beautiful UI components, 
              and everything you need to create stunning web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border">
                  <div className={`p-1 rounded ${tech.color}`}>
                    <tech.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </Button>
              <Link to="/components">
                <Button size="lg" variant="outline">
                  <Code className="h-4 w-4 mr-2" />
                  View Components
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">✨ Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-blue-100 rounded-lg w-fit">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Built with Vite for instant hot reload and optimized builds
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-green-100 rounded-lg w-fit">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  Full TypeScript support for better development experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Beautiful UI</CardTitle>
                <CardDescription>
                  Pre-built components with shadcn/ui and Tailwind CSS
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-orange-100 rounded-lg w-fit">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Data Ready</CardTitle>
                <CardDescription>
                  TanStack Query for efficient data fetching and caching
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-red-100 rounded-lg w-fit">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Routing</CardTitle>
                <CardDescription>
                  React Router for seamless client-side navigation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 bg-indigo-100 rounded-lg w-fit">
                  <Rocket className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Deploy Ready</CardTitle>
                <CardDescription>
                  Optimized for Vercel and other hosting platforms
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🧩 Component Library</h2>
          <Tabs defaultValue="layout" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
            </TabsList>

            <TabsContent value="layout" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Navigation Components</CardTitle>
                    <CardDescription>Sidebar, Navigation Menu, Breadcrumb, Menubar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Sidebar</Badge>
                        <Badge variant="outline">Navigation Menu</Badge>
                        <Badge variant="outline">Breadcrumb</Badge>
                        <Badge variant="outline">Menubar</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Professional navigation components for building complex layouts and user interfaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Layout Features</CardTitle>
                    <CardDescription>Responsive design and flexible layouts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">Responsive</Badge>
                        <Badge variant="secondary">Flexible</Badge>
                        <Badge variant="secondary">Accessible</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Built with modern CSS Grid and Flexbox for optimal responsive behavior.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>Interactive form elements with validation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" />
                    </div>
                    <div className="space-y-2">
                      <Label>Select Option</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <div className="space-y-2">
                      <Label>Radio Options</Label>
                      <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="r1" />
                          <Label htmlFor="r1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option2" id="r2" />
                          <Label htmlFor="r2">Option 2</Label>
                        </div>
                      </RadioGroupItem>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Controls</CardTitle>
                    <CardDescription>Switches, sliders, and progress indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Progress: {progress}%</Label>
                      <Progress value={progress} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label>Slider: {sliderValue[0]}</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={switchValue}
                        onCheckedChange={setSwitchValue}
                      />
                      <Label>Toggle Feature</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Small</Button>
                      <Button size="sm">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts & Notifications</CardTitle>
                    <CardDescription>User feedback and status messages</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        This is an informational alert for users.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        This is a destructive alert for errors.
                      </AlertDescription>
                    </Alert>
                    <div className="flex space-x-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline">Alert Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tooltips & Popovers</CardTitle>
                    <CardDescription>Contextual information and overlays</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover for tooltip</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This is a helpful tooltip!</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Click for popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                              Set the dimensions for the layer.
                            </p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="interactive" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion</CardTitle>
                    <CardDescription>Collapsible content sections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What is React?</AccordionTrigger>
                        <AccordionContent>
                          React is a JavaScript library for building user interfaces, particularly single-page applications.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What is TypeScript?</AccordionTrigger>
                        <AccordionContent>
                          TypeScript is a superset of JavaScript that adds static typing to the language.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>What is Vite?</AccordionTrigger>
                        <AccordionContent>
                          Vite is a build tool that provides a faster and leaner development experience.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Display</CardTitle>
                    <CardDescription>Cards, avatars, and badges</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-sm text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Component Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">📚 Component Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentCategories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {category.components.length} components available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.components.map((component) => (
                      <Badge key={component} variant="outline" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">🚀 Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Clone this repository and start building your next amazing web application
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 text-left">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>$ git clone https://github.com/your-repo/vite_react_shadcn_ts</div>
                <div>$ cd vite_react_shadcn_ts</div>
                <div>$ pnpm install</div>
                <div>$ pnpm dev</div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Star on GitHub
                </Button>
                <Button size="lg" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Modern React Template</p>
                <p className="text-sm text-gray-600">Built with modern web technologies</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>Made with ❤️</span>
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;
