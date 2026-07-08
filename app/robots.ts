import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Amazonbot',
        ],
        allow: '/',
      },
    ],
    host: 'https://wouter.studio',
    sitemap: 'https://wouter.studio/sitemap.xml',
  }
}
