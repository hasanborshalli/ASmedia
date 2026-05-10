export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Client {
    id: number;
    name: string;
    logo: string;
    industry: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
}

export const services: Service[] = [
    {
        id: 1,
        title: "Social Media Content",
        description:
            "Platform-optimized content that captures attention and drives engagement across all social channels.",
        icon: "Image",
    },
    {
        id: 2,
        title: "Creative Production",
        description:
            "High-quality photo and video production that brings your brand's story to life with cinematic precision.",
        icon: "Film",
    },
    {
        id: 3,
        title: "Brand Identity",
        description:
            "Strategic brand development that defines your visual identity, voice, and market positioning.",
        icon: "Palette",
    },
    {
        id: 4,
        title: "Logo Creation",
        description:
            "Distinctive, memorable logos designed to represent your brand's essence and stand out in any market.",
        icon: "PenTool",
    },
    {
        id: 5,
        title: "Marketing & Strategy",
        description:
            "Data-driven marketing plans tailored to your goals, audience, and competitive landscape.",
        icon: "Target",
    },
    {
        id: 6,
        title: "Copywriting",
        description:
            "Persuasive, on-brand copy that connects with your audience and inspires meaningful action.",
        icon: "FileText",
    },
    {
        id: 7,
        title: "Advertising",
        description:
            "End-to-end ads management across platforms including TikTok, Meta, and Google to maximize your ROI.",
        icon: "Megaphone",
    },
    {
        id: 8,
        title: "Account Management",
        description:
            "Expert account management and platform oversight ensuring consistent brand presence and peak performance.",
        icon: "LayoutDashboard",
    },
    {
        id: 9,
        title: "Specialized Logistics",
        description:
            "Access to a curated network of professional models to elevate your visual campaigns and productions.",
        icon: "UserCheck",
    },
    {
        id: 10,
        title: "Consultation & Large Scale Media",
        description:
            "Strategic digital consultations, billboard campaigns, and full TV/cinematic ad production for large-scale impact.",
        icon: "Tv",
    },
    {
        id: 11,
        title: "Social Media Ads Specialist",
        description:
            "Specialized expertise in crafting and optimizing social media ad campaigns that convert audiences into customers.",
        icon: "TrendingUp",
    },
];

export const clients: Client[] = [
    {
        id: 1,
        name: "Tech Startup Co",
        logo: "🚀",
        industry: "Technology",
    },
    {
        id: 2,
        name: "Fashion Boutique",
        logo: "👗",
        industry: "Fashion",
    },
    {
        id: 3,
        name: "Fitness Revolution",
        logo: "💪",
        industry: "Health & Fitness",
    },
    {
        id: 4,
        name: "Restaurant Group",
        logo: "🍽️",
        industry: "Food & Beverage",
    },
    {
        id: 5,
        name: "Beauty Brand",
        logo: "✨",
        industry: "Beauty",
    },
    {
        id: 6,
        name: "Travel Agency",
        logo: "✈️",
        industry: "Travel",
    },
];

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Abou Saleh",
        role: "CEO",
        image: "/abouSaleh.jpeg",
    },
    {
        id: 2,
        name: "Hasan Borshalli",
        role: "CTO",
        image: "/hasanBorshalli.jpeg",
    },
    {
        id: 3,
        name: "Mohamad Keshli",
        role: "Head of Content",
        image: "/mhmdKeshli.jpeg",
    },
    {
        id: 4,
        name: "Ahmad Orfaly",
        role: "PR",
        image: "/ahmadOrfaly.jpeg",
    },
    {
        id: 5,
        name: "Hasan Orfaly",
        role: "Social Media Ads Specialist",
        image: "/hasanOrfaly.jpeg",
    },
    {
        id: 6,
        name: "Walid Taktak",
        role: "Content Creator",
        image: "/walidTaktak.jpeg",
    },
];
