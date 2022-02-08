import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { Link } from '@docusaurus/router'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()

	return (
		<header
			className={clsx('hero hero--primary', styles.heroBanner)}
			style={{
				backgroundImage: `url(img/wide_header.png)`,
				backgroundColor: 'unset',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				height: '400px',
			}}
		>
			<div className='container'>
				<h1 className='hero__title'>{siteConfig.title}</h1>
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
			</div>
		</header>
	)
}

export default function Home(): JSX.Element {
	return (
		<Layout description={'Morhir Home Page'}>
			<HomepageHeader />
			<main>
				<div className={styles.buttons}>
					<div className='container text--center padding--lg'>
						<Link to={'docs/intro'}>
							Get To Know <code>Morphir</code>
						</Link>
					</div>
				</div>
			</main>
		</Layout>
	)
}
