# TS-002 - Suite de Dashboard

---

# 1. Objetivo

Validar todas as funcionalidades da tela de dashboard e dados apresentados ao usuário, garantindo integridade e funcionamento correto de todo o Dashboard de resultados.

---

# 2. Módulo

Dashboard de resultados(página inicial do sistema)

---

# 3. Funcionalidades cobertas

- Visão executiva
- Gráfico de desempenho semanal
- Seleção de empresas pelo menu rápido

---

# 4. Testes aplicados

- Funcional
- Regressão
- Exploratório

---

# 5. Casos de Teste Relacionados

ID | Descrição | Prioridade

CT-001 | Limite de valores da visão executiva | Alta
CT-002 | Atualização do gráfico semanal | Média
CT-003 | Gráfico com filtro correto por semana atual e anterior | Média

---

# 6. Pré-condições

- Usuário estar logado no sistema
- Backend integrado
- ter vendas cadastradas para o período de teste

---

# 7. Critérios de aprovação

- Todos os dados do dashboard devem estar corretos e atualizados
- Nenhum bug bloqueante ou crítico deve existir
- Dashboard estável e atualizando dados corretamente sem precisar dar F5 ou recarregar a página