import { useEffect } from 'react';

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement>,
	isOpen: boolean,
	isDragging: boolean,
	onClose: () => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				isOpen &&
				!isDragging
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, isDragging, onClose, ref]);
};
