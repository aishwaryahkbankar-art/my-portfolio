import type { Project, SkillCategory, EducationItem, CertificationItem, LearningItem, ContactInfo } from '../types/portfolio'

export const personalInfo = {
  name: 'Aishwarya H K',
  shortName: 'Aishwarya',
  professionalTitle: 'Computer Science Engineering Student',
  tagline: 'Aspiring Software Developer | Technology Enthusiast',
  currentStatus: 'B.Tech Computer Science Engineering Student',
  bio: 'I’m a Computer Science Engineering student interested in software development, IoT, data science, and emerging technologies. I enjoy learning by building practical projects, experimenting with new technologies, and improving with every project.',
  personality: ['Curious', 'Hardworking', 'Creative'],
  philosophy: 'I learn by building, experiment with technology, and improve with every project.',
  location: 'Karnataka, India', // Configurable location
  focusAreas: ['Software Development', 'IoT', 'Data Science', 'Embedded Systems', 'Web Development'],
}

export const contactData: ContactInfo = {
  email: 'aishwaryahkbankar@gmail.com',
  githubUsername: 'aishwaryahkbankar-art',
  githubUrl: 'https://github.com/aishwaryahkbankar-art',
  linkedinName: 'Aishwarya HK',
  linkedinUrl: null, // Configurable LinkedIn profile link when ready
  instagramHandle: 'aishwarya__banakar',
  instagramUrl: 'https://www.instagram.com/aishwarya__banakar',
  resumeUrl: null, // Configurable resume file path or document URL when uploaded
}

export const projectsData: Project[] = [
  {
    id: 'iot-biogas-system',
    number: '01',
    title: 'IoT-Based Biogas Monitoring System',
    category: 'Hardware & IoT Engineering',
    badgeText: 'Primary Featured Project',
    statusTag: 'Implemented Prototype',
    description: 'An IoT-based system for monitoring biogas-related readings and providing useful operational telemetry through a dedicated web interface.',
    problem: 'Monitoring biogas production and detecting environmental shifts in small-to-medium digesters is difficult and error-prone without an automated, connected telemetry system.',
    whatWasBuilt: 'An ESP32-based monitoring prototype coupled with an interactive web dashboard that presents real-time gas sensor levels, volume calculated per trigger cycle, cumulative trigger counts, and historical trend charting.',
    architectureSteps: [
      'Sensors',
      'ESP32 Microcontroller',
      'Wi-Fi Telemetry',
      'Web Dashboard',
      'Threshold Alerts'
    ],
    technologies: ['ESP32', 'IoT Sensors', 'Wi-Fi Telemetry', 'Web Interface', 'Data Visualization', 'Alert Logic'],
    technicalHighlights: [
      'Real-time multi-sensor telemetry acquisition on ESP32',
      'Embedded Wi-Fi data packet transmission to web interface',
      'Trigger-based volume computation and event logging',
      'Dynamic sensor reading visualization and threshold alert logic',
      'Continuous local data capture for trend analysis'
    ],
    links: {
      github: null,
      liveDemo: null,
      caseStudy: null
    },
    isPrimary: true,
    diagramType: 'iot-biogas'
  },
  {
    id: 'sonic-wave-fire-extinguisher',
    number: '02',
    title: 'Sonic Wave Fire Extinguisher',
    category: 'Deep-Tech Concept & Acoustics',
    badgeText: 'Deep-Tech Concept Study',
    statusTag: 'Deep-Tech Concept',
    description: 'A conceptual fire-extinguishing technology project exploring the physical application of low-frequency sound waves to suppress flames without chemical or water residue.',
    problem: 'Conventional suppression media (water, halogenated gases, dry powders) cause destructive residue, corrosion, or contamination when deployed near sensitive electronics, server racks, or museum artifacts.',
    whatWasBuilt: 'A comprehensive deep-tech concept and engineering feasibility study covering acoustic boundary-layer disruption, acoustic impedance modeling, stakeholder needs, prototype specifications, competitor benchmarking, and go-to-market commercialization strategy.',
    architectureSteps: [
      'Acoustic Wave Generator',
      'Collimated Sound Field',
      'Flame Boundary Interaction',
      'Oxygen Disruption & Extinction'
    ],
    technologies: ['Acoustic Physics', 'Electronics Design', 'Feasibility Study', 'Prototype Architecture', 'Business Modelling'],
    technicalHighlights: [
      'Deep-tech concept formulation for non-destructive suppression',
      'Acoustic flame disruption mechanics and boundary analysis',
      'Component selection and power budget for sonic transducers',
      'Competitive landscape mapping against chemical extinguishers',
      'Go-to-market strategy, cost modeling, and stakeholder analysis'
    ],
    links: {
      github: null,
      liveDemo: null,
      caseStudy: null
    },
    isPrimary: false,
    diagramType: 'sonic-fire'
  },
  {
    id: 'c-line-editor',
    number: '03',
    title: 'Line Editor',
    category: 'Systems Programming & Algorithms',
    badgeText: 'Systems Project',
    statusTag: 'Systems Programming',
    description: 'A modular C-based line editor developed as a focused systems programming project to implement core in-memory buffer manipulation and file I/O.',
    problem: 'Constructing and modifying text files line-by-line requires efficient dynamic data structures, buffer boundary validation, and robust pointer handling in low-level memory.',
    whatWasBuilt: 'A clean, command-driven text manipulation utility in C featuring dynamic line allocation, insertion, deletion, line substitution, buffer serialization, and integrated Git/GitHub version control workflow.',
    architectureSteps: [
      'User Command Input',
      'Command Parser & Validator',
      'Buffer / Pointer Operations',
      'File Stream Synchronization'
    ],
    technologies: ['C Programming', 'Data Structures', 'File I/O', 'VS Code', 'Git', 'GitHub'],
    technicalHighlights: [
      'Engineered in pure C with dynamic memory allocation',
      'Efficient line-indexed buffer data structures',
      'File stream reading, line parsing, and disk persistence',
      'Strict pointer bounds validation to prevent buffer overflows',
      'Structured version-controlled workflow with Git and GitHub'
    ],
    links: {
      github: null,
      liveDemo: null,
      caseStudy: null
    },
    isPrimary: false,
    diagramType: 'line-editor'
  }
]

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages utilized for system logic, algorithms, and applications.',
    skills: ['C', 'Java', 'Python']
  },
  {
    title: 'Development',
    description: 'Application engineering, user interfaces, and structured software creation.',
    skills: ['Web Development', 'Software Development', 'Component Design', 'Responsive UI']
  },
  {
    title: 'Tools & Workflow',
    description: 'Daily developer tooling, version control, and coding environments.',
    skills: ['Git', 'GitHub', 'VS Code', 'Command Line', 'Terminal']
  },
  {
    title: 'Technology Areas',
    description: 'Domains of active exploration, academic inquiry, and project work.',
    skills: ['IoT (Internet of Things)', 'Data Science', 'Embedded Systems', 'Emerging Technologies']
  }
]

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    field: 'Computer Science and Engineering',
    status: 'Current Student',
    institution: 'Engineering Institution', // Configurable
    graduationYear: 'Undergraduate Program', // Configurable
    notes: 'Focusing on core computer science foundations, systems programming, data structures, algorithms, and practical applied engineering.'
  }
]

export const certificationsData: CertificationItem[] = [
  // Empty data array representing authentic verified state.
  // Entries will be displayed automatically once verified credentials are added.
]

export const technicalInterests: { title: string; tag: string; description: string }[] = [
  {
    title: 'Internet of Things (IoT)',
    tag: 'Hardware & Connectivity',
    description: 'Interfacing microcontrollers (ESP32/Arduino) with environmental sensors, telemetry transmission, and web dashboards.'
  },
  {
    title: 'Data Science',
    tag: 'Analysis & Patterns',
    description: 'Deriving actionable patterns from datasets, exploring statistical foundations, and understanding data-driven decision making.'
  },
  {
    title: 'Software Development',
    tag: 'Architecture & Craft',
    description: 'Designing modular, reliable applications with clean separation of concerns, strong type discipline, and readable code.'
  },
  {
    title: 'Embedded Systems',
    tag: 'Systems & Microcontrollers',
    description: 'Low-level peripheral communication, memory-efficient programming, and real-time sensor data acquisition.'
  },
  {
    title: 'Web Development',
    tag: 'Interfaces & Delivery',
    description: 'Constructing modern, accessible, and responsive user interfaces that connect end-users to backend services and hardware.'
  },
  {
    title: 'Emerging Technologies',
    tag: 'Innovation & Horizon',
    description: 'Keeping abreast of advancements in intelligent systems, deep-tech concepts, and next-generation developer tooling.'
  }
]

export const learningJourneyData: LearningItem[] = [
  {
    subject: 'C Programming',
    category: 'Systems Fundamentals',
    status: 'Applied in Projects',
    focusDescription: 'Pointers, dynamic memory management, file I/O operations, and line buffer architecture.'
  },
  {
    subject: 'Java',
    category: 'Object-Oriented Design',
    status: 'Core Practice',
    focusDescription: 'Object-oriented programming principles, class hierarchies, exception handling, and data structures.'
  },
  {
    subject: 'Python',
    category: 'Scripting & Data Science',
    status: 'Active Learning',
    focusDescription: 'Data manipulation, algorithmic problem solving, scripting, and introductory data science tooling.'
  },
  {
    subject: 'Web Development',
    category: 'Frontend & UI Engineering',
    status: 'Active Learning',
    focusDescription: 'Semantic HTML, responsive CSS architecture, modern React patterns, and accessible user experiences.'
  },
  {
    subject: 'Git & GitHub',
    category: 'Version Control & Collaboration',
    status: 'Applied in Projects',
    focusDescription: 'Repository management, branching strategies, commit cleanliness, and open engineering workflows.'
  },
  {
    subject: 'Software Engineering',
    category: 'Methodologies & Architecture',
    status: 'Core Practice',
    focusDescription: 'Problem decomposition, clean architectural boundaries, testing strategies, and user-centric design.'
  }
]
