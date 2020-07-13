# ForteAegis - Viewer
Ui interface for viewing FA data
<br />
https://ForteAegis.netlify.app
<br />

### Built using [Redwoodjs.com](https://redwoodjs.com)


### Setup & Start

- `yarn install` in root directory
- `rw dev` to start the dev mode

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.


### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

To create a development database:

```terminal
rw db up
```

This will create postgres tables from schema at `api/prisma/schema.

If you've made changes to the schema run `rw db save` to generate a migration, and `rw db up` to apply the migration/ generate a new ORM client.
