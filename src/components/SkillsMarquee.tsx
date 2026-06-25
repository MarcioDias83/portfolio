const skills = [
  'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Zustand', 'React Query', 'Vite', 'Node.js',
  'Python', 'FastAPI', 'PostgreSQL', 'Docker',
  'Git', 'GitHub Actions', 'APIs REST', 'Linux',
  'Figma', 'UI/UX', 'Serverless', 'Vercel',
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
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
