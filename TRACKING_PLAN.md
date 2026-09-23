# Plano de Mensuração & Rastreamento de Leads (CognitivaTech)

Documento oficial de governança e instrumentação analítica da landing page **CognitivaTech**, alinhado com o padrão **`analytics-tracking`**.

---

## 1. Identificadores & Ferramentas

| Ferramenta | Identificador | Função |
| :--- | :--- | :--- |
| **Google Ads (gtag.js)** | `AW-18099440512` | Alimentação dos lances inteligentes de IA (Smart Bidding) |
| **DataLayer (GTM / Custom)** | `window.dataLayer` | Orquestração de eventos e integrações de marketing |

---

## 2. Dicionário de Eventos & Gatilhos

### Evento Principal: `generate_lead` (Google Ads) / `lead_conversion` (dataLayer)

| Ação (`action`) | Rótulo (`label`) | Gatilho Técnico | Decisão Suportada |
| :--- | :--- | :--- | :--- |
| `whatsapp_click` | `hero` | Clique no botão CTA da seção Hero | Medir taxa de conversão da proposta de valor inicial. |
| `whatsapp_click` | `bento_ecommerce` | Clique no banner Bento Grid de E-commerce | Avaliar demanda de automação para varejo/lojas. |
| `whatsapp_click` | `service_<id>` | Clique em qualquer um dos 6 cards de Serviços | Identificar quais soluções (IA, Sistemas, APIs) têm maior tração. |
| `whatsapp_click` | `consulting_<id>` | Clique em qualquer um dos 3 planos de Consultoria | Validar intenção de contratação de pacotes específicos. |
| `whatsapp_click` | `how_it_works` | Clique no CTA da Linha do Tempo | Medir impacto do modelo de entrega ágil na conversão. |
| `whatsapp_click` | `social_proof_trust` | Clique no card de Atendimento com Engenheiro Sênior | Testar eficácia de autoridade técnica contra objeções. |
| `whatsapp_click` | `faq_help` | Clique na chamada de dúvidas do FAQ | Avaliar se o FAQ converte visitantes em dúvida. |
| `whatsapp_click` | `floating_button` | Clique no botão flutuante de WhatsApp | Medir conversão de visitantes que navegam por toda a página. |
| `whatsapp_click` | `contact_direct_card` | Clique no card "Atendimento Imediato" em Contato | Medir preferência por conversa rápida vs formulário. |
| `whatsapp_click` | `contact_secondary` | Clique no botão inferior de WhatsApp | Capturar leads no rodapé da seção de contato. |
| `calendar_click` | `google_calendar` | Clique no botão "Agendar no Google Calendar" | Medir adoção de autoagendamento de reuniões. |
| `phone_click` | `contact` / `footer` | Clique no número de telefone para ligação direta | Medir conversões por ligação telefônica direta. |
| `email_click` | `contact` / `footer` | Clique no link de e-mail corporativo | Medir intenção de contato por e-mail direto. |
| `form_submit` | `<segmento>` | Envio com sucesso (HTTP 200) do formulário | Meta principal de geração de propostas qualificadas. |

---

## 3. Preservação de Atribuição (UTMs & GCLID)

Todos os visitantes que chegam via anúncios do Google Ads têm seus parâmetros de URL automaticamente capturados e persistidos no `sessionStorage`:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid` (Google Click Identifier)

Ao submeter o formulário de diagnóstico, esses dados são enviados junto com o payload para a API `/api/leads`.

---

## 4. Governança de Ambientes

- **Produção (`cognitivatech.com.br`):**
  - Eventos enviados diretamente para o Google Ads (`gtag`) e `dataLayer`.
- **Desenvolvimento (`localhost`, `127.0.0.1`):**
  - Chamadas de rede para o Google Ads são **automaticamente bloqueadas**.
  - O desenvolvedor visualiza os eventos formatados no console do navegador via `console.info('[Analytics Dev]', ...)`.

---

## 5. Regras de Contagem Recomendadas no Google Ads

- **WhatsApp & Calendário:** Contagem configurada como **"Uma" (One)** por clique/sessão para evitar contagem inflada caso o usuário clique múltiplas vezes no mesmo botão.
- **Formulário:** Contagem configurada como **"Uma" (One)** por envio de proposta.
