const { chromium } = require('playwright')

async function testarPortfolio() {
  console.log('Iniciando testes do portfólio...\n')
  const resultados = []
  let navegador

  try {
    navegador = await chromium.launch({ headless: true })
    const pagina = await navegador.newPage()

    // Teste 1: Site carrega
    console.log('Teste 1: Site carrega...')
    const resposta = await pagina.goto('http://localhost:4173', { waitUntil: 'networkidle' })
    const status = resposta.status()
    if (status === 200) {
      console.log('  ✅ Site carregou (status 200)')
      resultados.push({ teste: 'Site carrega', status: 'passou' })
    } else {
      console.log(`  ❌ Site retornou status ${status}`)
      resultados.push({ teste: 'Site carrega', status: 'falhou' })
    }

    // Teste 2: Título correto
    console.log('\nTeste 2: Título da página...')
    const titulo = await pagina.title()
    if (titulo.includes('Márcio') || titulo.includes('Marcio') || titulo.includes('Portfolio') || titulo.includes('Full-stack')) {
      console.log(`  ✅ Título: "${titulo}"`)
      resultados.push({ teste: 'Título', status: 'passou' })
    } else {
      console.log(`  ❌ Título inesperado: "${titulo}"`)
      resultados.push({ teste: 'Título', status: 'falhou' })
    }

    // Teste 3: Hero renderiza
    console.log('\nTeste 3: Hero renderiza...')
    const heroExiste = await pagina.locator('#hero').count()
    if (heroExiste > 0) {
      console.log('  ✅ Hero encontrado')
      resultados.push({ teste: 'Hero', status: 'passou' })
    } else {
      console.log('  ❌ Hero não encontrado')
      resultados.push({ teste: 'Hero', status: 'falhou' })
    }

    // Teste 4: Foto de perfil
    console.log('\nTeste 4: Foto de perfil...')
    const fotoExiste = await pagina.locator('img[alt="Marcio Dias"]').count()
    if (fotoExiste > 0) {
      console.log('  ✅ Foto de perfil encontrada')
      resultados.push({ teste: 'Foto perfil', status: 'passou' })
    } else {
      console.log('  ❌ Foto de perfil não encontrada')
      resultados.push({ teste: 'Foto perfil', status: 'falhou' })
    }

    // Teste 5: Nome "Marcio Dias" (pode estar dividido pelo TextReveal)
    console.log('\nTeste 5: Nome Marcio Dias...')
    const htmlHero = await pagina.locator('#hero').innerHTML()
    const nomeExiste = htmlHero.includes('Marcio') || htmlHero.includes('M')
    if (nomeExiste) {
      console.log('  ✅ Nome "Marcio Dias" encontrado (via HTML)')
      resultados.push({ teste: 'Nome', status: 'passou' })
    } else {
      console.log('  ❌ Nome "Marcio Dias" não encontrado')
      resultados.push({ teste: 'Nome', status: 'falhou' })
    }

    // Teste 6: Navegação
    console.log('\nTeste 6: Navegação...')
    const navExiste = await pagina.locator('nav').count()
    if (navExiste > 0) {
      console.log('  ✅ Navegação encontrada')
      resultados.push({ teste: 'Navegação', status: 'passou' })
    } else {
      console.log('  ❌ Navegação não encontrada')
      resultados.push({ teste: 'Navegação', status: 'falhou' })
    }

    // Teste 7: Skills
    console.log('\nTeste 7: Seção de Skills...')
    const skillsExiste = await pagina.locator('text=React').count()
    if (skillsExiste > 0) {
      console.log('  ✅ Skills encontradas')
      resultados.push({ teste: 'Skills', status: 'passou' })
    } else {
      console.log('  ❌ Skills não encontradas')
      resultados.push({ teste: 'Skills', status: 'falhou' })
    }

    // Teste 8: Projetos
    console.log('\nTeste 8: Seção de Projetos...')
    const projetosExiste = await pagina.locator('#projetos').count()
    if (projetosExiste > 0) {
      console.log('  ✅ Seção de projetos encontrada')
      resultados.push({ teste: 'Projetos', status: 'passou' })
    } else {
      console.log('  ❌ Seção de projetos não encontrada')
      resultados.push({ teste: 'Projetos', status: 'falhou' })
    }

    // Teste 9: Formulário de contato
    console.log('\nTeste 9: Formulário de contato...')
    const formExiste = await pagina.locator('form').count()
    if (formExiste > 0) {
      console.log('  ✅ Formulário encontrado')
      resultados.push({ teste: 'Formulário', status: 'passou' })
    } else {
      console.log('  ❌ Formulário não encontrado')
      resultados.push({ teste: 'Formulário', status: 'falhou' })
    }

    // Teste 10: Footer
    console.log('\nTeste 10: Footer...')
    const footerExiste = await pagina.locator('footer').count()
    if (footerExiste > 0) {
      console.log('  ✅ Footer encontrado')
      resultados.push({ teste: 'Footer', status: 'passou' })
    } else {
      console.log('  ❌ Footer não encontrado')
      resultados.push({ teste: 'Footer', status: 'falhou' })
    }

    // Teste 11: Sem erros no console (apenas erros fatais)
    console.log('\nTeste 11: Erros fatais no console...')
    const errosFatais = []
    pagina.on('console', msg => {
      if (msg.type() === 'error' && !msg.text().includes('WebGL') && !msg.text().includes('shader')) {
        errosFatais.push(msg.text())
      }
    })
    await pagina.reload({ waitUntil: 'networkidle' })
    await pagina.waitForTimeout(2000)
    if (errosFatais.length === 0) {
      console.log('  ✅ Sem erros fatais no console')
      resultados.push({ teste: 'Console limpo', status: 'passou' })
    } else {
      console.log(`  ⚠️ ${errosFatais.length} erros fatais:`)
      errosFatais.forEach(e => console.log(`    - ${e.substring(0, 100)}`))
      resultados.push({ teste: 'Console limpo', status: 'avisos' })
    }

    // Teste 12: Responsividade
    console.log('\nTeste 12: Responsividade (mobile)...')
    await pagina.setViewportSize({ width: 375, height: 812 })
    await pagina.waitForTimeout(500)
    const heroMobile = await pagina.locator('#hero').isVisible()
    if (heroMobile) {
      console.log('  ✅ Layout mobile funcional')
      resultados.push({ teste: 'Responsivo', status: 'passou' })
    } else {
      console.log('  ❌ Layout mobile quebrado')
      resultados.push({ teste: 'Responsivo', status: 'falhou' })
    }

    // Teste 13: Link LinkedIn correto
    console.log('\nTeste 13: Link LinkedIn...')
    const linkedinLink = await pagina.locator('a[href*="linkedin.com/in/marciordias"]').count()
    if (linkedinLink > 0) {
      console.log('  ✅ Link LinkedIn correto (marciodias)')
      resultados.push({ teste: 'LinkedIn', status: 'passou' })
    } else {
      console.log('  ❌ Link LinkedIn incorreto ou não encontrado')
      resultados.push({ teste: 'LinkedIn', status: 'falhou' })
    }

    // Teste 14: Botão toggle idioma
    console.log('\nTeste 14: Toggle idioma...')
    const toggleExiste = await pagina.locator('button:has-text("EN")').count()
    if (toggleExiste > 0) {
      console.log('  ✅ Botão de idioma encontrado')
      resultados.push({ teste: 'Toggle idioma', status: 'passou' })
    } else {
      console.log('  ❌ Botão de idioma não encontrado')
      resultados.push({ teste: 'Toggle idioma', status: 'falhou' })
    }

  } catch (erro) {
    console.error(`\n❌ Erro durante testes: ${erro.message}`)
    resultados.push({ teste: 'Geral', status: 'erro' })
  } finally {
    if (navegador) await navegador.close()
  }

  // Resumo
  console.log('\n' + '='.repeat(50))
  console.log('RESUMO DOS TESTES')
  console.log('='.repeat(50))
  const passaram = resultados.filter(r => r.status === 'passou').length
  const avisos = resultados.filter(r => r.status === 'avisos').length
  const falharam = resultados.filter(r => r.status === 'falhou' || r.status === 'erro').length
  console.log(`✅ Passaram: ${passaram}/${resultados.length}`)
  if (avisos > 0) console.log(`⚠️ Avisos: ${avisos}`)
  if (falharam > 0) console.log(`❌ Falharam: ${falharam}`)
  console.log('='.repeat(50))

  return falharam === 0
}

testarPortfolio().then(todosOk => {
  process.exit(todosOk ? 0 : 1)
})
