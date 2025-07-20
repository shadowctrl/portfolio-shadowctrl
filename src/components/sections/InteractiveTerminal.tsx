'use client';
import { Terminal } from 'lucide-react';
import { useTerminal } from '../../../hooks/useTerminal';

export function InteractiveTerminal() {
	const {
		input,
		setInput,
		history,
		currentPath,
		commands,
		executeCommand,
		handleSubmit,
	} = useTerminal();

	return (
		<div className="animate-fade-in-right">
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
				<div className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
					{/* Terminal Header */}
					<div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
						<div className="flex gap-2">
							<div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
							<div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
						</div>
						<div className="flex items-center ml-4 text-gray-400 text-sm">
							<Terminal className="w-4 h-4 mr-2" />
							{currentPath}
						</div>
						<div className="ml-auto">
							<div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
								<span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
								Interactive
							</div>
						</div>
					</div>

					{/* Terminal Content */}
					<div className="h-80 overflow-y-auto p-4 font-mono text-sm">
						{history.map((entry, index) => (
							<div
								key={index}
								className={`mb-1 ${
									entry.type === 'input'
										? 'text-white'
										: entry.type === 'error'
										? 'text-red-400'
										: 'text-gray-300'
								}`}
							>
								{entry.text}
							</div>
						))}

						{/* Input Line */}
						<form onSubmit={handleSubmit} className="flex items-center mt-2">
							<span className="text-green-400 mr-2">$</span>
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								className="flex-1 bg-transparent text-white outline-none"
								placeholder="Type a command... (try 'help')"
								autoFocus
							/>
						</form>
					</div>

					{/* Quick Commands */}
					<div className="border-t border-gray-700 p-3 bg-gray-800/30">
						<div className="text-xs text-gray-400 mb-2">Quick commands:</div>
						<div className="flex flex-wrap gap-2">
							{Object.keys(commands)
								.slice(0, 6)
								.map((cmd) => (
									<button
										key={cmd}
										onClick={() => executeCommand(cmd)}
										className="px-2 py-1 text-xs bg-gray-700/50 hover:bg-purple-600/30 text-gray-300 hover:text-white rounded transition-colors"
									>
										{cmd}
									</button>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
