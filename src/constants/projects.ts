export interface Project {
  title: string;
  description: string;
  tag: string;
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Spndo",
    description:
      "Full-stack finance platform featuring secure JWT authentication, scalable RESTful APIs, and deployed via Vercel & DigitalOcean.",
    tag: "Next.js & Node.js (Fastify)",
    liveLink: "https://github.com/Waahguptaji/spndo",
    githubLink: "https://github.com/Waahguptaji/spndo",
  },
  {
    title: "Rush Bite",
    description:
      "Food delivery web application integrating live APIs and OAuth 2.0 with heavily optimized component rendering.",
    tag: "React & Redux Toolkit",
    liveLink: "https://rushbite.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/Rush-Bite",
  },
  {
    title: "Hooked",
    description:
      "Online music streaming interface integrating the Spotify API to handle live data fetching and audio playback.",
    tag: "React & Spotify API",
    liveLink: "https://hooked.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/hooked-app",
  },
];
