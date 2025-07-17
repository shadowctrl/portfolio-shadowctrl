import Image from 'next/image';
import Link from 'next/link';
import OnGoingWorks from './onGoingWorks';
import projects from './projects';
import './works.css';

export const metadata = {
	title: 'Portfolio Works | shadowctrl',
	description:
		'Explore my portfolio of web development projects built with React.js, Next.js, and other cutting-edge technologies.',
};

const Works = () => {
	return (
		<div className="worksParent">
			<div className="worksHead">
				<span>/</span>Works
			</div>

			<div className="worksChild">
				<span>#</span>Completed Projects
			</div>

			<div className="worksProjectMain">
				<div className="worksProjectsRenderer">
					{projects.map((value, index) => (
						<div className="worksProjectContainer" key={value.title}>
							<div className="worksProjectImage">
								<Image
									src={value.image}
									alt={value.title}
									width="500"
									height="500"
								/>
							</div>
							<div className="worksProjectLang">{value.languages}</div>
							<div className="worksProjectTitle">{value.title}</div>
							<div className="worksProjectDes">{value.description}</div>
							<div className="worksProjectButtons">
								{value.live ? (
									<Link
										href={value.live}
										target="_blank"
										className="worksProjectLiveButton"
									>
										Live
									</Link>
								) : (
									''
								)}

								{value.cached ? (
									<Link
										href={value.cached}
										target="_blank"
										className="worksProjectCachedButton"
									>
										Cached{' '}
									</Link>
								) : (
									''
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<OnGoingWorks />
		</div>
	);
};

export default Works;
