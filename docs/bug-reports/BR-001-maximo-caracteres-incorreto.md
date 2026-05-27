# BR-001 - Inconsistência na validação do limite máximo da senha - Besouro Sistemas

---

# 1. Resumo

Ao cadastrar uma senha com 72 caracteres, o sistema apresenta uma mensagem informando que a quantidade não é aceita, mas permite o usuário cadastrar a nova senha

---

# 2. Descrição Detalhada

Ao cadastrar uma senha com 72 caracteres, o sistema apresenta uma mensagem informando que a quantidade não é aceita, mas permite o usuário cadastrar a nova senha. A mensagem apresentada informa que a nova senha deve ter MENOS de 72 caracteres, logo, o valor máximo é 71. Mas o sistema permite uma senha com 72.

O sistema falha por 1 caractere no limite máximo.
Não é algo que impacte negativamente o sistema pois o banco de dados é preparado para suportar senhas desse tamanho, mas é um ponto de atenção sobre a confiabilidade das informações apresentadas.


---

# 3. Passos para Reproduzir

1. Acessar a url: besourosistemas.com.br
2. Fazer login no sistema com a conta de testes disponível na base de conhecimento
3. Clicar no botão de configurações no canto inferior esquerdo
4. Selecionar a opção: Gerenciar conta
5. Ir na guia "Segurança"
6. clicar em "trocar senha"
7. Utilizar senha de 72 caracteres

---

# 4. Resultado Esperado

O sistema não deve permitir o cadastro de uma senha acima do limite determinado na regra de negócio. Sendo, então, no maximo 71 caracteres

---

# 5. Resultado Atual

O Sistema permite 1 caractere a mais que o limite estipulado

---

# 6. Ambiente

- SO: Windows 11
- Browser: google chrome
- Ambiente: Produção

---

# 7. Severidade

- [ ] Crítica (sistema inoperante, perda de dados)
- [ ] Alta (funcionalidade principal afetada)
- [X] Média (funcionalidade secundária afetada)
- [ ] Baixa (cosméticos, não impacta funcionalidade)

---

# 8. Prioridade

- [ ] Alta (corrigir imediatamente)
- [ ] Média (corrigir na próxima release)
- [X] Baixa (corrigir quando possível)

---

# 9. Status

- [X] Aberto
- [ ] Em Análise
- [ ] Em Correção
- [ ] Resolvido
- [ ] Fechado
- [ ] Reaberto

---

# 10. Responsável

Davi

---

# 11. Links para Evidências

- Vídeos: [TC-005-teste de senha.mp4]

---

# 12. Observações

Possível inconsistência entre a mensagem de validação apresentada ao usuário e a regra efetivamente implementada no sistema.

---

# 13. Data de Relato

18/05/2026

---

# 14. Data de Resolução

...