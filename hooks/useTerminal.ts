import { useState } from 'react';

type CommandOutput = string[] | string;
type CommandHandler = () => CommandOutput;

type CommandMap = {
	[key: string]: CommandHandler;
};

export function useTerminal() {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState([
		{ type: 'output', text: 'Welcome to Shadowctrl Terminal v1.0' },
		{ type: 'output', text: 'Type "help" to see available commands' },
	]);
	const [currentPath, setCurrentPath] = useState('~/portfolio');

	const commands: CommandMap = {
		help: () => [
			'Available commands:',
			'  about     - Learn about me',
			'  skills    - View my technical skills',
			'  projects  - See recent projects',
			'  contact   - Get contact information',
			'  clear     - Clear terminal',
			'  whoami    - Display current user',
			'  ls        - List directory contents',
		],
		about: () => [
			'Shadowctrl - Full Stack Developer & Founder',
			'Leading Asynx Private Limited',
			'I Help business launch fast, conversion-optimized websites and apps, end-to-end design to deployment',
			'Top-rated freelancer on Upwork',
		],
		skills: () => [
			'Frontend: React, Next.js, TypeScript, Tailwind CSS',
			'Backend: Node.js, Express, PostgreSQL, MongoDB',
			'Cloud: AWS, Vercel, Docker',
			'Tools: Git, VS Code, Figma',
		],
		projects: () => [
			'🚀 Asynx.in - Company website & platform',
			'💼 50+ client projects delivered',
			'🏆 100% client satisfaction rate',
			'📱 Mobile & web applications',
		],
		contact: () => [
			'Email: Available on request',
			'LinkedIn: linkedin.com/in/shadowctrl',
			'GitHub: github.com/shadowctrl',
			'Company: asynx.in',
			'Instagram: instagram.com/_.shadowctrl._',
		],
		whoami: () => ['shadowctrl'],
		ls: () => ['projects/', 'skills/', 'contact/', 'about.md'],
		clear: () => 'CLEAR',
	};

	const executeCommand = (cmd: string) => {
		const command = cmd.toLowerCase().trim();
		let newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

		if (command === 'clear') {
			setHistory([]);
			return;
		}

		if (command in commands) {
			const output = commands[command]();
			if (Array.isArray(output)) {
				newHistory = [
					...newHistory,
					...output.map((line) => ({ type: 'output', text: line })),
				];
			} else {
				newHistory.push({ type: 'output', text: output });
			}
		} else if (command) {
			newHistory.push({ type: 'error', text: `Command not found: ${command}` });
			newHistory.push({
				type: 'output',
				text: 'Type "help" for available commands',
			});
		}

		setHistory(newHistory);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			executeCommand(input);
			setInput('');
		}
	};

	return {
		input,
		setInput,
		history,
		currentPath,
		commands,
		executeCommand,
		handleSubmit,
	};
}
