import "./loadEnv.js";
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { serve } from '@hono/node-server';

const app = new Hono();

// API routes
app.get('/_api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files
app.use('/*', serveStatic({ root: './dist' }));

// Catch-all route for SPA
app.get("*", async (c, next) => {
  const p = c.req.path;
  if (p.startsWith("/_api")) {
    return next();
  }
  return serveStatic({ path: "./dist/index.html" })(c, next);
});

// Export for Vercel
export default app;

// Local development server
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3344;
  serve({ fetch: app.fetch, port });
  console.log(`Running at http://localhost:${port}`);
}
      