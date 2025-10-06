export const defaultMeta = {
  titleTemplate: '%s | AMO AI',
  defaultTitle: 'AMO AI - Turn 3-Day Processes Into 3-Minute Solutions',
  description: 'AI-powered automation that transforms your business in weeks, not months. 90% automation, 300% ROI, proven results with 500+ projects delivered.',
  keywords: 'AI automation, artificial intelligence, business automation, digital transformation, AI consulting, process automation, machine learning, AI development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amoai.agency/',
    siteName: 'AMO AI',
    images: [
      {
        url: 'https://amoai.agency/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'AMO AI - AI Automation Specialists'
      }
    ]
  },
  twitter: {
    handle: '@amoai',
    site: '@amoai',
    cardType: 'summary_large_image'
  },
  canonical: 'https://amoai.agency'
};

export const generatePageMeta = (page: {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}) => ({
  title: page.title ? `${page.title} | AMO AI` : defaultMeta.defaultTitle,
  description: page.description || defaultMeta.description,
  canonical: page.canonical || defaultMeta.canonical,
  keywords: page.keywords || defaultMeta.keywords
});