import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Dict = typeof ptBR

const ptBR = {
  nav: { home: 'Início', projects: 'Projetos', about: 'Sobre', contact: 'Contato' },
  hero: {
    available: 'Disponível para novos projetos',
    hello: 'Olá, eu sou',
    roles: ['Full-stack Developer', 'UI Designer', 'React Specialist', 'Problem Solver'],
    words: ['soluções', 'interfaces', 'experiências', 'sistemas'],
    tagline_before: 'Transformando ideias em',
    tagline_after: 'digitais — do design à entrega, com foco em qualidade e experiência do usuário.',
    btn_projects: 'Ver projetos',
    btn_contact: 'Entrar em contato',
  },
  skills: {
    title: 'Stack que uso no dia a dia',
    subtitle: 'Ferramentas e tecnologias que domino e aplico em cada projeto.',
  },
  skills_categories: {
    'Ferramentas': 'Ferramentas',
  },
  stats: [
    'Projetos entregues',
    'Anos de TI',
    'Formações acadêmicas',
    'Usuários impactados',
  ],
  projects: {
    badge: 'Portfolio',
    heading: 'Projetos que já entreguei',
    subtitle: 'Cada projeto combina tecnologia moderna com design cuidadoso.',
    github: 'Código',
  },
  about: {
    badge: 'Sobre Mim',
    heading: 'Quem sou eu',
    p1: 'Profissional de TI formado em <strong>Análise e Desenvolvimento de Sistemas</strong>, com pós-graduação na área e foco em soluções práticas — do suporte ao desenvolvimento.',
    p2: 'Minha trajetória une <strong>suporte técnico</strong> (N1/N2, help desk, infraestrutura) com <strong>desenvolvimento de sistemas</strong> modernos usando React, TypeScript, Python e APIs. Essa combinação me permite entender o problema completo — da infraestrutura à interface — e entregar soluções que realmente funcionam.',
    p3: 'Já atuei em empresas de grande porte, projetos de migração de sistemas, suporte corporativo e também em áreas comerciais e telecomunicações, fortalecendo habilidades de comunicação, negociação e foco no cliente.',
    formation: 'Formação',
    degree1: 'Análise e Desenvolvimento de Sistemas (Superior)',
    degree2: 'Pós-graduação em Tecnologia',
    lang_pt: 'Português: Nativo',
    lang_en: 'Inglês Técnico: Pré-Intermediário',
    competencies: 'Competências',
  },
  contact: {
    badge: 'Contato',
    heading: 'Vamos trabalhar juntos?',
    subtitle: 'Tem um projeto em mente? Me mande uma mensagem.',
    name_placeholder: 'Seu nome',
    email_placeholder: 'Seu email',
    message_placeholder: 'Sua mensagem',
    send: 'Enviar mensagem',
    email_label: 'Email',
    whatsapp_label: 'WhatsApp',
    location_label: 'Localização',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    made_with: 'Feito com',
  },
}

const enUS: Dict = {
  nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
  hero: {
    available: 'Available for new projects',
    hello: 'Hello, I\'m',
    roles: ['Full-stack Developer', 'UI Designer', 'React Specialist', 'Problem Solver'],
    words: ['solutions', 'interfaces', 'experiences', 'systems'],
    tagline_before: 'Turning ideas into',
    tagline_after: 'digital — from design to delivery, focused on quality and user experience.',
    btn_projects: 'View projects',
    btn_contact: 'Get in touch',
  },
  skills: {
    title: 'Daily stack',
    subtitle: 'Tools and technologies I master and apply in every project.',
  },
  skills_categories: {
    'Ferramentas': 'Tools',
  },
  stats: [
    'Projects delivered',
    'Years in IT',
    'Academic degrees',
    'Users impacted',
  ],
  projects: {
    badge: 'Portfolio',
    heading: 'Projects I\'ve delivered',
    subtitle: 'Each project combines modern technology with careful design.',
    github: 'Code',
  },
  about: {
    badge: 'About Me',
    heading: 'Who I am',
    p1: 'IT professional graduated in <strong>Systems Analysis and Development</strong>, with a postgraduate degree in the field and a focus on practical solutions — from support to development.',
    p2: 'My career combines <strong>technical support</strong> (N1/N2, help desk, infrastructure) with modern <strong>systems development</strong> using React, TypeScript, Python, and APIs. This combination allows me to understand the complete problem — from infrastructure to interface — and deliver solutions that truly work.',
    p3: 'I have worked in large companies, system migration projects, corporate support, and also in commercial and telecommunications areas, strengthening communication, negotiation, and customer focus skills.',
    formation: 'Education',
    degree1: 'Systems Analysis and Development (Bachelor\'s)',
    degree2: 'Postgraduate degree in Technology',
    lang_pt: 'Portuguese: Native',
    lang_en: 'Technical English: Pre-Intermediate',
    competencies: 'Competencies',
  },
  contact: {
    badge: 'Contact',
    heading: 'Let\'s work together?',
    subtitle: 'Have a project in mind? Send me a message.',
    name_placeholder: 'Your name',
    email_placeholder: 'Your email',
    message_placeholder: 'Your message',
    send: 'Send message',
    email_label: 'Email',
    whatsapp_label: 'WhatsApp',
    location_label: 'Location',
  },
  footer: {
    rights: 'All rights reserved.',
    made_with: 'Made with',
  },
}

type Lang = 'pt' | 'en'

const ctx = createContext<{ t: Dict; lang: Lang; setLang: (l: Lang) => void }>(null!)

export function useT() {
  return useContext(ctx)
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'pt') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const dict = lang === 'en' ? enUS : ptBR

  return <ctx.Provider value={{ t: dict, lang, setLang }}>{children}</ctx.Provider>
}
