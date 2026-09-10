# Vida Ligera y Saludable

Aplicativo em espanhol para disponibilizar 10 guias complementares de alimentação, saúde e bem-estar.

## Requisitos

- Node.js 22 ou superior
- npm

## Instalação local

```bash
npm install
npm run dev
```

O endereço principal redireciona para `/demo`.

## Rotas

- `/demo`: mostra as 10 capas bloqueadas e abre o pop-up de desbloqueio.
- `/full`: área completa protegida pela senha compartilhada `6240`.

## Links pendentes

Os dois links que serão informados depois ficam centralizados em `src/config/site.ts`:

- `WHATSAPP_NUMBER`: número do WhatsApp do botão de desbloqueio.
- `VIP_WHATSAPP_GROUP_URL`: link do grupo VIP.

## Verificação e produção

```bash
npm run build
npm run start
```
