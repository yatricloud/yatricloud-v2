// Content Generation API configurations
export const CONTENT_APIS = {
  openai: {
    name: 'OpenAI',
    features: ['Text Generation', 'Code Generation', 'Blog Writing'],
    endpoint: 'https://api.openai.com/v1',
    pricing: 'Pay per token',
    documentation: 'https://platform.openai.com/docs/api-reference'
  },
  anthropic: {
    name: 'Anthropic Claude',
    features: ['Long-form Content', 'Technical Writing', 'Analysis'],
    endpoint: 'https://api.anthropic.com/v1',
    pricing: 'Pay per token',
    documentation: 'https://docs.anthropic.com/claude/reference'
  },
  cohere: {
    name: 'Cohere',
    features: ['Text Generation', 'Content Summarization', 'Classification'],
    endpoint: 'https://api.cohere.ai/v1',
    pricing: 'Pay per request',
    documentation: 'https://docs.cohere.com/reference'
  },
  writesonic: {
    name: 'Writesonic',
    features: ['Blog Posts', 'Marketing Copy', 'Product Descriptions'],
    endpoint: 'https://api.writesonic.com/v2',
    pricing: 'Subscription based',
    documentation: 'https://docs.writesonic.com'
  },
  copyai: {
    name: 'Copy.ai',
    features: ['Marketing Content', 'Social Media Posts', 'Email Copy'],
    endpoint: 'https://api.copy.ai/v1',
    pricing: 'Subscription based',
    documentation: 'https://docs.copy.ai'
  },
  jasper: {
    name: 'Jasper',
    features: ['Long-form Content', 'Marketing Copy', 'SEO Content'],
    endpoint: 'https://api.jasper.ai/v1',
    pricing: 'Subscription based',
    documentation: 'https://developers.jasper.ai'
  },
  contentai: {
    name: 'Content.ai',
    features: ['SEO Content', 'Blog Posts', 'Product Descriptions'],
    endpoint: 'https://api.content.ai/v1',
    pricing: 'Credits based',
    documentation: 'https://docs.content.ai'
  },
  persado: {
    name: 'Persado',
    features: ['Marketing Language', 'Emotional Analysis', 'Campaign Copy'],
    endpoint: 'https://api.persado.com/v1',
    pricing: 'Enterprise pricing',
    documentation: 'https://developers.persado.com'
  },
  hypotenuse: {
    name: 'Hypotenuse AI',
    features: ['Product Descriptions', 'Blog Posts', 'Marketing Copy'],
    endpoint: 'https://api.hypotenuse.ai/v1',
    pricing: 'Pay per use',
    documentation: 'https://docs.hypotenuse.ai'
  },
  textcortex: {
    name: 'TextCortex',
    features: ['Blog Content', 'Product Copy', 'Social Media Posts'],
    endpoint: 'https://api.textcortex.com/v1',
    pricing: 'Credit based',
    documentation: 'https://docs.textcortex.com'
  }
} as const;