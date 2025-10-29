import phone3a from "../assets/nothing3a.webp"
import phone3 from "../assets/nothing-phone-3.webp"
import ear2 from "../assets/ear2.webp"
import ear3 from "../assets/ear3.webp"
import cmfPhone1 from "../assets/cmfPhone1.webp"
import cmfBuds1 from "../assets/cmfBudsPro.webp"




export const products = {

    phones: [
        {
            id: 1,
            name: 'Phone (3)',
            tagline: 'Pure instinct.',
            description: 'A phone with powerful performance, intelligent AI, and an iconic design.',
            price: '£349',
            image: phone3,
            features: ['6.77" AMOLED Display', '50MP Triple Camera', '5000mAh Battery']
        },
        {
            id: 2,
            name: 'Phone (3a)',
            tagline: 'Pro power. Pure design.',
            description: 'Enhanced performance with advanced AI capabilities.',
            price: '£449',
            image: phone3a,
            features: ['6.77" AMOLED Display', '50MP Triple Camera', '5500mAh Battery']
        }
    ],
    audio: [
        {
            id: 3,
            name: 'Ear (3)',
            tagline: 'Sound by nature.',
            description: 'Premium audio with adaptive ANC and all-day comfort.',
            price: '£149',
            image: ear3,
            features: ['Adaptive ANC', '40dB Noise Cancellation', '32-hour Battery']
        },
        {
            id: 4,
            name: 'Ear (2)',
            tagline: 'Innovation you can hear.',
            description: 'Crystal-clear sound with intelligent noise cancellation.',
            price: '£129',
            image: ear2,
            features: ['Hi-Res Audio', 'ANC', '36-hour Battery']
        }
    ],
    cmf: [
        {
            id: 5,
            name: 'CMF Phone 1',
            tagline: 'Smart choice. Bold design.',
            description: 'Essential features with nothing ordinary design.',
            price: '£199',
            image: cmfPhone1,
            features: ['6.67" Display', 'MediaTek Dimensity', 'Modular Design']
        },
        {
            id: 6,
            name: 'CMF Buds Pro',
            tagline: 'Premium sound. Smart price.',
            description: 'High-quality audio without compromise.',
            price: '£49',
            image: cmfBuds1,
            features: ['45dB ANC', 'Ultra Bass', '43-hour Battery']
        }
    ]
};

export const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Shop', path: '/shop' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' }
];
