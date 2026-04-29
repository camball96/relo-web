import { CircleUser, PackageSearch, Search, Package, LayoutDashboard, Database } from "lucide-react"

// Hero content

export const hero = {
  tag: 'Coming soon — join the waitlist',
  title1: 'Your clients.',
  title2: 'Instantly recalled.',
  blurb: `Relo is the workspace for freelancers and service providers who need
          to know exactly what every client is on — the moment they pick up the
          phone. No spreadsheets. No digging. Just answers.`,
  buttonText: 'Get early access',
  hook: 'No spam. Just a heads up when the doors open.',
}

// Features content

export const features = {
  subTitle: 'Features',
  title: 'Less tool. More answer.',
  blurb: `Relo strips the CRM down to what actually matters for small outfits —
          your clients, your services, and who has what. That's it.`,
  data: [
    {
      title: 'Customer directory',
      desc:  'Everyone you work with, in one place. Search, filter, and pull up any client in a couple of keystrokes.',
      icon: <CircleUser className="w-4 h-4" />,
    },
    {
      title: 'Product catalogue',
      desc:  'Build your service menu once. Monthly, annual, or one-off — billing cycles handled without a second spreadsheet.',
      icon: <PackageSearch className="w-4 h-4" />,
    },
    {
      title: 'Instant lookup',
      desc:  'Client on the line, wants to know what they\'re paying for. You\'re there in seconds. Every time.',
      icon: <Search className="w-4 h-4" />,
      },
    {
      title: 'Product assignments',
      desc:  'Assign services to clients, override pricing for legacy deals, and keep a full history. Nothing gets deleted.',
      icon: <Package className="w-4 h-4" />,
    },
    {
      title: 'Workspace overview',
      desc:  'A dashboard that shows you what\'s growing, what\'s changed, and who just came on board — at a glance.',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      title: 'Simplicity-focused',
      desc:  'No bloat, no noise. Just the tools you need to stay on top of your clients.',
      icon: <Database className="w-4 h-4" />,
    },
  ],
}

// About content

export const about = {
  subTitle: 'About',
  title: 'Built out of frustration',
  blurb1: `Most customer management tools are built for enterprise teams with enterprise budgets. The ones that aren't tend to show it — dated interfaces, clunky workflows, and a feature list that hasn't been questioned in years.`,
  blurb2: `Relo is built for the gap in between. The lean teams who just need the essentials, done well.`,
  blurb3: `That means a workspace that loads fast, responds fast, and gets you to the right customer or product in seconds. An interface that actually feels good to use — modern, intuitive, and designed around the way you work. And pricing that reflects what you're getting, not what you're not.`,
  blurb4: `Down the road, Relo will connect with the tools you're already using — so your data lives in one place without the manual work of keeping it there.`,
  quote: `\"Fast, focused, and honest about what it is. A tool that respects your time, your budget, and your clients.\"`,
}
