export const siteConfig = {
  name: "Mohammed Fatahuddin",
  tagline: "Full-stack developer and video editor studying Data Science",
  email: "mohammedfatahuddin.contact@gmail.com",
  heroPhoto: "/hero-photo.jpg",
};

export const features = {
  showVideoWork: false, // Set to true whenever you are ready to unhide the Video Work section
};

export const aboutData = {
  bio: "Computer Science Engineering (Data Science) student at SVCE Bangalore who builds full-stack web applications using AI-assisted development. Background in freelance video editing and motion graphics, with a passion for building real products like issueLog.",
  photoUrl: "/hero-photo.jpg",
};

export const projects = [
  {
    id: "issuelog",
    title: "issueLog",
    description: "A platform where engineering students share real-world technical problems and others contribute solutions or join their projects.",
    image: "https://via.placeholder.com/600x400", // TODO: Add screenshot
    tags: ["Next.js", "Supabase", "React", "Tailwind CSS"],
    liveUrl: "#", // TODO: Add live URL when available
    githubUrl: "https://github.com/fatah-batman/issueLog",
  },
  // TODO: Add more projects here later
];

export const videoWork = [
  {
    id: "vid1",
    title: "Viral Edit - 300k+ Views",
    youtubeId: "dQw4w9WgXcQ", // TODO: Replace with actual YouTube ID
    description: "One of my best performing edits that reached over 300,000 views on YouTube (@barron.studio).",
    views: "300k+"
  },
  {
    id: "vid2",
    title: "Motion Graphics Showcase",
    youtubeId: "dQw4w9WgXcQ", // TODO: Replace with actual YouTube ID
    description: "After Effects motion graphics and compositing work.",
    views: "50k+"
  }
];

export const skills = {
  web: ["Next.js", "React", "Supabase", "Tailwind CSS", "TypeScript", "JavaScript"],
  programming: ["Python", "C++", "Agentic Coding", "Data Science Basics"],
  video: ["After Effects", "Motion Graphics", "Video Editing", "DaVinci Resolve"]
};

export const socialLinks = {
  github: "https://github.com/fatah-batman",
  linkedin: "https://www.linkedin.com/in/mohammed-fatahuddin-90927732a/",
  email: "mailto:mohammedfatahuddin.contact@gmail.com",
  resumeUrl: "/resume.pdf"
};
