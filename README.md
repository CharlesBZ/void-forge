# Void Forge: Next.js 13, Socket.io, Tailwindcss, Prisma, MySQL 

Features:

- Instant messaging in real-time powered by Socket.io
- Share attachments seamlessly using UploadThing
- Edit and delete messages in real-time across all users
- Establish Text, Audio, and Video call Channels
- Facilitate one-on-one conversations among members
- Enable one-on-one video calls between members
- Manage members effectively with options for kicking and role changes (Guest/Moderator)
- Generate unique invite links and implement a fully functional invite system
- Load messages dynamically in batches of 10 with infinite scrolling (@tanstack/query)
- Build and customize servers to suit specific needs
- Design an appealing UI using TailwindCSS and ShadcnUI
- Ensure full responsiveness and mobile-friendly UI
- Provide Light/Dark mode for user preference
- Implement Websocket fallback: Polling with alerts
- Utilize ORM through Prisma
- Employ a MySQL database via Planetscale
- Implement secure authentication using Clerk

### Prerequisites

**Node version 20.5.1

```shell
git clone https://github.com/CharlesBZ/void-forge.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Prisma Setup

Add MySQL Database (PlanetScale was used)

```shell
npx prisma generate
npx prisma db push
npx prisma studio

```

### Run App

```shell
npm run dev
```
