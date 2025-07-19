import { Sidebar, SidebarClose } from 'lucide-react';

export const MenuHeader = ({ onClose }: { onClose: () => void }) => (
	<div className="flex items-center justify-between p-6 border-b border-gray-700/30">
		<div className="flex items-center space-x-3">
			<div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
				<Sidebar className="h-4 w-4 text-white" />
			</div>
			<h3 className="text-xl font-semibold text-white">Menu</h3>
		</div>
		<button
			onClick={onClose}
			className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
			aria-label="Close menu"
		>
			<SidebarClose className="h-5 w-5" />
		</button>
	</div>
);
