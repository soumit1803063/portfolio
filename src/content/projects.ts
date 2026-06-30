import type { ProjectCategory } from "@/types";

export const projectsContent: ProjectCategory[] = [
  {
    category: "Computer Architecture",
    projects: [
      {
        title: "4-bit CPU",
        href: "https://github.com/soumit1803063/4-bit-cpu",
        tools: ["Digital Logic", "Circuit Design"],
        keywords: ["Simulation", "Digital Design", "Hardware Architecture"],
      },
    ],
  },
  {
    category: "LLM",
    projects: [
      {
        title: "LLM JobScout",
        href: "https://github.com/soumit1803063/LLM-JobScout",
        liveUrl:
          "https://llm-jobscout-h2agdm9r2bspabr8ssguy9.streamlit.app/",
        tools: ["Python", "LLAMA-3", "LangChain", "Streamlit", "GroqCloud"],
        keywords: ["LLM", "Prompt Engineering", "Deployment"],
      },
    ],
  },
  {
    category: "Computer Vision",
    projects: [
      {
        title: "Cycle Theft Detection System",
        tools: ["OpenCV", "YOLOv8", "DeepSORT", "Firebase"],
        keywords: [
          "Real-time CCTV",
          "Object Detection",
          "Multi-object Tracking",
          "Theft Detection",
        ],
      },
      {
        title: "Parcel Counter",
        href: "https://github.com/soumit1803063/parcel-counter",
        tools: ["OpenCV", "YOLOv8", "DeepSORT", "Re-Identification"],
        keywords: [
          "Conveyor Belt",
          "Object Detection",
          "Tracking",
          "Re-ID after Power Loss",
        ],
      },
      {
        title: "Virtual Painting",
        href: "https://github.com/soumit1803063/virtualpainting",
        tools: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
        keywords: ["Hand Gesture Recognition", "GUI", "Image Processing"],
      },
    ],
  },
  {
    category: "Machine Learning",
    projects: [
      {
        title: "Behavioral Profiling",
        href: "https://github.com/soumit1803063/Behavioral-Profiling",
        tools: ["Python", "pandas", "matplotlib", "Regression Models"],
        keywords: [
          "Profiling",
          "Predictive Modeling",
          "Feature Selection",
          "Feature Engineering",
          "EDA",
        ],
      },
      {
        title: "Cyber Security (UNSW-NB15)",
        href: "https://github.com/1803063soumit/UNSWNB15",
        tools: ["Python", "Feature Engineering", "Classification"],
        keywords: [
          "Cyber Security",
          "Anomaly Detection",
          "Feature Selection",
          "Feature Engineering",
          "EDA",
        ],
      },
    ],
  },
  {
    category: "Raw Code",
    projects: [
      {
        title: "Problem Solving",
        href: "https://github.com/soumit1803063/problem_solving",
        tools: ["C++", "Competitive Programming"],
        keywords: ["Algorithms", "Data Structures", "Optimization"],
      },
      {
        title: "AI Searching Algorithms",
        href: "https://github.com/soumit1803063/AI",
        tools: ["Python"],
        keywords: [
          "Search Algorithms",
          "Artificial Intelligence",
          "Pathfinding",
        ],
      },
    ],
  },
  {
    category: "Web Development",
    projects: [
      {
        title: "Coders Arena",
        href: "https://github.com/soumit1803063/Coders-Arena",
        tools: ["React", "Express", "MongoDB"],
        keywords: [
          "Competitive Programming",
          "Collaboration",
          "Authentication",
          "Real-time Threads",
        ],
      },
      {
        title: "Radio RUET Signup/Signin Backend",
        href: "https://github.com/soumit1803063/radio_ruet_signup_signin_backend",
        tools: ["JavaScript", "Express.js", "MongoDB"],
        keywords: ["Authentication", "API", "Backend Development"],
      },
    ],
  },
  {
    category: "Modular Coding",
    projects: [
      {
        title: "NIFTI Processor",
        href: "https://github.com/soumit1803063/NIFTI-Processor",
        tools: ["Python", "NIFTI Files"],
        keywords: ["Medical Imaging", "Image Processing", "Data Manipulation"],
      },
      {
        title: "Augmentation 3D",
        href: "https://github.com/soumit1803063/Augmentation-3D",
        tools: ["Python", "3D Image Processing"],
        keywords: ["Data Augmentation", "Rotation", "Scaling", "Noise"],
      },
    ],
  },
  {
    category: "Miscellaneous",
    projects: [
      {
        title: "Google Translator",
        href: "https://github.com/soumit1803063/google_translator",
        tools: ["Python", "googletrans", "Tkinter"],
        keywords: ["Translation", "GUI Application", "NLP"],
      },
    ],
  },
];
