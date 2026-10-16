import portraitImg from './assets/images/raja.jpg';
import bookCoverImg from './assets/images/book-cover.jpg';

export const profile = {
    name: 'Raja Narayanasamy',
    roles: 'Technology Business Leader · Entrepreneur · Author · Strategic Advisor',
    focus: 'AI · Edge AI · Physical AI · Intelligent Products · Technology Business',
    portrait: portraitImg,
    bookCover: bookCoverImg,
    email: 'raja@engencbss.com',
    linkedin: 'https://www.linkedin.com/in/rajanarayanasamy/',
    bookUrl: 'https://amzn.in/d/04mWjnnv',
    nemilinkUrl: 'https://nemilink.com/',
};

export const navigation = [
    ['story', 'My story'],
    ['ventures', 'What I build'],
    ['book', 'The book'],
    ['insights', 'Insights'],
    ['connect', 'Let’s connect'],
];

export const chapters = [
    {
        number: '01', label: 'The foundation', title: 'The Engineer',
        paragraphs: [
            'My early career gave me the foundation that continues to influence how I think today.',
            'I worked across technology and engineering environments where the challenge was not simply to build software or products, but to solve real problems within real business constraints.',
        ],
    },
    {
        number: '02', label: 'Building capability', title: 'The Builder',
        lead: 'I moved from building technology to building the teams that build technology.',
        paragraphs: [
            'At companies including Eastman Kodak, Honeywell Technology Solutions and Delphi Automotive Systems, I worked on building and scaling engineering capabilities and development teams.',
        ],
        timeline: ['Eastman Kodak', 'Honeywell', 'Delphi'],
        more: [
            'At Honeywell, I helped establish and ramp a brownfield development team for the sensing and control business. At Delphi Automotive Systems, I worked on ramping engineering capability for the Asia business.',
            'The challenge was no longer simply engineering. It was about people. It was about processes. It was about technology. And ultimately, it was about creating an organisation capable of delivering consistently.',
        ],
    },
    {
        number: '03', label: 'Giesecke+Devrient', title: 'Building from Zero',
        paragraphs: [
            'One of the most defining chapters of my corporate career came when I was involved in establishing a new R&D centre for Giesecke+Devrient in India.',
            'It was a greenfield initiative — building a capability from the ground up. The centre grew to more than 120 engineers within three years and developed product lines that contributed to the company’s global business.',
        ],
        milestone: true,
        quote: 'Building an organisation is itself an engineering problem.',
    },
    {
        number: '04', label: 'A new perspective', title: 'From Engineering to Business',
        lead: 'Technology alone does not create impact.',
        paragraphs: [
            'After years of working inside large organisations, I began looking at technology from a different perspective.',
            'I had seen companies struggle not because they lacked technology, but because they struggled with market entry, finding the right partners, building engineering capabilities, turning technology into products and connecting engineering with business strategy.',
            'That became the foundation for my entrepreneurial journey.',
        ],
    },
];

export const ventures = [
    { name: 'Engen CBS', initial: 'E', color: 'bg-sage', title: 'Technology business consulting and market entry', description: 'India market entry, GCC/ODC setup, Build-Operate-Transfer models, strategic partnerships and business development.' },
    { name: 'Clearcode Labs', initial: 'C', color: 'bg-lavender', title: 'Digital engineering and transformation', description: 'Complex distributed systems, cloud platforms, data-intensive applications, microservices and GenAI solutions.' },
    { name: 'Nemilink Technologies', initial: 'N', color: 'bg-peach', title: 'Intelligent products and Edge AI', description: 'Vision AI, Edge AI, AIoT, embedded systems, mechatronics and industrial technology.' },
    { name: 'Navoriy Learning Solutions', initial: 'N', color: 'bg-mist', title: 'Technology capability building', description: 'AI, data, cybersecurity, telecom, semiconductor and advanced technology skills.' },
];

export const bookTopics = [
    'Edge Computing', 'IoT Data Pipelines', 'AI/ML at the Edge',
    'Embedded Intelligence', 'Hybrid AI', 'LLMs + Edge AI',
    'Product Strategy', 'Intelligent Product Use Cases',
];

export const insights = [
    { title: 'Physical AI', description: 'How AI is moving from screens into machines and the physical world.', url: '' },
    { title: 'Edge AI', description: 'Why intelligence increasingly needs to move closer to where data is generated.', url: '' },
    { title: 'Intelligent Products', description: 'What changes when AI becomes part of the product architecture.', url: '' },
    { title: 'Technology Business', description: 'Lessons from building engineering organisations and technology businesses.', url: '' },
    { title: 'India & Global Technology', description: 'How India can move from technology services to global technology products.', url: '' },
];

export const opportunities = [
    {
        title: 'Technology Business Development',
        paragraphs: [
            'I work with technology companies that want to turn technical capability into business opportunity.',
            'Market entry · Strategic partnerships · Customer development · Technology positioning · Business development · GCC strategy',
        ],
        cta: 'Let’s talk business', href: '#connect',
    },
    {
        title: 'Advisory & Board Roles',
        paragraphs: [
            'My experience spans engineering, technology strategy, product development, GCCs, entrepreneurship and business building.',
            'I am open to contributing as a strategic advisor, technology advisor, advisory board member, mentor or independent director.',
            'Areas of interest: AI, Edge AI, Physical AI, intelligent products, industrial technology, deep tech and technology services.',
        ],
        cta: 'Discuss an advisory opportunity', href: '#connect',
    },
    {
        title: 'Intelligent Products',
        paragraphs: [
            'I believe the next generation of products will not simply be connected. They will be intelligent. They will sense their environment, understand what is happening, make decisions and, increasingly, act.',
        ],
        cta: 'Explore intelligent products', href: '#intelligent-products',
    },
    {
        title: 'Speaking & Industry Engagement',
        paragraphs: [
            'I enjoy sharing what I have learned — and learning from people who are building what comes next.',
            'Topics: Physical AI, Edge AI, intelligent products, AI & product engineering, GCCs, technology entrepreneurship and building technology businesses.',
        ],
        cta: 'Invite me to speak', href: '#connect',
    },
    {
        title: 'Mentoring & Startup Ecosystem',
        paragraphs: [
            'Technology entrepreneurs often need more than technology. They need perspective on product, technology, customers, business models, teams, partnerships and market entry.',
            'I enjoy working with founders and emerging technology companies where my experience can help accelerate the journey.',
        ],
    },
];

export const beliefs = [
    { title: 'Technology should solve a real problem.', description: 'Not every problem needs AI. But when AI is applied to the right problem, it can fundamentally change the economics and experience of a product.' },
    { title: 'Engineering and business cannot be separated.', description: 'Great technology without a business model remains an experiment. Great business strategy without engineering remains a presentation. The real opportunity lies at the intersection.' },
    { title: 'India can build global technology products.', description: 'The opportunity is not limited to delivering engineering services. India can create IP, products and technology companies that compete globally.' },
    { title: 'Intelligent products will change industries.', description: 'The next wave of AI will not happen only inside applications. It will happen in factories, vehicles, machines, devices, healthcare systems and infrastructure.' },
];