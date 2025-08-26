import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Code,
  Copy,
  Check,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Components = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);

  const copyToClipboard = (text: string, componentName: string) => {
    navigator.clipboard.writeText(text);
    setCopied(componentName);
    setTimeout(() => setCopied(null), 2000);
  };

  const ComponentExample = ({ 
    title, 
    description, 
    children, 
    code, 
    componentName 
  }: {
    title: string;
    description: string;
    children: React.ReactNode;
    code: string;
    componentName: string;
  }) => (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyToClipboard(code, componentName)}
            className="flex items-center space-x-2"
          >
            {copied === componentName ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span>{copied === componentName ? "Copied!" : "Copy Code"}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 border rounded-lg bg-gray-50">
          {children}
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{code}</pre>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Component Library</h1>
                <p className="text-sm text-gray-600">Interactive documentation and examples</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="overlays">Overlays</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="mt-6">
            <ComponentExample
              title="Button Variants"
              description="Different button styles and variants"
              componentName="buttons"
              code={`import { Button } from "@/components/ui/button";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Button Sizes"
              description="Different button sizes"
              componentName="button-sizes"
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
            >
              <div className="flex items-center space-x-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </ComponentExample>
          </TabsContent>

          <TabsContent value="inputs" className="mt-6">
            <ComponentExample
              title="Text Inputs"
              description="Basic text input fields"
              componentName="text-inputs"
              code={`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" placeholder="Enter your password" />
</div>`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Textarea"
              description="Multi-line text input"
              componentName="textarea"
              code={`import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Enter your message here..." />`}
            >
              <Textarea placeholder="Enter your message here..." />
            </ComponentExample>

            <ComponentExample
              title="Select Dropdown"
              description="Dropdown selection component"
              componentName="select"
              code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
            >
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
            </ComponentExample>

            <ComponentExample
              title="Checkbox and Radio"
              description="Selection controls"
              componentName="selection-controls"
              code={`import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Interactive Controls"
              description="Switches, sliders, and progress indicators"
              componentName="interactive-controls"
              code={`import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const [switchValue, setSwitchValue] = useState(false);
const [sliderValue, setSliderValue] = useState([50]);
const [progress, setProgress] = useState(65);

<Switch checked={switchValue} onCheckedChange={setSwitchValue} />

<Slider value={sliderValue} onValueChange={setSliderValue} max={100} />

<Progress value={progress} />`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
                  <Label>Toggle Feature</Label>
                </div>
                <div className="space-y-2">
                  <Label>Slider: {sliderValue[0]}</Label>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} />
                </div>
                <div className="space-y-2">
                  <Label>Progress: 65%</Label>
                  <Progress value={65} />
                </div>
              </div>
            </ComponentExample>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <ComponentExample
              title="Alerts"
              description="Status and feedback messages"
              componentName="alerts"
              code={`import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, AlertCircle, CheckCircle, XCircle } from "lucide-react";

<Alert>
  <Info className="h-4 w-4" />
  <AlertDescription>This is an informational alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertDescription>This is a destructive alert.</AlertDescription>
</Alert>`}
            >
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>This is an informational alert for users.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>This is a destructive alert for errors.</AlertDescription>
                </Alert>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Badges"
              description="Status indicators and labels"
              componentName="badges"
              code={`import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </ComponentExample>
          </TabsContent>

          <TabsContent value="data" className="mt-6">
            <ComponentExample
              title="Avatar"
              description="User profile images"
              componentName="avatar"
              code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
            >
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
            </ComponentExample>

            <ComponentExample
              title="Separator"
              description="Visual divider between content"
              componentName="separator"
              code={`import { Separator } from "@/components/ui/separator";

<div>Content above</div>
<Separator />
<div>Content below</div>`}
            >
              <div className="space-y-4">
                <div>Content above the separator</div>
                <Separator />
                <div>Content below the separator</div>
              </div>
            </ComponentExample>
          </TabsContent>

          <TabsContent value="navigation" className="mt-6">
            <ComponentExample
              title="Navigation Components"
              description="Sidebar, Navigation Menu, Breadcrumb, Menubar"
              componentName="navigation"
              code={`// These components are available in the library:
// - Sidebar: Collapsible navigation sidebar
// - Navigation Menu: Horizontal navigation
// - Breadcrumb: Page navigation breadcrumbs  
// - Menubar: Application menu bar

// Import and use as needed for your navigation structure`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Sidebar</Badge>
                  <Badge variant="outline">Navigation Menu</Badge>
                  <Badge variant="outline">Breadcrumb</Badge>
                  <Badge variant="outline">Menubar</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Professional navigation components for building complex layouts and user interfaces.
                  Each component is fully customizable and accessible.
                </p>
              </div>
            </ComponentExample>
          </TabsContent>

          <TabsContent value="overlays" className="mt-6">
            <ComponentExample
              title="Overlay Components"
              description="Dialogs, sheets, tooltips, and popovers"
              componentName="overlays"
              code={`// Available overlay components:
// - Dialog: Modal dialogs
// - Alert Dialog: Confirmation dialogs  
// - Sheet: Slide-out panels
// - Drawer: Side drawers
// - Popover: Floating content
// - Tooltip: Hover tooltips
// - Toast: Notification toasts

// Import and use as needed for your overlay requirements`}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Dialog</Badge>
                  <Badge variant="outline">Alert Dialog</Badge>
                  <Badge variant="outline">Sheet</Badge>
                  <Badge variant="outline">Drawer</Badge>
                  <Badge variant="outline">Popover</Badge>
                  <Badge variant="outline">Tooltip</Badge>
                  <Badge variant="outline">Toast</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Comprehensive overlay system for modals, notifications, and contextual information.
                  All components are built with accessibility in mind.
                </p>
              </div>
            </ComponentExample>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Components;