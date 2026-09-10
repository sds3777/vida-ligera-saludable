# Publicar pelo GitHub

Este projeto é independente e pode ser enviado ao seu repositório atual.

## Instalação no computador

```bash
npm install
npm run dev
```

## Colocar este pacote no repositório existente

1. Faça uma cópia de segurança da pasta atual.
2. Extraia este ZIP.
3. Copie o conteúdo da pasta `vida-ligera-saludable` para a pasta clonada do
   repositório.
4. No Git Bash, dentro do repositório, envie a atualização:

```bash
git add .
git commit -m "Atualiza Vida Ligera y Saludable"
git push origin main
```

## Testar antes de enviar

```bash
npm install
npm run build
npm run dev
```

As rotas principais são `/demo` e `/full`. O acesso atual de `/full` continua
usando a senha compartilhada `6240`.
