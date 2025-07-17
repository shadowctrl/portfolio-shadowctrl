'use client';

import Image from 'next/image';
import Link from 'next/link';
import { onGoingProjects } from './projects';

const OnGoingWorks = () => {
	return (
		<div className="flex flex-col items-start">
			<div className="worksChild2">
				<span>#</span>Currently Working On
			</div>
			<div className="worksProjectsRenderer">
				{onGoingProjects.map((value) => (
					<div key={value.title} className="worksProjectContainer">
						<div className="worksProjectImage">
							<Image
								src={value.image}
								alt={value.title}
								width={500}
								height={500}
							/>
						</div>
						<div className="worksProjectLang">{value.languages}</div>
						<div className="worksProjectTitle">{value.title}</div>
						<div className="worksProjectDes">{value.description}</div>
						<div className="worksProjectButtons">
							{value.live && (
								<Link
									href={value.live}
									target="_blank"
									rel="noopener noreferrer"
									className="worksProjectLiveButton"
								>
									<p>Live</p>
								</Link>
							)}
							{value.progress && (
								<Link
									href={value.progress}
									target="_blank"
									rel="noopener noreferrer"
									className="worksProjectCachedButton"
								>
									Progress
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OnGoingWorks;
