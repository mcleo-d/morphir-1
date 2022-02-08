import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
	title: string
	image?: string
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: 'What is it?',
		description: (
			<>
				A set of tools for integrating technologies. Morphir is composed of a library of tools that facilitate the
				digitisation of business logic into multiple different languages & platforms. The Morphir framework is unique
				too in that facilities elements of automation and conversion that were previously unavailable in the field of
				finance-tech.
			</>
		),
	},
	{
		title: 'Why is it important?',
		description: (
			<>
				Makes business logic portable. Business logic digitised provides distinct advantages: capacity for movement
				across departments and fields & the ability to be converted to new languages and applications.
			</>
		),
	},
	{
		title: 'How does it work?',
		description: (
			<>
				Defines a standard format for storing and sharing business logic. A clear set of standards and format is
				in-place from the input/output, allowing for coherent structure.
			</>
		),
	},
]

function Feature({ title, description, ...props }: FeatureItem) {
	return (
		<div className={clsx('col col--12')}>
			{props?.image && (
				<div className='text--center'>
					<img className={styles.featureSvg} alt={title} src={useBaseUrl(props.image)} />
				</div>
			)}
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
