import { LLMManager } from '~/lib/modules/llm/manager';
import type { Template } from '~/types/template';

export const WORK_DIR_NAME = 'project';
export const WORK_DIR = `/home/${WORK_DIR_NAME}`;
export const MODIFICATIONS_TAG_NAME = 'qbuildr_file_modifications';
export const MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;
export const PROVIDER_REGEX = /\[Provider: (.*?)\]\n\n/;
export const DEFAULT_MODEL = 'claude-3-5-sonnet-latest';
export const PROMPT_COOKIE_KEY = 'cachedPrompt';

const llmManager = LLMManager.getInstance(import.meta.env);

export const PROVIDER_LIST = llmManager.getAllProviders();
export const DEFAULT_PROVIDER = llmManager.getDefaultProvider();

export const providerBaseUrlEnvKeys: Record<string, { baseUrlKey?: string; apiTokenKey?: string }> = {};
PROVIDER_LIST.forEach((provider) => {
  providerBaseUrlEnvKeys[provider.name] = {
    baseUrlKey: provider.config.baseUrlKey,
    apiTokenKey: provider.config.apiTokenKey,
  };
});

// starter Templates

export const STARTER_TEMPLATES: Template[] = [
  {
    name: 'qbuildr-astro-basic',
    label: 'Astro Basic',
    description: 'Lightweight Astro starter template for building fast static websites',
    githubRepo: 'thecodacus/qbuildr-astro-basic-template',
    tags: ['astro', 'blog', 'performance'],
    icon: 'i-qbuildr:astro',
  },
  {
    name: 'qbuildr-nextjs-shadcn',
    label: 'Next.js with shadcn/ui',
    description: 'Next.js starter fullstack template integrated with shadcn/ui components and styling system',
    githubRepo: 'thecodacus/qbuildr-nextjs-shadcn-template',
    tags: ['nextjs', 'react', 'typescript', 'shadcn', 'tailwind'],
    icon: 'i-qbuildr:nextjs',
  },
  {
    name: 'qbuildr-qwik-ts',
    label: 'Qwik TypeScript',
    description: 'Qwik framework starter with TypeScript for building resumable applications',
    githubRepo: 'thecodacus/qbuildr-qwik-ts-template',
    tags: ['qwik', 'typescript', 'performance', 'resumable'],
    icon: 'i-qbuildr:qwik',
  },
  {
    name: 'qbuildr-remix-ts',
    label: 'Remix TypeScript',
    description: 'Remix framework starter with TypeScript for full-stack web applications',
    githubRepo: 'thecodacus/qbuildr-remix-ts-template',
    tags: ['remix', 'typescript', 'fullstack', 'react'],
    icon: 'i-qbuildr:remix',
  },
  {
    name: 'qbuildr-slidev',
    label: 'Slidev Presentation',
    description: 'Slidev starter template for creating developer-friendly presentations using Markdown',
    githubRepo: 'thecodacus/qbuildr-slidev-template',
    tags: ['slidev', 'presentation', 'markdown'],
    icon: 'i-qbuildr:slidev',
  },
  {
    name: 'qbuildr-sveltekit',
    label: 'SvelteKit',
    description: 'SvelteKit starter template for building fast, efficient web applications',
    githubRepo: 'qbuildr-sveltekit-template',
    tags: ['svelte', 'sveltekit', 'typescript'],
    icon: 'i-qbuildr:svelte',
  },
  {
    name: 'vanilla-vite',
    label: 'Vanilla + Vite',
    description: 'Minimal Vite starter template for vanilla JavaScript projects',
    githubRepo: 'thecodacus/vanilla-vite-template',
    tags: ['vite', 'vanilla-js', 'minimal'],
    icon: 'i-qbuildr:vite',
  },
  {
    name: 'qbuildr-vite-react',
    label: 'React + Vite + typescript',
    description: 'React starter template powered by Vite for fast development experience',
    githubRepo: 'thecodacus/qbuildr-vite-react-ts-template',
    tags: ['react', 'vite', 'frontend'],
    icon: 'i-qbuildr:react',
  },
  {
    name: 'qbuildr-vite-ts',
    label: 'Vite + TypeScript',
    description: 'Vite starter template with TypeScript configuration for type-safe development',
    githubRepo: 'thecodacus/qbuildr-vite-ts-template',
    tags: ['vite', 'typescript', 'minimal'],
    icon: 'i-qbuildr:typescript',
  },
  {
    name: 'qbuildr-vue',
    label: 'Vue.js',
    description: 'Vue.js starter template with modern tooling and best practices',
    githubRepo: 'thecodacus/qbuildr-vue-template',
    tags: ['vue', 'typescript', 'frontend'],
    icon: 'i-qbuildr:vue',
  },
  {
    name: 'qbuildr-angular',
    label: 'Angular Starter',
    description: 'A modern Angular starter template with TypeScript support and best practices configuration',
    githubRepo: 'thecodacus/qbuildr-angular-template',
    tags: ['angular', 'typescript', 'frontend', 'spa'],
    icon: 'i-qbuildr:angular',
  },
];
