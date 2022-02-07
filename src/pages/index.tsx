import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()

	return (
		<header
			className={clsx('hero hero--primary', styles.heroBanner)}
			style={{ backgroundImage: `url(img/header.png)` }}
		>
			<div className='container'>
				<h1 className='hero__title'>{siteConfig.title}</h1>
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
				{/* <div className={styles.buttons}>
					<Link className='button button--secondary button--lg' to='/docs/intro'>
						Docusaurus Tutorial - 5min ⏱️
					</Link>
				</div> */}
			</div>
		</header>
	)
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext()

	return (
		<Layout description={'Morhir Home Page'}>
			<HomepageHeader />
			<main>{/* <HomepageFeatures /> */}</main>
		</Layout>
	)
}
