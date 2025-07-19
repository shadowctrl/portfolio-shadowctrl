import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const TrustPilot: NextPage<Props> = ({}) => {
	return (
		<div
			className="trustpilot-widget"
			data-locale="en-US"
			data-template-id="56278e9abfbbba0bdcd568bc"
			data-businessunit-id="681f369886bcf0ed951ab39e"
			data-style-height="100%"
			data-style-width="100%"
		>
			<Link
				href="https://www.trustpilot.com/review/asynx.in"
				target="_blank"
				rel="noopener"
			>
				Trustpilot
			</Link>
		</div>
	);
};

export default TrustPilot;
