import { useEffect } from 'react';

export const useBodyEffects = (isOpen: boolean) => {
	useEffect(() => {
		const body = document.body;
		const mainContent =
			document.querySelector('main') ||
			document.querySelector('[data-main]') ||
			document.querySelector('#__next > div:first-child') ||
			(body.children[0] as HTMLElement);

		if (isOpen) {
			// Prevent body scroll
			body.style.overflow = 'hidden';

			// Blur main content
			if (mainContent && mainContent !== body) {
				mainContent.style.filter = 'blur(4px)';
				mainContent.style.pointerEvents = 'none';
				mainContent.style.transition = 'filter 0.3s ease-out';
			}
		} else {
			// Restore body scroll
			body.style.overflow = 'unset';

			// Remove blur from main content
			if (mainContent && mainContent !== body) {
				mainContent.style.filter = 'none';
				mainContent.style.pointerEvents = 'auto';
			}
		}

		// Cleanup function
		return () => {
			body.style.overflow = 'unset';
			if (mainContent && mainContent !== body) {
				mainContent.style.filter = 'none';
				mainContent.style.pointerEvents = 'auto';
			}
		};
	}, [isOpen]);
};
