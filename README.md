# watch
creating a base file

---

# watch-frontend (base)

This is a minimal Next.js frontend scaffold replicating the Ethos Watches layout for the backend team to integrate with.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev:

```bash
npm run dev
```

Deployment (Vercel)

- Connect this GitHub repository to Vercel and set the environment variable `NEXT_PUBLIC_API_BASE` to your backend base URL (e.g. `https://api.example.com`).
- Vercel will build and publish automatically.

Backend API contract (required endpoints)

- `GET /api/products` — returns JSON array of products: [{id,title,price,image}]
- `GET /api/products/:id` — product details
- `POST /api/orders` — create order (payload: cart, customer)

Notes for backend dev

- Image URLs provided by backend should be absolute or hosted on a CDN and included in the `image` field.
- Use CORS to allow requests from the frontend domain.

Push to repo

```bash
git remote add origin https://github.com/spidy-senpai/watch.git
git branch -M main
git add .
git commit -m "Initial Next.js frontend scaffold"
git push -u origin main
```

