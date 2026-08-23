// ================================
// PERSONAL DATA CONFIGURATION
// ================================
// Update this file with your information.
// This makes it easy to update your data without editing HTML directly.

const personalData = {
    // Basic Information
    fullName: "Prigel Ismaila Manahseta",
    nim: "[INSERT NIM]",
    program: "Artificial Intelligence",
    university: "IPB University",
    cohort: "62",
    group: "Ruby",
    
    // Birth & Location
    birthPlace: "[INSERT PLACE]",
    birthDate: "[INSERT DATE]",
    hometown: "[INSERT ADDRESS]",
    currentAddress: "[INSERT CURRENT ADDRESS]",
    
    // Personal
    hobbies: "[INSERT HOBBIES OR INTERESTS]",
    expectations: "[INSERT EXPECTATION]",
    
    // Contact
    email: "prigelismaila@apps.ipb.ac.id",
    linkedin: "https://www.linkedin.com/in/prigel-manahseta-7399bb37a",
    github: "", // Add if you have one
    
    // Languages
    languages: ["Indonesia", "English"],
    
    // Hero Section
    tagline: "Building with AI. Learning how to build it better.",
    introduction: "I am an Artificial Intelligence undergraduate at IPB University interested in Machine Learning, Natural Language Processing, Generative AI, RAG, and AI-powered automation.",
    
    // CV Profile
    profileSummary: "Artificial Intelligence undergraduate at IPB University with hands-on experience developing AI-powered applications using Langflow, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs). Passionate about building practical AI solutions through Machine Learning, Natural Language Processing, and Generative AI while continuously expanding technical expertise through real-world projects.",
    
    // Education
    education: {
        degree: "Bachelor's Degree in Artificial Intelligence",
        institution: "IPB University",
        startDate: "Aug 2025",
        endDate: "Present"
    },
    
    // Skills
    skills: {
        programming: ["Python", "C"],
        ai: [
            "Machine Learning",
            "NLP",
            "Generative AI",
            "LLMs",
            "RAG",
            "Prompt Engineering"
        ],
        tools: ["Langflow", "IBM watsonx.ai"]
    },
    
    // Projects
    projects: [
        {
            title: "AI Employee Onboarding Assistant",
            category: "AI · RAG · LLM · LANGFLOW",
            problem: "New employees often have repetitive questions about company policies, procedures, and resources. Manual responses are time-consuming and inconsistent.",
            solution: "A proof-of-concept onboarding assistant designed to answer simulated employee FAQs using a RAG pipeline and dummy HR documents. The system retrieves relevant context from documents and generates accurate, grounded responses.",
            technologies: [
                {
                    name: "Langflow",
                    description: "Visual workflow builder for RAG pipeline"
                },
                {
                    name: "Large Language Models",
                    description: "Response generation"
                },
                {
                    name: "RAG Pipeline",
                    description: "Document retrieval and context extraction"
                },
                {
                    name: "Custom Dataset",
                    description: "Simulated HR documents"
                }
            ],
            learnings: "Building this project taught me how to design effective RAG pipelines, handle document retrieval, ground LLM responses in specific contexts, and reduce hallucinations by enforcing strict context boundaries.",
            github: "", // Add your GitHub link
            demo: "", // Add demo link if available
            achievements: [
                "Developed a Proof-of-Concept (PoC) onboarding chatbot to automate responses for simulated employee FAQs by integrating Langflow and LLMs.",
                "Implemented a Retrieval-Augmented Generation (RAG) pipeline to accurately extract relevant context from a custom-built dataset of dummy HR documents.",
                "Ensured contextual accuracy and mitigated AI hallucinations by strictly grounding the chatbot's generated answers within the provided document pipeline."
            ]
        }
        // Add more projects here following the same structure
    ],
    
    // Experience
    experience: [
        {
            title: "Secretary and Treasurer of Health, Safety, and Environment Division",
            organization: "Ilkomerz Sport and Art Competition, IPB University",
            startDate: "Mar 2026",
            endDate: "May 2026",
            responsibilities: [
                "Managed financial records and administrative documentation.",
                "Coordinated logistics and communication with committee members."
            ]
        }
        // Add more experience here
    ],
    
    // Certifications
    certifications: [
        {
            name: "IBM AI Literacy",
            issuer: "IBM",
            date: "July 2026"
        },
        {
            name: "IBM Artificial Intelligence Fundamentals",
            issuer: "IBM",
            date: "July 2026"
        },
        {
            name: "IBM Build an AI Agent",
            issuer: "IBM",
            date: "July 2026"
        }
        // Add more certifications here
    ],
    
    // Journey Stages
    journey: [
        {
            icon: "book",
            title: "Student",
            description: "Learning the foundations of Artificial Intelligence."
        },
        {
            icon: "search",
            title: "Experimenter",
            description: "Exploring AI tools, LLMs, NLP, and Generative AI."
        },
        {
            icon: "code",
            title: "Builder",
            description: "Creating practical AI applications and automation systems."
        },
        {
            icon: "target",
            title: "Future AI Engineer",
            description: "Continuously developing technical and problem-solving skills."
        }
    ]
};

// ================================
// USAGE INSTRUCTIONS
// ================================
/*
1. Fill in all the [INSERT ...] placeholders above with your actual information
2. Add your GitHub links to projects
3. Add more projects, experience, or certifications as needed
4. This file is ready to use - just update the values!

Note: This is a JavaScript data file. To actually use this data dynamically,
you would need to either:
- Manually copy the data into index.html (recommended for simplicity)
- Or modify index.html to load and use this data with JavaScript

For now, this serves as a central place to organize your information
before manually updating the HTML file.
*/
