# Boss Mode — Hosting & Domain Setup (GoDaddy)

> **The website is in `site/`** — that's the folder you upload to a host.
> **Your domain is `drinkbossmode.net`** — that's what you point at the host.
> Below are three options, easiest to most flexible.

---

## What you're working with

The site is a static, single-page app. There's no server, no database, no checkout — just HTML, CSS, JS, and images. That means you can host it anywhere that serves files, and it costs $0–$10/month.

```
What you upload:
  site/                ← the whole folder
  assets/              ← all the can + facet images
  colors_and_type.css  ← shared brand styles
  fonts/               ← brand fonts (Orbitron, Barlow Condensed)
```

When uploaded, the homepage will be at `site/index.html`. Most hosts can rewrite `bossmode.net/` → `bossmode.net/site/index.html` automatically (see steps below).

---

## OPTION 1 (recommended): Netlify Drop — 5 minutes, free

This is the fastest way to get drinkbossmode.net live. Netlify is a static-site host; Drop is their no-account drag-and-drop tool.

### Step 1 — Bundle the site

Ask me to "package the site for download" and I'll give you a single ZIP with everything in the right structure (site files at the root so the homepage works).

### Step 2 — Drop it on Netlify

1. Go to **https://app.netlify.com/drop**
2. Drag the unzipped folder onto the page.
3. Within 30 seconds you'll get a temporary URL like `radiant-puffin-1234.netlify.app`. Open it — confirm the site looks right.
4. (Optional, free) Sign up for a Netlify account and click **"Claim site"** — this lets you keep the site live, give it a custom name, and connect your domain.

### Step 3 — Point drinkbossmode.net at Netlify

In **Netlify** → Site settings → Domain management → **Add custom domain** → type `drinkbossmode.net` → continue. Netlify will tell you it needs DNS records.

In **GoDaddy**:
1. Sign in at godaddy.com.
2. Top right → **My Products** → find `drinkbossmode.net` → click **DNS** (or **Manage DNS**).
3. You'll see a table of records. We're going to change two of them.
4. Find the row where **Type = A** and **Name = @**. Click the pencil icon. Change **Value** to `75.2.60.5` (Netlify's load balancer). Save.
5. Find the row where **Type = CNAME** and **Name = www**. Click the pencil icon. Change **Value** to `apex-loadbalancer.netlify.com` (or whatever Netlify shows you in their docs — they sometimes give you a unique target like `friendly-name.netlify.app`). Save.
6. If a row doesn't exist, click **Add** and create it.

DNS takes 5 minutes to a few hours to propagate. Netlify will email you when it's verified, and they'll auto-issue a free SSL certificate so the site loads at `https://drinkbossmode.net`.

**Why this is the move:** free, fast, gives you HTTPS automatically, and you can push updates by re-dragging the folder.

---

## OPTION 2: GoDaddy's own hosting — easy but costs ~$6/mo

If you'd rather keep everything inside the GoDaddy account you already have:

1. In GoDaddy → **My Products** → look for "Web Hosting" or "Websites + Marketing." If you don't have one, buy the cheapest **Web Hosting** plan (Economy, ~$6/mo).
2. Once it's provisioned, GoDaddy gives you a **cPanel** or **File Manager**. Open it.
3. Inside, find the `public_html/` folder. Delete anything that's in there.
4. Upload the contents of the `site/` folder + the `assets/`, `fonts/`, and `colors_and_type.css` from this project — preserving the same folder layout as the project.
5. Rename or copy `site/index.html` to `public_html/index.html` so the homepage loads at the root.
6. In GoDaddy → Domains → DNS → make sure `drinkbossmode.net` is pointed at the hosting plan (GoDaddy usually does this automatically when you buy hosting under the same account).

You'll have a working site at https://drinkbossmode.net within 1–24 hours.

**The catch:** updating the site means re-uploading files via cPanel each time. Slower than Netlify.

---

## OPTION 3: Cloudflare Pages — also free, more powerful

Same idea as Netlify but Cloudflare. Use this if you want a Cloudflare DNS setup or anticipate growing into a real codebase.

1. Sign up at **https://pages.cloudflare.com**
2. Click **Create a project** → **Direct upload**.
3. Drag the project folder.
4. Add `drinkbossmode.net` as a custom domain. Cloudflare gives you nameservers.
5. In **GoDaddy** → DNS → **Nameservers** → switch to "I'll use my own nameservers" → paste Cloudflare's two nameservers → save.

This moves DNS hosting from GoDaddy to Cloudflare. GoDaddy still owns the domain registration, but Cloudflare handles routing. Site goes live within ~10 minutes after DNS propagates.

---

## What "fake checkout" looks like to your visitors

The site looks and behaves like a real DTC store — visitors can browse, add to cart, change quantities, switch between subscribe & one-time, and see a running subtotal. When they hit **Checkout** the site shows them a friendly "checkout opens at launch" message.

The cart and waitlist signups are saved in the visitor's own browser (`localStorage`). Nothing is sent to a server, no emails are collected centrally. **If you want to actually collect waitlist emails, the cleanest add is a Netlify Form or a Mailchimp embed** — let me know and I'll wire it in (~5 min of work).

---

## Updating the site later

You'll likely want to make tweaks. Two paths:

- **Netlify / Cloudflare:** drag the new folder onto the same site dashboard. Updates go live in ~30 seconds.
- **GoDaddy hosting:** open File Manager, replace the changed files. Slower but works.

Always test locally first by opening `site/index.html` in your browser.

---

## Pre-flight checklist before you go live

- [ ] Replace placeholder email `hello@drinkbossmode.net` (in `site/AboutPage.jsx` and footer) with a real inbox you can monitor.
- [ ] Add real Instagram / TikTok handles to the footer if you want them clickable (currently placeholder text).
- [ ] Confirm RCT-2 publication status before keeping "+17% strength" / "+21.6% endurance" claims live (the manuscript is currently noted as "submitted" — see `claims/myo-peptide-claims.md`).
- [ ] Decide whether to wire actual email capture (Mailchimp / Netlify Forms / ConvertKit) — the current waitlist saves to the browser only.
- [ ] Add a `favicon.ico` to `site/` for the browser tab icon. (We can generate one from the wordmark.)
- [ ] If you'll send press the URL: confirm the founder copy on the About page reads exactly how you want it quoted.

---

## Common questions

**Q: Do I need to do anything to register the domain?**
You already own `drinkbossmode.net` through GoDaddy — that's done. We're just pointing it.

**Q: How long until people can visit the site?**
The site itself is live the moment you upload it (Netlify/Cloudflare URL works instantly). DNS pointing your domain at it usually takes 15 minutes to a few hours; sometimes up to 24h, rarely longer.

**Q: HTTPS / SSL?**
Netlify and Cloudflare give you a free SSL cert automatically. GoDaddy's hosting includes one with most plans. You should never see a "not secure" warning.

**Q: I want to actually start taking orders later.**
At that point you'll graduate to Shopify, BigCommerce, or a custom Stripe integration. The current site is built so the components and copy can move over without a rebuild — let me know when you're close.

---

## Want me to do any of this for you?

I can:
- Bundle the site into a single self-contained file you can drop on any host
- Wire real email capture (Mailchimp, Netlify Forms, ConvertKit)
- Generate a favicon from the wordmark
- Add a "Coming soon" countdown if you want it more pre-launchy
- Mock up a press kit page with assets for media

Just say which.
