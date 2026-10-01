# Jhennyfer Videomaker

Portfólio de videomaker, fotografia e criação de conteúdo da Jhennyfer.

Site em React + Vite com CSS próprio (sem framework) e ícones do lucide-react. A identidade visual é de "sala escura": fundo preto quente, grão de filme, visor de câmera no hero e vermelho REC como destaque.

## Desenvolvimento

```bash
npm install
npm run dev
```

Outros comandos:

- `npm run build`: gera a versão de produção em `dist/`.
- `npm run lint`: roda o oxlint.
- `npm run imagens`: converte as fotos originais de `originais/public-imagens/` (fora do git) em WebP dentro de `public/imagens/` e gera a `og-image.jpg`.

## Onde editar o conteúdo

- `src/data/contato.js`: WhatsApp, mensagem padrão e Instagram.
- `src/data/portfolio.js`: fotos do portfólio e categorias (`posicao` ajusta o enquadramento).
- `src/data/precos.js`: tabela de valores.
- `src/data/videos.js`: vídeos do YouTube (`tipo: 'youtube'`) ou links com capa. Com a lista vazia, aparece o bloco "em breve".

## Animações

- A abertura (contagem 3-2-1) toca uma vez por sessão do navegador.
- Com "reduzir movimento" ativado no sistema, a abertura, o cursor e as animações contínuas ficam desligados.
- O parallax do hero, a barra de progresso e o playhead da linha do tempo usam scroll-driven animations. Em navegadores sem suporte, o playhead anima uma vez ao aparecer e o restante fica estático.
