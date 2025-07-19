import Link from 'next/link';
import { MenuProps } from '../../../types/layout.type';

export const NavigationLink = ({
	item,
	onClose,
}: {
	item: MenuProps;
	onClose: () => void;
}) => (
	<Link
		key={item.name}
		href={item.href}
		className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-500/20 rounded-xl transition-all duration-200 group border border-transparent hover:border-purple-500/30"
		onClick={onClose}
	>
		<div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
		<span className="font-medium">{item.name}</span>
		<div className="ml-auto opacity-100 transition-opacity duration-200">
			<div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
				<span className="text-xs text-white">→</span>
			</div>
		</div>
	</Link>
);
