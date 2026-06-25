const skills = [
  { nome: 'React 19', icone: '/imagens/tech/react.svg' },
  { nome: 'TypeScript', icone: '/imagens/tech/typescript.svg' },
  { nome: 'Tailwind CSS', icone: '/imagens/tech/tailwind.svg' },
  { nome: 'Framer Motion', icone: null },
  { nome: 'Zustand', icone: null },
  { nome: 'React Query', icone: null },
  { nome: 'Vite', icone: null },
  { nome: 'Node.js', icone: '/imagens/tech/nodejs.svg' },
  { nome: 'Python', icone: '/imagens/tech/python.svg' },
  { nome: 'FastAPI', icone: '/imagens/tech/fastapi.svg' },
  { nome: 'PostgreSQL', icone: '/imagens/tech/postgresql.svg' },
  { nome: 'Docker', icone: '/imagens/tech/docker.svg' },
  { nome: 'Git', icone: '/imagens/tech/git.svg' },
  { nome: 'GitHub Actions', icone: null },
  { nome: 'APIs REST', icone: null },
  { nome: 'Linux', icone: null },
  { nome: 'Three.js', icone: '/imagens/tech/threejs.svg' },
  { nome: 'Figma', icone: null },
  { nome: 'UI/UX', icone: null },
  { nome: 'Serverless', icone: null },
  { nome: 'Vercel', icone: null },
]

export default function SkillsMarquee() {
  return (
    <div className="relative py-5 overflow-hidden border-y border-border bg-dark-800/30">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap gap-3 animate-scroll">
        {[...skills, ...skills].map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-4 py-2 glass-strong rounded-full text-xs font-medium text-text-secondary whitespace-nowrap hover:text-accent-light hover:border-accent/30 transition-all duration-300 cursor-default"
          >
            {s.icone ? (
              <img src={s.icone} alt="" className="w-4 h-4" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            )}
            {s.nome}
          </span>
        ))}
      </div>
    </div>
  )
}
