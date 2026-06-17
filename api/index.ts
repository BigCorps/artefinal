import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Em produção no Vercel, os arquivos estáticos ficam na raiz do output
// Mas como estamos usando Serverless Functions, o Vercel cuida dos estáticos
// se não houver rota correspondente. No entanto, para garantir o roteamento SPA:

const staticPath = path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
