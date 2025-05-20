# FSW Barber 2.0

Projeto realizado durante o evento Full Stack Week. Se consiste em um **sistema de agendamento para barbearias**, desenvolvido com um design **mobile-first** para melhor experiência em dispositivos móveis. O sistema permite criar agendamentos com direito a autenticação com Google provider. O status do agendamento (**confirmado, finalizado**) é gerenciado no banco de dados.

## Tecnologias Principais

O projeto foi desenvolvido com as seguintes tecnologias:  

- Date fns
- Husky
- Next.js
- Next Auth 
- Prisma ORM
- PostgreSQL
- React
- Shadcn
- Sonner
- Tailwind
- Zod

## Banco de Dados  

O projeto utiliza **Prisma ORM** para gerenciar a persistência de dados. A ferramenta interage com o serviço do banco PostgreSQL hospedado na plataforma [Neon](https://neon.tech/).

![Image](https://github.com/user-attachments/assets/88d4fbce-ed1b-4ac4-9d80-2b9ef8958598)

## Funcionalidades

- Login com plataforma Google, gerenciado pelo Next Auth
- Agendamento de serviços considerando data e hora
- Consultar histórico e status de agendamentos de serviços/barbearias armazenados em banco.

## Imagens

![Image](https://github.com/user-attachments/assets/4f2986be-72ab-4a4a-b6b3-debf831037ba)

![Image](https://github.com/user-attachments/assets/4995049b-3136-408c-8b7b-d5539f425347)

![Image](https://github.com/user-attachments/assets/b6e86f3b-ec71-45ca-bf02-1ad7dd668ecb)

![Image](https://github.com/user-attachments/assets/386f213a-45f5-40aa-8802-2ecdae0861a7)

![Image](https://github.com/user-attachments/assets/453bd149-1bdc-466b-8fbc-82164abf75a1)

![Image](https://github.com/user-attachments/assets/37d0520f-ea86-4221-8c14-c0b23fa38429)

## Como Rodar o Projeto 

###  Crie um arquivo .env na raiz do projeto. Substitua "******" por valores reais:
```sh
DATABASE_URL=******
GOOGLE_CLIENT_ID=******
GOOGLE_CLIENT_SECRET=******
```

###  Instale as dependências:
```sh
npm install
```

###  Gere o cliente prisma com o comando:
```sh
npx prisma generate
```

###  Inicie o servidor com o script:
```sh
npm run dev
```

###  Acesse a URL:
```sh
http://localhost:3000/
```
