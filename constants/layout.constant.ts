import { MenuProps } from '../types/layout.type';

export const navigation: MenuProps[] = [
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'Contact', href: '/contact' },
];

export const DRAG_THRESHOLD = 50;
export const MENU_WIDTH = 85; // percentage
export const MAX_WIDTH = 'max-w-sm';
