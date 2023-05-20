import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  logo: <span><b>Guides</b> | <span style={{fontSize: '12px'}}>Emmanuel Martin.</span></span>,
  project: {
    link: 'https://github.com/emmanuel-martin/documentation/tree/main/pages',
  },
  nextLinks: true,
  prevLinks: true,
  docsRepositoryBase: 'https://github.com/emmanuel-martin/documentation/tree/main/pages',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Emmanuel Martin'
      }
    }else{
      return {
        titleTemplate: 'Guides - Emmanuel Martin'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://guide.emmanuel.codes' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Emmanuel Martin - Design Documentation'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Find documentation and resources for designing great apps.'}
        />
      </>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div>{title}</div>
        )
      }
      if (title === 'Branding') {
        return <> {title}</>
      }
      return <>{title}</>
    }
  },
  footer: {
    text: "A project by Emmanuel Martin",
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  }
}
