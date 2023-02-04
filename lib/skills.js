export function getSkillItems() {
  return [
    {
      id: "design",
      title: "design",
      description:
        "I use these tools to design the project based on your requirements and current trends",
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
        "I use these technologies to implement designs according to today's standards",
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
        "I use these technologies to ensure thorough web functionality and security",
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
        "I use these providers to ensure that your website is maintained and functional 24 hours a day",
      tools: [
        {
          key: "front-end hosting",
          value: "Vercel",
        },
        {
          key: "back-end hosting",
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
