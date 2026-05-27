# TC-002 - Login válido usando email e senha - Besouro Sistemas

---

# 1. Objetivo

Este teste visa validar a funcionalidade de login utilizando um email e senha cadastrados corretamente no sistema.

---

# 2. Prioridade

- Alta 

---

# 3. Severidade

- Crítica

---

# 4. Tipo de Teste

- Funcional
- Integração(Clerk)
- Autenticação

---

# 5. Pré-condições

- Usuario convidado para uma organização
- Usuário não desativado

---

# 6. Dados de Teste

- Usuário de teste previamente configurado no ambiente(não adicionado para não expor no github)

---

# 7. Ambiente de Execução

- Ambiente: Produção
- Navegador: Google Chrome 136+
- Sistema operacional: Windows 11

---

# 8. Passos do Teste

1. Acessar a url: besourosistemas.com.br
2. Digitar o e-mail no campo email e clicar em continuar
3. Digitar a senha e clicar em continuar

---

# 9. Resultado Esperado

- O usuário ter acesso ao sistema e a organização para a qual foi convidado

---

# 10. Resultado Atual

- O login foi realizado com sucesso
- O sistema redirecionou corretamente para o dashboard
- As permissões do usuário foram carregadas corretamente

---

# 11. Status

- [X] Passou
- [ ] Falhou
- [ ] Bloqueado
- [ ] Não Executado

---

# 12. Observações



---

# 13. Responsável

Davi

---

# 14. Links para Evidências

- Links para screenshots, vídeos ou arquivos em `/evidences/screenshots` ou `/evidences/videos`.

---

# 15. Data de Execução

15/05/2026

---

# 16. Critérios de aceite

- Usuário deve conseguir autenticar com credenciais válidas
- Sessão deve ser criada corretamente