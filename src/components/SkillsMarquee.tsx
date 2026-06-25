const skills = [
  'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Zustand', 'React Query', 'Vite', 'Node.js',
  'Python', 'FastAPI', 'PostgreSQL', 'Docker',
  'Git', 'GitHub Actions', 'APIs REST', 'Linux',
  'Figma', 'UI/UX', 'Serverless', 'Vercel',
]

export default function SkillsMarquee() {
  return (
    <div className="relative py-6 overflow-hidden bg-dark-800/50 border-y border-border">
      <div className="flex whitespace-nowrap gap-4 animate-scroll">
        {[...skills, ...skills].map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-text-secondary whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
