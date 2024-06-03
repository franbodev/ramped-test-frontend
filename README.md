---
page_type: Production
products:
    - Admin Page
languages:
    - typescript
extensions:
    contentType: Production
    technologies:
        - Next.js
        - Redux
    platforms:
        - TS
    createdDate: 03/06/2024
---

# Ramped Frontend

## Prerequisites

- Node.js >= 18.x

## Setup Configuration File

- Copy and fill out the env file

```sh
cp .env.example .env
```

## Setup PM2 Monitoring

- Install pm2 globally 

    * Install PM2 Runtime on your server: `npm install -g pm2`

- link to pm2.io for monitoring (Optional)

    * Link PM2 to PM2.io: `pm2 link <public-key> <private-key>`

- Start a project

## Run the project

- Install project dependencies
    `npm install`
- Start development server
    `npm run dev`
- Build Server for production
    `npm run build`
- Start/Stop prod server with pm2 (Make sure project needs to be built first before starting)
    `npm start`
    `npm stop`

## Code Formatting

Please format code using `npm run format` before git push.

## Resources

### Typescript

This project is written using [Typescript](http://www.typescriptlang.org/).

### PM2 for monitoring

[PM2.io](https://pm2.io)

### nodemon for hot-reload in development

## Copyright

Copyright (c) 2024 Ramped. All rights reserved.
