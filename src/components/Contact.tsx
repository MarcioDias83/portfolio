import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight, Phone, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useT } from '../i18n'
import ScrollReveal from './ScrollReveal'

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim()
}

function validarEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

type CampoErro = { nome?: string; email?: string; mensagem?: string }

export default function Contato() {
  const { t } = useT()

  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [erros, setErros] = useState<CampoErro>({})
  const [status, setStatus] = useState<'idle' | 'enviando' | 'sucesso' | 'erro'>('idle')
  const [ultimoEnvio, setUltimoEnvio] = useState(0)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    const limpo = sanitize(value)
    setFormData(prev => ({ ...prev, [name]: limpo }))
    if (erros[name as keyof CampoErro]) {
      setErros(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function validar(): boolean {
    const novosErros: CampoErro = {}

    if (!formData.nome || formData.nome.length < 2) {
      novosErros.nome = 'Nome precisa ter pelo menos 2 caracteres'
    }
    if (!formData.email || !validarEmail(formData.email)) {
      novosErros.email = 'Email inválido'
    }
    if (!formData.mensagem || formData.mensagem.length < 10) {
      novosErros.mensagem = 'Mensagem precisa ter pelo menos 10 caracteres'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const agora = Date.now()
    if (agora - ultimoEnvio < 30000) {
      return
    }

    if (!validar()) return

    setStatus('enviando')

    try {
      const form = e.currentTarget as HTMLFormElement
      const formDataObj = new FormData(form)

      const res = await fetch(form.action, {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sucesso')
        setUltimoEnvio(agora)
        setFormData({ nome: '', email: '', mensagem: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('erro')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('erro')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contato" className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/4 rounded-full blur-[150px]" />
        <img
          src="/imagens/contact/tech-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
          loading="lazy"
        />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              <MessageCircle size={14} />
              {t.contact.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto text-lg">
              {t.contact.subtitle}
            </p>
            <div className="section-divider mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form
              action="https://formspree.io/f/1983mrd@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              <input
                type="text"
                name="_gotcha"
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder={t.contact.name_placeholder}
                    required
                    maxLength={100}
                    className={`w-full px-5 py-4 bg-surface border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:shadow-lg transition-all duration-300 text-sm ${
                      erros.nome
                        ? 'border-red-500/50 focus:border-red-500 focus:shadow-red-500/10'
                        : 'border-border focus:border-accent/50 focus:shadow-accent/10'
                    }`}
                  />
                  {erros.nome && (
                    <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 ml-1">
                      <AlertCircle size={12} />
                      {erros.nome}
                    </p>
                  )}
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.email_placeholder}
                    required
                    maxLength={200}
                    className={`w-full px-5 py-4 bg-surface border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:shadow-lg transition-all duration-300 text-sm ${
                      erros.email
                        ? 'border-red-500/50 focus:border-red-500 focus:shadow-red-500/10'
                        : 'border-border focus:border-accent/50 focus:shadow-accent/10'
                    }`}
                  />
                  {erros.email && (
                    <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 ml-1">
                      <AlertCircle size={12} />
                      {erros.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative group">
                <textarea
                  name="mensagem"
                  rows={6}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder={t.contact.message_placeholder}
                  required
                  maxLength={5000}
                  className={`w-full px-5 py-4 bg-surface border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:shadow-lg transition-all duration-300 resize-none text-sm ${
                    erros.mensagem
                      ? 'border-red-500/50 focus:border-red-500 focus:shadow-red-500/10'
                      : 'border-border focus:border-accent/50 focus:shadow-accent/10'
                  }`}
                />
                {erros.mensagem && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 ml-1">
                    <AlertCircle size={12} />
                    {erros.mensagem}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full magnetic-btn magnetic-btn-primary py-4 rounded-2xl text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                data-cursor="Enviar"
              >
                {status === 'enviando' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : status === 'sucesso' ? (
                  <CheckCircle size={16} />
                ) : (
                  <Send size={16} />
                )}
                <span className="relative z-10">
                  {status === 'enviando' ? 'Enviando...' : status === 'sucesso' ? 'Enviado!' : status === 'erro' ? 'Erro ao enviar' : t.contact.send}
                </span>
                {status === 'idle' && <ArrowUpRight size={16} className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2 space-y-4">
            <a
              href="mailto:1983mrd@gmail.com"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group"
              data-cursor="Email"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors shrink-0">
                <Mail size={18} className="text-accent-light" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.email_label}</p>
                <p className="text-sm text-text-primary truncate">1983mrd@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/5551992293999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group"
              data-cursor="WhatsApp"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center group-hover:bg-green-500/25 transition-colors shrink-0">
                <Phone size={18} className="text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.whatsapp_label}</p>
                <p className="text-sm text-text-primary">+55 51 99229-3999</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-strong rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/15 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent-cyan" />
              </div>
              <div>
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.location_label}</p>
                <p className="text-sm text-text-primary">Rio Grande do Sul, Brasil</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/MarcioDias83"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 glass-strong rounded-xl hover:bg-accent/15 transition-all duration-300 hover:text-accent-light group"
                aria-label="GitHub"
                data-cursor="GitHub"
              >
                <Github size={18} />
                <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/marciordias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 glass-strong rounded-xl hover:bg-accent/15 transition-all duration-300 hover:text-accent-light group"
                aria-label="LinkedIn"
                data-cursor="LinkedIn"
              >
                <Linkedin size={18} />
                <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
