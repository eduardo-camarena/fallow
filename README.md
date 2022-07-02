This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
docker-compose up -d
```

Then you will need to access the mariadb container and run the commands from the `sql-scripts/init.sql` script.

After that you will be able to run the database migrations with the following command:

```
npx prisma migrate dev
```
