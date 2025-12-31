// courses-data.js
// Database untuk semua course di ZeeTech Academy
// Untuk menambah course baru, tinggal tambahkan object baru dengan struktur yang sama

const coursesData = {
  "web-development": {
    id: "web-development",
    title: "Full Stack Web Development Bootcamp",
    badge: "MOST POPULAR",
    badgeIcon: "fire",
    badgeColor: "#ec4899",
    description: "Kuasai web development dari frontend hingga backend. Bangun aplikasi web modern dengan HTML, CSS, JavaScript, PHP,Laravel, dan MySQL.",
    duration: "16 Pertemuan",
    level: "Pemula - Advanced",
    alumni: "250+",
    rating: "4.9/5",
    projectCount: 5,
    
    learningPoints: [
      "HTML5 & CSS3 Modern",
      "JavaScript ES6+",
      "PHP & Laravel Framework",
      "MySQL",
      "RESTful API Design",
      "Git & GitHub"
    ],
    
    aboutProgram: {
      intro: "Program bootcamp intensif selama 16 pertemuan yang dirancang untuk mengubah Anda menjadi Full Stack Web Developer profesional. Anda akan belajar membangun aplikasi web modern dari nol hingga deployment.",
      industry: "Kurikulum kami disesuaikan dengan kebutuhan industri terkini, menggunakan teknologi dan framework yang paling banyak digunakan oleh perusahaan-perusahaan teknologi terkemuka.",
      whyChoose: [
        "Pembelajaran project-based dengan 5+ portofolio nyata",
        "Mentoring langsung dari praktisi berpengalaman 10+ tahun",
        "Live coding sessions setiap pertemuan",
        // "Career support & job placement assistance",
        "Akses lifetime ke materi dan update terbaru"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Web Fundamentals",
        duration: "4 Pertemuan",
        lessons: "18",
        topics: [
          "HTML & CSS Basic",
          "CSS Advance & Bootstrap",
          "Responsive Design Principles",
          "Javascript Fundamentals",
          "Project: Landing Page Portofolio",
          "Git & Github Development tools",
        ]
      },
      {
        title: "Module 2: PHP & MySQL Mastery",
        duration: "4 Pertemuan",
        lessons: "20",
        topics: [
          "PHP Basic",
          "PHP Advance & OOP",
          "MySQL & Database Design",
          "PHP & MySQL Integration",
          "Authentication & Security"
        ]
      },
      {
        title: "Module 3: Laravel Development",
        duration: "4 Pertemuan",
        lessons: "22",
        topics: [
          "Introduce & Setup Laravel",
          "Blade Templating & Views",
          "Database & Eloquent ORM",
          "Controllers & CRUD Operations",
          "Relationship & Advanced Eloquent"
        ]
      },
      {
        title: "Module 4: Laravel Advance",
        duration: "4 Pertemuan",
        lessons: "24",
        topics: [
          "Authentication & Authorization",
          "File Upload & Storage",
          "API Development & AJAX",
          "Advanced Features",
          "Final Project & Deployment"
        ]
      }
    ],
    
    skills: [
      "HTML5", "CSS3", "JavaScript",  
      "Laravel", "MySQL", "Git", "Github", "REST API", 
      "Bootstrap"
    ],
    
    instructor: {
      name: "Judhistira Ooka Pratama",
      role: "Senior Full Stack Developer",
      avatar: "OP",
      bio: "10+ tahun pengalaman di perusahaan teknologi multinasional. Spesialisasi dalam Web Development dan Software Architecture."
    },
    
    pricing: {
      originalPrice: "Rp 2.000.000",
      currentPrice: "Rp 1.500.000",
      discount: "25%"
    }
  },

  "mobile-development": {
    id: "mobile-development",
    title: "Mobile App Development with Flutter",
    badge: "NEW COURSE",
    badgeIcon: "mobile-alt",
    badgeColor: "#3b82f6",
    description: "Buat aplikasi mobile Android & iOS dengan Flutter. Satu codebase untuk dua platform sekaligus dengan performa native.",
    duration: "16 Pertemuan",
    level: "Pemula - Intermediate",
    alumni: "180+",
    rating: "4.8/5",
    projectCount: 4,
    
    learningPoints: [
      "Flutter Framework Fundamentals",
      "Dart Programming Language",
      "Widget & State Management",
      "Firebase Integration",
      "REST API Integration",
      "Local Database (SQLite)",
      "Push Notifications",
      "App Publishing (Play Store & App Store)"
    ],
    
    aboutProgram: {
      intro: "Program komprehensif 16 pertemuan untuk menguasai pengembangan aplikasi mobile cross-platform menggunakan Flutter. Dari konsep dasar hingga publish app ke store.",
      industry: "Flutter adalah framework pilihan untuk startup dan perusahaan besar karena efisiensi development dan performa yang excellent. Dengan satu codebase, Anda bisa deploy ke Android dan iOS.",
      whyChoose: [
        "Build 4+ aplikasi mobile portfolio-ready",
        "Mentor berpengalaman dari industri app development",
        "Pembelajaran hands-on dengan real case study",
        "Panduan lengkap publish ke Play Store & App Store",
        "Support komunitas alumni developer aktif"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Flutter & Dart Basics",
        duration: "2 Minggu",
        lessons: "15",
        topics: [
          "Dart Programming Fundamentals",
          "Flutter Installation & Setup",
          "Widget Tree & Layout",
          "Stateless vs Stateful Widgets",
          "Project: Simple Calculator App"
        ]
      },
      {
        title: "Module 2: Advanced UI & Navigation",
        duration: "3 Minggu",
        lessons: "18",
        topics: [
          "Complex Layouts & Animations",
          "Navigation & Routing",
          "Form Handling & Validation",
          "Custom Widgets",
          "Project: Todo List App with Local Storage"
        ]
      },
      {
        title: "Module 3: Backend Integration",
        duration: "3 Minggu",
        lessons: "20",
        topics: [
          "REST API Consumption",
          "State Management (Provider/Bloc)",
          "Firebase Authentication",
          "Cloud Firestore Database",
          "Project: Social Media App Clone"
        ]
      },
      {
        title: "Module 4: Production & Publishing",
        duration: "2 Minggu",
        lessons: "12",
        topics: [
          "App Performance Optimization",
          "Testing & Debugging",
          "Build & Release Process",
          "Publishing to Stores",
          "Final Project: E-Commerce Mobile App"
        ]
      }
    ],
    
    skills: [
      "Flutter", "Dart", "Firebase", "REST API", "Provider",
      "Bloc Pattern", "SQLite", "Git", "Material Design",
      "iOS Development", "Android Development"
    ],
    
    instructor: {
      name: "Budi Santoso",
      role: "Mobile App Development Lead",
      avatar: "BS",
      bio: "8+ tahun pengalaman sebagai mobile developer. Sudah membuat 20+ aplikasi yang dipublish di Play Store dan App Store dengan total 1 juta+ downloads."
    },
    
    pricing: {
      originalPrice: "Rp 2.000.000",
      currentPrice: "Rp 1.500.000",
      discount: "25%"
    }
  },

  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI/UX Design Professional",
    badge: "TRENDING",
    badgeIcon: "palette",
    badgeColor: "#8b5cf6",
    description: "Pelajari desain antarmuka dan pengalaman pengguna dari nol. Kuasai Figma, wireframing, prototyping, dan prinsip desain user-centric yang modern.",
    duration: "8 Pertemuan",
    level: "Pemula - Advanced",
    alumni: "200+",
    rating: "4.9/5",
    projectCount: 6,
    
    learningPoints: [
      "UI/UX Design Principles",
      "User Research & Persona",
      "Wireframing & Prototyping",
      "Figma Mastery",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
      "Portfolio Building"
    ],
    
    aboutProgram: {
      intro: "Program 8 pertemuan intensif yang mengajarkan Anda cara membuat desain yang tidak hanya indah, tetapi juga fungsional dan user-friendly. Dari research hingga final design.",
      industry: "UI/UX Designer adalah salah satu profesi paling dicari di industri digital. Kurikulum kami mencakup metodologi design thinking dan best practices yang digunakan di perusahaan tech global.",
      whyChoose: [
        "6+ project desain untuk portfolio profesional",
        "Akses ke template & resource library premium",
        "Feedback langsung dari senior UI/UX designer",
        "Case study dari project real client",
        "Certificate dari platform design terkemuka"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Design Fundamentals",
        duration: "2 Minggu",
        lessons: "12",
        topics: [
          "Introduction to UI/UX",
          "Design Thinking Process",
          "Color Theory & Typography",
          "Layout & Composition",
          "Project: Landing Page Redesign"
        ]
      },
      {
        title: "Module 2: User Research & Wireframing",
        duration: "2 Minggu",
        lessons: "14",
        topics: [
          "User Research Methods",
          "Creating User Persona",
          "User Journey Mapping",
          "Low-Fidelity Wireframes",
          "Project: Mobile App Wireframe"
        ]
      },
      {
        title: "Module 3: High-Fidelity Design",
        duration: "2 Minggu",
        lessons: "16",
        topics: [
          "Figma Advanced Techniques",
          "Component & Design Systems",
          "Micro-interactions",
          "Responsive Design",
          "Project: Dashboard UI Design"
        ]
      },
      {
        title: "Module 4: Prototyping & Testing",
        duration: "2 Minggu",
        lessons: "14",
        topics: [
          "Interactive Prototyping",
          "Usability Testing",
          "Design Handoff to Developers",
          "Portfolio Presentation",
          "Final Project: Complete App Design"
        ]
      }
    ],
    
    skills: [
      "Figma", "Adobe XD", "User Research", "Wireframing",
      "Prototyping", "Design Systems", "Interaction Design",
      "Usability Testing", "Visual Design", "Typography"
    ],
    
    instructor: {
      name: "Sarah Wijaya",
      role: "Senior UI/UX Designer",
      avatar: "SW",
      bio: "7+ tahun pengalaman sebagai UI/UX designer di startup unicorn dan agency digital. Expert dalam design thinking dan user-centered design approach."
    },
    
    pricing: {
      originalPrice: "Rp 1.500.000",
      currentPrice: "Rp 1.000.000",
      discount: "25%"
    }
  },

  "networking": {
    id: "networking",
    title: "Networking & Mikrotik Administration",
    badge: "HIGH DEMAND",
    badgeIcon: "network-wired",
    badgeColor: "#10b981",
    description: "Master jaringan komputer, konfigurasi Mikrotik, dan manajemen infrastruktur IT. Persiapan untuk sertifikasi MTCNA.",
    duration: "8 Pertemuan",
    level: "Pemula - Advanced",
    alumni: "150+",
    rating: "4.7/5",
    projectCount: 3,
    
    learningPoints: [
      "Networking Fundamentals",
      "TCP/IP & OSI Model",
      "Router & Switch Configuration",
      "Mikrotik RouterOS",
      "Network Security",
      "Wireless Networks",
      "Firewall Configuration",
      "Network Troubleshooting"
    ],
    
    aboutProgram: {
      intro: "Program 8 pertemuan yang komprehensif untuk menguasai administrasi jaringan dan Mikrotik. Cocok untuk IT support, network engineer, atau yang ingin membangun career di bidang networking.",
      industry: "Network administrator dan Mikrotik specialist sangat dicari oleh ISP, perusahaan IT, dan berbagai industri yang membutuhkan infrastruktur jaringan yang handal.",
      whyChoose: [
        "Hands-on practice dengan real equipment",
        "Persiapan sertifikasi Mikrotik MTCNA",
        "Lab praktikum lengkap",
        "Study case dari real network problems",
        "Job opportunity di ISP dan IT companies"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Networking Basics",
        duration: "2 Minggu",
        lessons: "12",
        topics: [
          "Network Fundamentals",
          "TCP/IP Protocol Suite",
          "IP Addressing & Subnetting",
          "Network Devices Overview",
          "Lab: Basic Network Setup"
        ]
      },
      {
        title: "Module 2: Mikrotik Configuration",
        duration: "3 Minggu",
        lessons: "18",
        topics: [
          "Mikrotik RouterOS Introduction",
          "Winbox & Terminal Usage",
          "Routing Configuration",
          "NAT & Firewall",
          "Lab: Hotspot Setup"
        ]
      },
      {
        title: "Module 3: Advanced Features",
        duration: "2 Minggu",
        lessons: "15",
        topics: [
          "VPN Implementation",
          "Quality of Service (QoS)",
          "Bandwidth Management",
          "Wireless Configuration",
          "Lab: Multi-WAN Setup"
        ]
      },
      {
        title: "Module 4: Security & Troubleshooting",
        duration: "1 Minggu",
        lessons: "10",
        topics: [
          "Network Security Best Practices",
          "Monitoring & Logging",
          "Troubleshooting Techniques",
          "MTCNA Exam Preparation",
          "Final Project: Complete Network Design"
        ]
      }
    ],
    
    skills: [
      "Networking", "Mikrotik RouterOS", "TCP/IP", "Firewall",
      "VPN", "QoS", "Wireless", "Network Security",
      "Troubleshooting", "Routing", "Switching"
    ],
    
    instructor: {
      name: "Andi Pratama",
      role: "Network Engineer & MTCRE",
      avatar: "AP",
      bio: "12+ tahun pengalaman sebagai network engineer. Certified Mikrotik Trainer dan telah menangani network infrastructure untuk berbagai perusahaan skala enterprise."
    },
    
    pricing: {
      originalPrice: "Rp 1.500.000",
      currentPrice: "Rp 1.000.000",
      discount: "25%"
    }
  },

  "graphic-design": {
    id: "graphic-design",
    title: "Desain Grafis & Konten Digital",
    badge: "CREATIVE",
    badgeIcon: "paint-brush",
    badgeColor: "#f59e0b",
    description: "Kuasai CorelDRAW dan Canva untuk kebutuhan branding, desain konten sosial media, dan material marketing yang menarik.",
    duration: "16 Pertemuan",
    level: "Pemula - Intermediate",
    alumni: "220+",
    rating: "4.8/5",
    projectCount: 8,
    
    learningPoints: [
      "CorelDRAW Mastery",
      "Canva Pro Techniques",
      "Logo Design",
      "Social Media Content",
      "Brand Identity",
      "Typography",
      "Color Theory",
      "Print Design"
    ],
    
    aboutProgram: {
      intro: "Program 16 pertemuan untuk menguasai tools desain grafis yang paling banyak digunakan dalam industri kreatif. Fokus pada practical skills untuk kebutuhan bisnis dan personal branding.",
      industry: "Graphic designer dan content creator adalah profesi yang sangat fleksibel - bisa bekerja sebagai freelancer, in-house designer, atau membangun agency sendiri.",
      whyChoose: [
        "8+ desain portfolio siap pakai",
        "Template library senilai 5 juta rupiah",
        "Mentor dari praktisi agency kreatif",
        "Tips & trick untuk mendapat client",
        "Support untuk memulai freelance career"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Design Basics",
        duration: "1 Minggu",
        lessons: "8",
        topics: [
          "Design Principles",
          "Color Theory",
          "Typography Fundamentals",
          "Layout & Composition",
          "Project: Business Card Design"
        ]
      },
      {
        title: "Module 2: CorelDRAW Mastery",
        duration: "2 Minggu",
        lessons: "14",
        topics: [
          "CorelDRAW Interface & Tools",
          "Vector Graphics Creation",
          "Logo Design Process",
          "Brochure & Flyer Design",
          "Project: Complete Brand Identity"
        ]
      },
      {
        title: "Module 3: Canva for Social Media",
        duration: "2 Minggu",
        lessons: "12",
        topics: [
          "Canva Pro Features",
          "Instagram Content Design",
          "Facebook Ads Creative",
          "Presentation Design",
          "Project: 30 Days Content Calendar"
        ]
      },
      {
        title: "Module 4: Portfolio & Business",
        duration: "1 Minggu",
        lessons: "8",
        topics: [
          "Building Design Portfolio",
          "Pricing Your Services",
          "Client Communication",
          "Freelancing Platforms",
          "Final Project: Client Project Simulation"
        ]
      }
    ],
    
    skills: [
      "CorelDRAW", "Canva Pro", "Logo Design", "Branding",
      "Social Media Design", "Typography", "Color Theory",
      "Print Design", "Digital Marketing", "Adobe Photoshop"
    ],
    
    instructor: {
      name: "Diana Kusuma",
      role: "Creative Director & Brand Designer",
      avatar: "DK",
      bio: "9+ tahun pengalaman sebagai graphic designer dan telah menangani project branding untuk 100+ brand lokal dan nasional. Founder creative agency 'Pixel Perfect Studio'."
    },
    
    pricing: {
      originalPrice: "Rp 2.500.000",
      currentPrice: "Rp 2.000.000",
      discount: "25%"
    }
  },

  "office-admin": {
    id: "office-admin",
    title: "Digital Office Administration",
    badge: "ESSENTIAL",
    badgeIcon: "briefcase",
    badgeColor: "#06b6d4",
    description: "Google Workspace (Docs, Sheets, Form, Drive) dan Microsoft Office untuk produktivitas kerja maksimal. Perfect untuk admin dan office worker.",
    duration: "16 Pertemuan",
    level: "Pemula - Intermediate",
    alumni: "300+",
    rating: "4.6/5",
    projectCount: 5,
    
    learningPoints: [
      "Google Workspace Suite",
      "Microsoft Office 365",
      "Excel Advanced Functions",
      "Google Sheets Automation",
      "Document Management",
      "Professional Email",
      "Data Analysis Basics",
      "Presentation Skills"
    ],
    
    aboutProgram: {
      intro: "Program 16 pertemuan yang praktis dan langsung applicable untuk meningkatkan produktivitas kerja Anda. Cocok untuk staff admin, secretary, atau siapa saja yang bekerja dengan dokumen dan data.",
      industry: "Skill office administration yang solid adalah foundation penting di berbagai industri. Program ini akan membuat Anda 10x lebih produktif dalam pekerjaan sehari-hari.",
      whyChoose: [
        "Materi praktis langsung bisa diterapkan",
        "Template siap pakai untuk berbagai kebutuhan",
        "Tips productivity hacks dari expert",
        "Case study real office scenarios",
        "Sertifikat untuk boost CV Anda"
      ]
    },
    
    curriculum: [
      {
        title: "Module 1: Google Workspace Basics",
        duration: "1 Minggu",
        lessons: "10",
        topics: [
          "Google Docs Professional Documents",
          "Google Sheets Fundamentals",
          "Google Slides Presentations",
          "Google Drive Organization",
          "Project: Meeting Minutes Template"
        ]
      },
      {
        title: "Module 2: Advanced Spreadsheet",
        duration: "1 Minggu",
        lessons: "12",
        topics: [
          "Excel/Sheets Functions & Formulas",
          "Data Validation & Conditional Formatting",
          "Pivot Tables & Charts",
          "Basic Macros & Automation",
          "Project: Sales Report Dashboard"
        ]
      },
      {
        title: "Module 3: Document & Data Management",
        duration: "1 Minggu",
        lessons: "10",
        topics: [
          "Professional Email Writing",
          "Document Templates",
          "File Organization Systems",
          "Collaborative Tools",
          "Project: Office SOP Documentation"
        ]
      },
      {
        title: "Module 4: Presentation & Reporting",
        duration: "1 Minggu",
        lessons: "8",
        topics: [
          "PowerPoint/Slides Design",
          "Data Visualization",
          "Business Reporting",
          "Productivity Best Practices",
          "Final Project: Monthly Report Presentation"
        ]
      }
    ],
    
    skills: [
      "Google Docs", "Google Sheets", "Google Slides", "Microsoft Excel",
      "Microsoft Word", "PowerPoint", "Data Entry", "Data Analysis",
      "Email Management", "File Organization", "Productivity Tools"
    ],
    
    instructor: {
      name: "Rini Handayani",
      role: "Office Management Trainer",
      avatar: "RH",
      bio: "15+ tahun pengalaman sebagai executive secretary dan office manager di perusahaan multinasional. Expert dalam office productivity dan digital tools."
    },
    
    pricing: {
      originalPrice: "Rp 2.000.000",
      currentPrice: "Rp 1.500.000",
      discount: "25%"
    }
  },

"frontend-web-dev": {
  id: "frontend-web-dev",
  title: "Frontend Web Development (React.js)",
  badge: "POPULAR",
  badgeIcon: "code",
  badgeColor: "#22c55e",
  description: "Pelatihan frontend berbasis project menggunakan React.js untuk membangun Website UMKM modern dengan pendekatan Single Page Application (SPA).",
  duration: "8 Pertemuan",
  level: "Pemula - Menengah",
  alumni: "250+",
  rating: "4.7/5",
  projectCount: 1,

  learningPoints: [
    "Konsep Web Modern & SPA",
    "Setup React dengan Vite",
    "JSX & Functional Component",
    "Props & Reusable Component",
    "State & Interaksi UI",
    "Styling & Responsive Design",
    "Routing SPA",
    "Fetch Data & API Integration",
    "Form & Validasi Input",
    "Build & Deployment Website"
  ],

  aboutProgram: {
    intro: "Program pelatihan Frontend Web Development (React.js) menggunakan pendekatan Project-Based Learning, di mana setiap pertemuan menghasilkan fitur nyata yang terintegrasi dalam satu Website UMKM.",
    industry: "Peserta dilatih menggunakan React.js dan workflow Git & GitHub sebagai standar industri untuk membangun aplikasi frontend modern berbasis SPA.",
    whyChoose: [
      "Belajar melalui proyek Website UMKM nyata",
      "Setiap pertemuan fokus menghasilkan fitur",
      "Menggunakan Git & GitHub workflow",
      "Live coding dan praktik langsung",
      "Cocok untuk pemula hingga menengah"
    ]
  },

  curriculum: [
    {
      title: "Module 1: Setup & Dasar React",
      duration: "2 Pertemuan",
      lessons: "8",
      topics: [
        "Konsep Web Modern & SPA",
        "Instal Node.js, Vite, React",
        "Struktur Folder React",
        "Git Init & GitHub",
        "Project: Initial React UMKM Setup"
      ]
    },
    {
      title: "Module 2: JSX, Component & State",
      duration: "2 Pertemuan",
      lessons: "8",
      topics: [
        "JSX Syntax",
        "Functional Component",
        "Props & Reusable Component",
        "useState & Event Handling",
        "Project: Layout & UI Interaction"
      ]
    },
    {
      title: "Module 3: Styling, Routing & API",
      duration: "2 Pertemuan",
      lessons: "8",
      topics: [
        "CSS Module / Tailwind",
        "Responsive Layout",
        "React Router",
        "Fetch Data & useEffect",
        "Project: Dynamic Product Page"
      ]
    },
    {
      title: "Module 4: Form, Finalisasi & Deployment",
      duration: "2 Pertemuan",
      lessons: "8",
      topics: [
        "Controlled Form",
        "Validasi Input",
        "LocalStorage",
        "Build Production",
        "Deploy ke Vercel / Netlify"
      ]
    }
  ],

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "SPA",
    "Responsive Design",
    "Git",
    "Frontend UI Development"
  ],

  instructor: {
    name: "Muh. Amin Hidayat",
    role: "Frontend Web Developer",
    avatar: "MA",
    bio: "Frontend Web Developer dengan pengalaman membangun aplikasi berbasis React.js serta aktif dalam pengembangan project edukasi dan komunitas."
  },

  pricing: {
    originalPrice: "Rp 1.500.000",
    currentPrice: "Rp 1.000.000",
    discount: "25%"
  }
},
"backend-web-dev": {
  id: "backend-web-dev",
  title: "Backend Web Development with Node.js",
  badge: "CORE SKILL",
  badgeIcon: "server",
  badgeColor: "#f59e0b",
  description: "Kuasai logika server, pengelolaan database, dan pembuatan REST API menggunakan Node.js untuk aplikasi web yang scalable dan siap produksi.",
  duration: "8 Pertemuan",
  level: "Pemula - Intermediate",
  alumni: "220+",
  rating: "4.8/5",
  projectCount: 3,

  learningPoints: [
    "Backend Web Fundamentals",
    "Node.js & NPM",
    "Express.js Framework",
    "RESTful API Design",
    "Database Design (SQL & NoSQL)",
    "Authentication & Authorization",
    "API Security & Best Practice",
    "Backend Deployment"
  ],

  aboutProgram: {
    intro: "Program intensif 8 pertemuan untuk mempelajari backend web development menggunakan Node.js. Cocok untuk kamu yang ingin membangun sistem backend yang kuat, aman, dan scalable.",
    industry: "Backend Developer adalah tulang punggung aplikasi modern. Node.js banyak digunakan oleh startup dan perusahaan besar karena performanya yang tinggi dan ekosistem yang luas.",
    whyChoose: [
      "Build 3+ backend project siap portfolio",
      "Belajar arsitektur backend modern",
      "Mentor berpengalaman di pengembangan sistem",
      "Studi kasus aplikasi nyata",
      "Cocok untuk Frontend Dev yang ingin fullstack"
    ]
  },

  curriculum: [
    {
      title: "Module 1: Backend & Node.js Fundamentals",
      duration: "2 Pertemuan",
      lessons: "10",
      topics: [
        "Intro Backend Development",
        "Node.js Runtime & Event Loop",
        "NPM & Package Management",
        "Express.js Basics",
        "Project: Simple REST API"
      ]
    },
    {
      title: "Module 2: Database & CRUD API",
      duration: "2 Pertemuan",
      lessons: "12",
      topics: [
        "Database Concept & Design",
        "MySQL / PostgreSQL Basics",
        "MongoDB Fundamentals",
        "CRUD API Implementation",
        "Project: API with Database"
      ]
    },
    {
      title: "Module 3: Authentication & Security",
      duration: "2 Pertemuan",
      lessons: "12",
      topics: [
        "JWT Authentication",
        "User Registration & Login",
        "Password Hashing",
        "Role & Authorization",
        "Project: Auth API System"
      ]
    },
    {
      title: "Module 4: Deployment & Best Practice",
      duration: "2 Pertemuan",
      lessons: "10",
      topics: [
        "Environment Variables",
        "API Documentation (Postman / Swagger)",
        "Error Handling & Logging",
        "Deploy Backend (Railway / VPS)",
        "Final Project: Backend Service Production-Ready"
      ]
    }
  ],

  skills: [
    "Node.js", "Express.js", "REST API",
    "MySQL", "PostgreSQL", "MongoDB",
    "JWT", "Git", "API Security"
  ],

  instructor: {
    name: "Muh. Alif Anhar",
    role: "Backend Web Developer",
    avatar: "MA",
    bio: "Backend Developer dengan pengalaman membangun sistem web berbasis Node.js dan Laravel, fokus pada API, database design, dan arsitektur aplikasi yang scalable."
  },

  pricing: {
    originalPrice: "Rp 1.500.000",
    currentPrice: "Rp 1.000.000",
    discount: "25%"
  }
},

"wordpress-web-dev": {
  id: "wordpress-web-dev",
  title: "WordPress Web Development",
  badge: "NO CODE",
  badgeIcon: "wordpress",
  badgeColor: "#2563eb",
  description: "Membuat website profesional dengan WordPress tanpa coding rumit. Fokus pada kustomisasi tema, plugin, keamanan, dan optimasi SEO.",
  duration: "8 Pertemuan",
  level: "Pemula - Intermediate",
  alumni: "300+",
  rating: "4.9/5",
  projectCount: 4,

  learningPoints: [
    "WordPress Fundamentals",
    "Domain & Hosting Setup",
    "Theme Installation & Customization",
    "Plugin Management",
    "Page Builder (Elementor)",
    "SEO Optimization",
    "Website Security & Backup",
    "Website Deployment"
  ],

  aboutProgram: {
    intro: "Program intensif 8 pertemuan untuk membangun website profesional menggunakan WordPress. Cocok untuk pemula, UMKM, freelancer, dan content creator.",
    industry: "WordPress digunakan oleh lebih dari 40% website di dunia. Sangat diminati untuk pembuatan company profile, blog, landing page, dan website bisnis.",
    whyChoose: [
      "Build 4 website siap pakai",
      "Tanpa coding rumit (no-code / low-code)",
      "Cocok untuk UMKM & freelancer",
      "Mentor praktisi web profesional",
      "Fokus ke kebutuhan industri & klien"
    ]
  },

  curriculum: [
    {
      title: "Module 1: WordPress & Hosting Basics",
      duration: "2 Pertemuan",
      lessons: "10",
      topics: [
        "Pengenalan WordPress",
        "Domain & Hosting",
        "Instalasi WordPress",
        "Dashboard & Struktur WordPress",
        "Project: Blog Personal"
      ]
    },
    {
      title: "Module 2: Theme & Page Builder",
      duration: "2 Pertemuan",
      lessons: "12",
      topics: [
        "Theme Gratis & Premium",
        "Theme Customization",
        "Elementor Basics",
        "Responsive Layout",
        "Project: Company Profile Website"
      ]
    },
    {
      title: "Module 3: Plugin, SEO & Security",
      duration: "2 Pertemuan",
      lessons: "12",
      topics: [
        "Plugin Wajib WordPress",
        "SEO dengan Yoast / Rank Math",
        "Optimasi Kecepatan Website",
        "Security & Backup",
        "Project: Landing Page Optimized SEO"
      ]
    },
    {
      title: "Module 4: Monetization & Deployment",
      duration: "2 Pertemuan",
      lessons: "10",
      topics: [
        "Contact Form & Integrasi WhatsApp",
        "E-Commerce dengan WooCommerce",
        "Maintenance Website",
        "Website Migration",
        "Final Project: Website Bisnis Profesional"
      ]
    }
  ],

  skills: [
    "WordPress", "Elementor", "WooCommerce",
    "SEO", "Website Security",
    "Web Hosting", "UI Website",
    "Website Optimization"
  ],

  instructor: {
    name: "Muh. Alif Anhar",
    role: "WordPress Developer",
    avatar: "MA",
    bio: "Berpengalaman membangun website WordPress untuk UMKM, organisasi, dan bisnis. Fokus pada website cepat, aman, SEO-friendly, dan siap digunakan klien."
  },

  pricing: {
    originalPrice: "Rp 2.000.000",
    currentPrice: "Rp 1.500.000",
    discount: "25%"
  }
},

};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = coursesData;
}