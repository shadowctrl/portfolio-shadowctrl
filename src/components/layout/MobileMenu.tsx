'use client';
import { Sidebar, SidebarClose } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { MAX_WIDTH, MENU_WIDTH } from '../../../constants/layout.constant';
import { useBodyEffects } from '../../../hooks/mobileMenu/useBodyEffects';
import { useDragHandler } from '../../../hooks/mobileMenu/useDragHandler';
import { useOutsideClick } from '../../../hooks/mobileMenu/useOutsideClick';
import { MenuProps } from '../../../types/layout.type';
import { MenuFooter } from '../Header/MenuFooter';
import { MenuHeader } from '../Header/MenuHeader';
import { NavigationLink } from '../Header/NavigationLink';

export default function MobileMenu({
	navigation,
}: {
	navigation: MenuProps[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const closeMenu = useCallback(() => {
		setIsOpen(false);
		resetDrag();
	}, []);

	const toggleMenu = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	// Custom hooks
	const {
		isDragging,
		translateX,
		handleMouseDown,
		handleTouchStart,
		resetDrag,
	} = useDragHandler(isOpen, closeMenu);

	useBodyEffects(isOpen);
	useOutsideClick(menuRef, isOpen, isDragging, closeMenu);

	// Memoized transform styles
	const transformStyle = {
		transform: isOpen ? `translateX(${translateX}px)` : 'translateX(100%)',
		transition: isDragging ? 'none' : 'transform 0.3s ease-out',
	};

	return (
		<div className="md:hidden">
			{/* Toggle Button */}
			<button
				onClick={toggleMenu}
				className="p-2 text-gray-300 hover:text-purple-400 transition-all duration-200"
				aria-label="Toggle menu"
				aria-expanded={isOpen}
			>
				{isOpen ? (
					<SidebarClose className="h-5 w-5" />
				) : (
					<Sidebar className="h-5 w-5" />
				)}
			</button>

			{/* Backdrop */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm transition-all duration-300 h-screen z-40"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}

			{/* Sidebar Menu */}
			<div
				ref={menuRef}
				className={`fixed h-[100dvh] top-0 right-0 w-[${MENU_WIDTH}%] ${MAX_WIDTH} z-50 transform transition-transform duration-300 ease-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
				style={transformStyle}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
				role="dialog"
				aria-modal="true"
				aria-labelledby="mobile-menu-title"
			>
				{/* Background with gradient and blur */}
				<div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-purple-900/95 backdrop-blur-3xl border-l border-gray-700/50" />

				{/* Content container */}
				<div className="relative z-20 flex flex-col h-full bg-transparent">
					<MenuHeader onClose={closeMenu} />

					{/* Navigation links */}
					<nav
						className="flex-1 px-6 py-8 space-y-2 bg-transparent"
						aria-label="Mobile navigation"
					>
						<div className="mb-6">
							<p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
								Navigation
							</p>
						</div>

						{navigation.map((item: MenuProps) => (
							<NavigationLink key={item.name} item={item} onClose={closeMenu} />
						))}
					</nav>

					<MenuFooter onClose={closeMenu} />
				</div>

				{/* Drag indicator */}
				<div
					className="absolute left-2 top-1/2 -translate-y-1/2 z-30"
					aria-hidden="true"
				>
					<div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full opacity-30" />
				</div>
			</div>
		</div>
	);
}
