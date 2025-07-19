import Link from 'next/link';

export const MenuFooter = ({ onClose }: { onClose: () => void }) => (
	<div className="p-6 border-t border-gray-700/30 bg-transparent">
		<Link
			href="/contact"
			className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:via-purple-800 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] group"
			onClick={onClose}
		>
			<span>Get Quote</span>
			<div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					/>
				</svg>
			</div>
		</Link>
		<div className="mt-4 text-center">
			<p className="text-xs text-gray-400">
				Swipe right or tap outside to close
			</p>
		</div>
	</div>
);
