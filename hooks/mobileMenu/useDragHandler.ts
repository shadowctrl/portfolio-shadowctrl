import { useCallback, useEffect, useState } from 'react';
import { DRAG_THRESHOLD } from '../../constants/layout.constant';

export const useDragHandler = (isOpen: boolean, onClose: () => void) => {
	const [isDragging, setIsDragging] = useState(false);
	const [dragStartX, setDragStartX] = useState(0);
	const [translateX, setTranslateX] = useState(0);

	const handleDragStart = useCallback((clientX: number) => {
		setIsDragging(true);
		setDragStartX(clientX);
	}, []);

	const handleDragMove = useCallback(
		(clientX: number) => {
			if (!isDragging) return;
			const deltaX = clientX - dragStartX;
			const newTranslateX = Math.max(0, deltaX);
			setTranslateX(newTranslateX);
		},
		[isDragging, dragStartX],
	);

	const handleDragEnd = useCallback(() => {
		if (!isDragging) return;
		setIsDragging(false);

		if (translateX > DRAG_THRESHOLD) {
			onClose();
		}
		setTranslateX(0);
	}, [isDragging, translateX, onClose]);

	// Mouse events
	const handleMouseDown = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			handleDragStart(e.clientX);
		},
		[handleDragStart],
	);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			handleDragMove(e.clientX);
		},
		[handleDragMove],
	);

	const handleMouseUp = useCallback(() => {
		handleDragEnd();
	}, [handleDragEnd]);

	// Touch events
	const handleTouchStart = useCallback(
		(e: React.TouchEvent) => {
			handleDragStart(e.touches[0].clientX);
		},
		[handleDragStart],
	);

	const handleTouchMove = useCallback(
		(e: TouchEvent) => {
			e.preventDefault();
			handleDragMove(e.touches[0].clientX);
		},
		[handleDragMove],
	);

	const handleTouchEnd = useCallback(() => {
		handleDragEnd();
	}, [handleDragEnd]);

	// Event listeners
	useEffect(() => {
		if (!isDragging) return;

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('touchmove', handleTouchMove, { passive: false });
		document.addEventListener('touchend', handleTouchEnd);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleTouchEnd);
		};
	}, [
		isDragging,
		handleMouseMove,
		handleMouseUp,
		handleTouchMove,
		handleTouchEnd,
	]);

	return {
		isDragging,
		translateX,
		handleMouseDown,
		handleTouchStart,
		resetDrag: () => {
			setTranslateX(0);
			setIsDragging(false);
		},
	};
};
