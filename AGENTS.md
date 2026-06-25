# Portfolio Marcio Dias - AGENTS.md

## REgra de ouro (GRAVADA NA MEMÓRIA PARA SEMPRE)
> **Sempre entregar o MÁXIMO, melhor 1000x melhor e EXTRAORDINÁRIO logo no PRIMEIRO pedido.**
> Nunca entregar algo medíocre, básico ou pela metade. Se o usuário pedir qualquer coisa, entregar a versão mais impressionante, completa e premium possível desde o início. Isso vale para código, design, features, commits — tudo.
> **SEMPRE ler as customizações dos workflows (AGENTS.md, antigravity-custom-instructions.md, gemini-code, opencode.jsonc, antigravity-accounts.json) ANTES de responder qualquer solicitação.**
> **SEMPRE usar a língua portuguesa em TUDO — código, comentários, commits, mensagens, nomes de variáveis quando fizer sentido, docs. Nunca misturar inglês desnecessariamente.**

## INSTRUÇÕES OBRIGATÓRIAS (Antigravity)

### Como trabalhar
1. Entenda o objetivo antes de codar: pergunte se faltar contexto crítico.
2. Pesquise padrões e documentação oficial antes de implementar algo não trivial.
3. Prefira soluções consolidadas a reinventar a roda, salvo razão técnica clara.
4. Entregue código funcional e completo — nunca pseudocódigo ou trechos pela metade.

### Qualidade de código
- Siga boas práticas da linguagem/framework usado (tipagem, lint, convenções).
- Trate erros e valide entradas sempre que fizer sentido.
- Priorize: clareza > funcionalidade > performance > originalidade.
- Evite complexidade desnecessária (KISS, DRY).

### Segurança
- Nunca exponha senhas, tokens ou credenciais no código ou nos logs.
- Valide e sanitize qualquer entrada externa (forms, APIs, uploads).
- Sinalize riscos de segurança que encontrar, mesmo sem ser perguntado.

### Antes de finalizar
- Revise o fluxo principal e pelo menos os edge cases óbvios (entradas vazias/inválidas).
- Aponte limitações ou trade-offs da solução entregue.
- Sugira próximos passos só se forem relevantes — sem encher de "melhorias" genéricas.

### UI/UX (quando houver interface)
- Antes de definir o visual, veja rapidamente 2-3 referências reais do mesmo segmento e use isso para informar decisões — sem copiar.
- Cada projeto deve ter identidade própria: evite repetir a mesma hero section, paleta e estrutura de sempre.
- Priorize: usabilidade > clareza > funcionalidade > originalidade > estética.

### Comunicação
- Respostas em Português do Brasil, diretas e técnicas.
- Sem enrolação: vá direto ao ponto, explique decisões importantes brevemente.

---

## GOD MODE DEV SYSTEM (v2.0)

### Diretrizes de Execução Inegociáveis
- **Zero Código Quebrado ou Incompleto:** Nunca use placeholders (// TODO, ..., // insira aqui). Se a lógica existir, implemente-a por completo.
- **Ação Baseada em Dados:** Decisões de design e stack devem ser justificadas com base em requisitos técnicos e boas práticas.
- **Finitude e Prontidão:** Todo código entregue deve estar pronto para compilação/execução, com tratamento de erros, tipagem estrita e validações de borda.
- **MÁXIMO DESDE O PRIMEIRO PEDIDO:** Sempre entregar o máximo, melhor 1000x melhor e extraordinário logo no primeiro pedido. Nunca entregar algo medíocre ou pela metade. Se o usuário pedir uma feature, entregar a versão mais impressionante possível desde o início.

### Ciclo de Desenvolvimento Autônomo (CDA)
1. **Análise de Requisitos & Riscos:** Alvo, escopo, performance e segurança.
2. **Benchmark & Pesquisa:** Consulta a padrões da indústria e documentações oficiais.
3. **Desenho Arquitetural:** Padrões modernos (Clean Arch, SOLID, DDD, DRY, KISS).
4. **Implementação Rígida:** Código limpo, tipado e auto-documentado.
5. **Simulação de Testes:** Validação de caminhos felizes, alternativos, falhas externas e inputs maliciosos.
6. **Refatoração & Otimização:** Eliminação de código morto, redundâncias e desperdício de memória/CPU.

### Design Variation Engine & UX Premium
- Evite a "SaaSificação genérica". Cada produto exige assinatura visual própria.
- Hierarquia: 1. UX/Acessibilidade → 2. Clareza/Performance → 3. Originalidade Estética.
- Assets: Lucide, Heroicons, placeholders Unsplash.

### Hardening & Segurança (SecOps)
- Sanitização absoluta: prevenção de SQLi, XSS, CSRF e SSRF.
- Zero Leakage: nunca exponha credenciais, tokens ou chaves de API. Use process.env / .env.example.

### Protocolo de Entrega
- Respostas limpas, scannables, formatadas em Markdown estruturado.
- DIAGNÓSTICO E ESCOPO → INSIGHTS DE MERCADO → ESTRUTURA → IMPLEMENTAÇÃO.

---

## Perfil do Projeto
- **Autor**: Marcio Dias (MarcioDias83)
- **Email**: 1983mrd@gmail.com
- **LinkedIn**: linkedin.com/in/marciordias
- **GitHub**: github.com/MarcioDias83
- **Stack**: Full-stack & UI Designer
- **Localização**: Rio Grande do Sul, Brasil

## Stack Técnico
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin, sem tailwind.config.js)
- framer-motion para animações
- ogl para WebGL (AuroraBg)
- gsap para MagicBento
- Node 24.16.0

## Deploy
- **Produção**: https://marciodias.vercel.app (custom domain no projeto "portfolio")
- **Vercel project**: portfolio (prj_G3PfY8GyyZyeVM5A1brmzo6HC63I)
- **GitHub repo**: MarcioDias83/portfolio
- **Build**: `npm run build` (tsc -b && vite build)
- **Deploy**: `vercel deploy --prod --yes` (precisa estar linked ao projeto "portfolio")
- NÃO usar `vercel deploy` sem linkar ao projeto "portfolio" - pode criar projeto errado

## Convenções
- Respostas em Português do Brasil, diretas e técnicas
- Sempre commitar e push após cada mudança funcional
- Dark theme com roxo (#6c5ce7), glassmorphism, fonte Inter
- Single-page com scroll suave

## Configuração Antigravity
- **Modelo padrão**: qwen3-vl-plus (via Qwen portal)
- **Plugins**: opencode-antigravity-auth@beta, opencode-qwen-auth
- **Conta**: 1983mrd@gmail.com (Gemini + Claude autenticados)
- **Modelos disponíveis**: Gemini 3.1 Pro, Gemini 3 Flash, Claude Sonnet 4.6, Claude Opus 4.6, Qwen3 Coder Plus
- **antigravity-awesome-skills**: Instalado via npx (workflows mcp2-mcp15)
- **Skills MCP**: PEOPLE, GLOBAL SUPPORT, GLOBAL, INTERNA, ENTERPRI, VISÃO SI, COSMIC SIMULATION, GOD LAYER, CYBERSEC, DATA & AI, PRODUCT
- **Workflows locais**: "Algumas_orientacoes Sites" (Global), "Commit+Push_Automaticamente" (Global)

## Componentes React Bits Integrados
- **SplashCursor** (src/components/SplashCursor.tsx) - WebGL fluid simulation, z-50 fixed overlay
- **AuroraBg** (src/components/AuroraBg.tsx) - WebGL aurora gradient via ogl
- **DecryptedText** (src/components/DecryptedText.tsx) - Hacker decrypt on hover
- **SpotlightCard** (src/components/SpotlightCard.tsx) - Spotlight glow nos cards
- **Magnet** (src/components/Magnet.tsx) - Atração magnética em botões/links
- **MagicBento** (src/components/MagicBento.tsx) - Bento grid com stars/spotlight/border-glow/tilt

## Estrutura de Arquivos Chave
- src/i18n.tsx - Provider PT/EN com useT() hook
- src/App.tsx - Layout principal com todos os componentes
- src/components/Hero.tsx - AuroraBg + DecryptedText + Magnet + TypeText
- src/components/Header.tsx - Magnet nos nav links + toggle idioma
- src/components/Projects.tsx - SpotlightCard com imagens Unsplash
- src/components/BentoSection.tsx - MagicBento com 6 cards de serviço
- src/components/SplashCursor.tsx - Cursor fluid (1000+ linhas WebGL)
- src/index.css - Tema Tailwind v4 customizado

## Estado Atual (IMPORTANTE)
- Site FUNCIONANDO - Playwright confirmou que conteúdo renderiza
- SplashCursor causa warnings WebGL (shader compilation) mas não impede renderização
- Usuário pode ver página em branco por cache do browser → instruct hard refresh (Ctrl+Shift+R)
-.vercel directory: usar "vercel link --project portfolio" antes de deploy

## O que NÃO fazer
- NÃO criar projeto "marciodias" no Vercel (deu problema de roteamento)
- NÃO usar vercel alias set para marciodias.vercel.app (usar vercel domain add)
- NÃO incluir projetos locadora/locadora-v2 no portfólio
- NÃO adicionar seção "Suporte TI" no About

## Formspree
- Endpoint: https://formspree.io/f/1983mrd@gmail.com (precisa de conta real)

## Dependências
```json
{
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "framer-motion": "^12.41.0",
  "motion": "^12.41.0",
  "ogl": "^1.0.11",
  "gsap": "^3.15.0",
  "lucide-react": "^0.525.0",
  "tailwindcss": "^4.3.1",
  "@tailwindcss/vite": "^4.3.1"
}
```
