import './home.css';
import './works/works.css';
import dynamic from 'next/dynamic';
import projects from './works/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import { MdFormatQuote } from 'react-icons/md';

const Skills = dynamic(() => import('../components/skills/skills'));
const Contact = dynamic(() => import('./contact/page'));

export const metadata = {
	title: 'Freelance Web Developer | Next.js Full Stack Developer - shadowctrl',
	description:
		'Professional Freelance Web Developer specializing in Next.js, React, and full stack development. I create custom websites, web applications and digital solutions with expertise in NestJs, Node.js, and MongoDB.',
	keywords:
		'freelance web developer, web developer freelancer, upwork web developer, freelance web developer website, full stack developer, next.js developer, shadowctrl, Vijayaraghavan N, web development services, chennai freelancer',
};

const Home = () => {
	return (
		<div>
			<div className="homeParent">
				<div className="homeMain1">
					<div className="homeIntro">
						<div className="flex flex-col gap-[2vh]">
							<h1>
								shadowctrl is a <span>next.js</span> and a{' '}
								<span>full-stack Developer</span>
							</h1>
							<p>
								Freelancing with a Personal Touch: Your Vision, My Passion for
								Development
							</p>
							<Link href="/contact" className="homeContact">
								Get Quote
							</Link>
						</div>
						<div className="homeQuote-parent">
							<MdFormatQuote className="homeFormatQuoteTop" />
							<div className="homeQuote">
								The Quieter You Become The More You Able To Hear
							</div>
							<MdFormatQuote className="homeFormatQuoteBottom" />
						</div>
					</div>
					<div className="homeImg">
						<Image
							src="/assets/anonymous.webp"
							alt="Anonymous"
							width={350}
							height={500}
							loading="eager"
						/>
						<p className="homePara">
							<span className="homeBox" />
							Freelancer
						</p>
					</div>
				</div>
				<div className="homeMain2">
					<div className="homeProjectPadding">
						<div className="homeHead">
							<span>#</span>
							Works
							<div className="homeDash"></div>
							<Link className="homeViewall" href={'/works'}>
								View all
								<span style={{ fontSize: '1vw' }}>
									<FaArrowCircleRight />
								</span>
							</Link>
						</div>
						<div className="worksProjectsRenderer">
							{projects.slice(0, 3).map((value) => (
								<div className="worksProjectContainer" key={value.title}>
									<div className="worksProjectImage">
										<Image
											src={value.image}
											alt="Projects"
											width={500}
											height={500}
										/>
									</div>
									<div className="worksProjectLang">{value.languages}</div>
									<div className="worksProjectTitle">{value.title}</div>
									<div className="worksProjectDes">{value.description}</div>
									<div className="worksProjectButtons">
										{value.live && (
											<button className="worksProjectLiveButton">
												<Link href={value.live} target="_blank">
													Live
												</Link>
											</button>
										)}
										{value.cached && (
											<button className="worksProjectCachedButton">
												<Link href={value.cached} target="_blank">
													Cached
												</Link>
											</button>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<Skills />
					<div className="homeHead">
						<span>#</span>
						About Me
						<div className="homeDash" />
					</div>
					<div className="homeContainer">
						<div className="homeBorder">
							<span>S</span>
							<span>H</span>
							<span>A</span>
							<span>D</span>
							<span>O</span>
							<span>W</span>
							<span>C</span>
							<span>T</span>
							<span>R</span>
							<span>L</span>
						</div>
						<div className="homeAbout">
							As a professional freelance web developer with over 4 years of
							experience, I specialize in creating custom websites and web
							applications using Next.js and Nest.js. I deliver complete web
							development solutions focusing on intuitive, high-performance user
							interfaces and scalable backends. My services include seamless
							integration of APIs, CMS platforms, and payment gateways. I'm
							proficient in using ORM's with PostgreSQL and MongoDB as
							databases, ensuring efficient data management for your web
							projects. I also handle SEO optimization and server deployments to
							maintain smooth application performance. For larger projects, I
							manage a self-hosted Kubernetes server, allowing for enhanced
							deployment control and scalability that meets your business needs.
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</div>
	);
};

export default Home;
