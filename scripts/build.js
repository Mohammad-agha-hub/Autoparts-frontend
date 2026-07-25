#!/usr/bin/env node
/* ============================================================
   AFJ AUTO PARTS — FRONTEND BUILD
   A browser cannot read environment variables, so the API URL is
   baked into the shipped files here, at build time.

   Reads (process.env first, then a local .env file):
     API_BASE_URL        required for a production build — the
                         deployed backend origin, e.g.
                         https://afj-api.onrender.com
     LOCAL_API_BASE_URL  optional, default http://localhost:3000

   Generates:
     js/config.js   from js/config.template.js
     _headers       from _headers.template  (CSP connect-src)

   Both generated files are gitignored. Run with --dev to allow a
   missing API_BASE_URL (localhost development only).
   ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const isDev = process.argv.includes("--dev");

/* ---- Read .env without pulling in a dependency ---- */
function loadEnvFile(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const raw of fs.readFileSync(file, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const fileEnv = loadEnvFile(path.join(ROOT, ".env"));

/** process.env wins, so host dashboard variables override .env. */
function env(key, fallback = "") {
  const value = process.env[key] || fileEnv[key] || "";
  return value.trim() || fallback;
}

const stripSlash = (url) => url.replace(/\/+$/, "");

const API_BASE_URL = stripSlash(env("API_BASE_URL"));
const LOCAL_API_BASE_URL = stripSlash(
  env("LOCAL_API_BASE_URL", "http://localhost:3000"),
);

if (!API_BASE_URL) {
  const msg =
    "API_BASE_URL is not set. Set it to your deployed backend origin " +
    "(e.g. https://afj-api.onrender.com) in your host's environment " +
    "variables or in frontend/.env";
  if (!isDev) {
    console.error(`❌ ${msg}`);
    process.exit(1);
  }
  console.warn(`⚠️  ${msg}\n   Dev build — using ${LOCAL_API_BASE_URL}.`);
}

if (API_BASE_URL && !/^https?:\/\//.test(API_BASE_URL)) {
  console.error(
    `❌ API_BASE_URL must start with http:// or https:// — got "${API_BASE_URL}"`,
  );
  process.exit(1);
}

function render(templateName, outputName, replacements) {
  const templatePath = path.join(ROOT, templateName);
  const outputPath = path.join(ROOT, outputName);
  let text = fs.readFileSync(templatePath, "utf8");
  for (const [token, value] of Object.entries(replacements)) {
    text = text.split(token).join(value);
  }
  fs.writeFileSync(outputPath, text);
  console.log(`   wrote ${outputName}`);
}

/* ---- js/config.js ---- */
render("js/config.template.js", "js/config.js", {
  __API_BASE_URL__: API_BASE_URL,
  __LOCAL_API_BASE_URL__: LOCAL_API_BASE_URL,
});

/* ---- _headers (CSP must allow connections to the API) ----
   Only the deployed origin goes in: static hosts serve these headers, local
   dev servers ignore the file entirely. */
render("_headers.template", "_headers", {
  __API_ORIGINS__: API_BASE_URL || LOCAL_API_BASE_URL,
});

console.log(`✅ Frontend built — API: ${API_BASE_URL || LOCAL_API_BASE_URL}`);

/* Vercel reads vercel.json from the repository, not from build output, so its
   CSP cannot be generated here — it has to be committed. */
if (fs.existsSync(path.join(ROOT, "vercel.json")) && API_BASE_URL) {
  const committed = fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8");
  if (!committed.includes(API_BASE_URL)) {
    console.warn(
      `\n⚠️  vercel.json's connect-src does not mention ${API_BASE_URL}.\n` +
        "   If you deploy on Vercel, add it there and commit — Vercel ignores _headers.\n" +
        "   On Netlify / Cloudflare Pages you can ignore this.",
    );
  }
}
