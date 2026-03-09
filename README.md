# Rakesh History - Indian History Books

A web application showcasing 10 popular books about Indian history.

## Features

- 📚 Browse Indian history books with cover images
- 📖 View detailed book information in a modal
- 📱 Mobile-first responsive design
- 🎨 Modern UI with Bootstrap 5

## Development

To start the development server with hot reload:

```bash
npm run dev
```

This starts:
- Vite dev server (port 5173) - serves the React app + proxies API requests
- Express backend server (port 3001) - provides API endpoints

## Production

To build the app for production:

```bash
npm run build
```

### Previewing the Production Build

To preview the production build (serving both the React app AND the API):

```bash
npm run preview:prod
```

Or equivalently:

```bash
NODE_ENV=production npm start
```

This starts the Express server in production mode, which serves both the static React files from `dist/` AND provides the API endpoints.

**Note:** Do NOT use `npm run preview` - this only serves the static React files without the API proxy, so the app will show errors when trying to fetch book data.

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book by ID
- `GET /api/health` - Health check endpoint

## Database

The application uses PostgreSQL with Prisma ORM. Books are stored in the `Book` table.

To view or modify the database schema, see `prisma/schema.prisma`.

## Technology Stack

- Frontend: React 19 + Vite
- UI Framework: React Bootstrap 5
- Backend: Express.js
- Database: PostgreSQL with Prisma ORM
- Routing: React Router v7