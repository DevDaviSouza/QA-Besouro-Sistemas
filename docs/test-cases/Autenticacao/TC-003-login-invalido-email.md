# TC-003 - Login inválido usando email e senha - Besouro Sistemas

---

# 1. Objetivo

Este teste visa validar o bloqueio de login utilizando um email e senha não cadastrados no sistema.

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

- usuário testado não deve estar cadastrado

---

# 6. Dados de Teste

- email: teste@teste.com
- senha: teste123

---

# 7. Ambiente de Execução

- Ambiente: Produção
- Navegador: Google Chrome 136+
- Sistema operacional: Windows 11

---

# 8. Passos do Teste

1. Acessar a url: besourosistemas.com.br
2. Digitar o e-mail no campo email e clicar em continuar

---

# 9. Resultado Esperado

- O sistema retornar uma mensagem informando que o não encontrou usuário vinculado ao email

---

# 10. Resultado Atual

- A resposta "Não foi possível encontrar o usuário." é apresentada
- O sistema não permite acesso a outras rotas

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

- Sistema não permitir acesso a nenhuma outra rota 
- Mensagem clara de usuário não encontrado deve ser apresentada para o cliente
