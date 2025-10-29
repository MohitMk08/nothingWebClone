import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        'Products': ['Phone (3a)', 'Ear (3)', 'CMF Phone 1', 'CMF Buds Pro', 'All Products'],
        'Support': ['Help Center', 'Track Order', 'Returns', 'Warranty', 'Contact Us'],
        'Company': ['About Nothing', 'Careers', 'Press', 'Community', 'Investors'],
        'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Legal Notice']
    };

    const socialLinks = [
        { icon: Instagram, label: 'Instagram', href: '#' },
        { icon: Twitter, label: 'Twitter', href: '#' },
        { icon: Youtube, label: 'Youtube', href: '#' },
        { icon: Facebook, label: 'Facebook', href: '#' }
    ];

    return (
        <footer className="bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-gray-500 hover:text-white transition-colors duration-200" />
                                </a>
                            ))}
                        </div>

                        <div className="text-sm text-gray-500">
                            <p>© 2025 MK Technology Limited. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
