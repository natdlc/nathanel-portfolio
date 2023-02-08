export function getSkillItems() {
  return [
    {
      id: "design",
      title: "design",
      description: "Visualize website structure, style, and behavior.",
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
      description: "Convert design files into code that lives on the internet.",
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
        "Build website functionality and security through programming.",
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
      description: "Guarantee that your website is up and running 24 / 7.",
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
