# TC-005 - teste de borda, senha com máximo e mínimo de caracteres - Besouro Sistemas

---

# 1. Objetivo

Este teste visa validar a regra de negócio com relação ao número máximo e mínimo de caracteres do campo senha

---

# 2. Prioridade

- Baixa 

---

# 3. Severidade

- Média

---

# 4. Tipo de Teste

- Funcional
- Integração(Clerk)
- Autenticação

---

# 5. Pré-condições

- Usuário já cadastrado no sistema. 

---

# 6. Dados de Teste

- senha com 72 caracteres: Ab3$Xy9!QCd4%Mn8@Re5&Tu7#Vi6*Wp2?Ls1+Ka0=Zj3$Hn8@Pf4%Qr7&Ts2#Uv5*Bx9?Lm02
- senha com 7 caracteres: Ab3$Xy9

---

# 7. Ambiente de Execução

- Ambiente: Produção
- Navegador: Google Chrome 136+
- Sistema operacional: Windows 11

---

# 8. Passos do Teste

1. Acessar a url: besourosistemas.com.br
2. Fazer login no sistema com a conta de testes disponível na base de conhecimento
3. Clicar no botão de configurações no canto inferior esquerdo
4. Selecionar a opção: Gerenciar conta
5. Ir na guia "Segurança"
6. clicar em "trocar senha"
7. Utilizar as senhas dos dados do teste

---

# 9. Resultado Esperado

-senha 72 caracteres: O sistema retornar uma mensagem informando que a senha deve ter menos de 72 caracteres e não permitir o usuário trocar a senha.
- senha 7 caracteres: O sistema retornar uma mensagem informando que a quantidade mínima de caracteres é 8 e não permitir o usuário trocar a senha. 

---

# 10. Resultado Atual

- No primeiro cenário, o sistema apresenta a mensagem, mas deixa o usuário cadastrar uma senha de até 72 caracteres, falhando por 1 caractere
- No segundo cenário, o sistema informa que a quantidade mínima é 8 caracteres e não permite o usuário cadastrar a senha

---

# 11. Status

- [ ] Passou
- [X] Falhou
- [ ] Bloqueado
- [ ] Não Executado

---

# 12. Observações

O sistema falha por 1 caractere no limite máximo.
Não é algo que impacte negativamente o sistema pois o banco de dados é preparado para suportar senhas desse tamanho, mas é um ponto de atenção sobre a confiabilidade das informações apresentadas.

---

# 13. Responsável

Davi

---

# 14. Links para Evidências

- Links para screenshots, vídeos ou arquivos em `/evidences/screenshots` ou `/evidences/videos`.

---

# 15. Data de Execução

18/05/2026

---

# 16. Critérios de aceite

- Sistema não permitir o cadastro de senhas de tamanho inválido
- Mensagem clara de senha não permitida
