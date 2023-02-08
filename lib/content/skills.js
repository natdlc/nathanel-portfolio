export function getSkillItems() {
  return [
    {
      id: "design",
      title: "design",
      description: 'A "blueprint" for your website before I build it',
      tools: [
        {
          key: "mockup",
          value: "Figma",
        },
        {
          key: "graphics",
          value: "Canva, GIMP",
        },
      ],
    },
    {
      id: "frontend",
      title: "frontend",
      description:
        "I'll convert design files into code that lives on the internet",
      tools: [
        {
          key: "ui library",
          value: "React",
        },
        {
          key: "framework",
          value: "Next.js",
        },
      ],
    },
    {
      id: "backend",
      title: "backend",
      description:
        "I'll build backend functionality and security with programming",
      tools: [
        {
          key: "language",
          value: "JavaScript",
        },
        {
          key: "runtime",
          value: "Node.js",
        },
        {
          key: "framework",
          value: "Express.js",
        },
        {
          key: "database",
          value: "MongoDB",
        },
      ],
    },
    {
      id: "deployment",
      title: "deployment",
      description:
        "I'll keep your website available to all visitors 24 hours per day",
      tools: [
        {
          key: "frontend hosting",
          value: "Vercel",
        },
        {
          key: "backend hosting",
          value: "Cyclic",
        },
        {
          key: "domain",
          value: "Hostinger",
        },
      ],
    },
  ];
}
