# Boss Mode → Cloudflare Pages — Step-by-Step

> Total time: ~30 minutes of clicking.
> DNS propagation after: 5 min – 24 h (usually under an hour).
> Cost: $0/month. Free SSL. No card required.

---

## Phase 0 — What you'll end up with

- `drinkbossmode.net` and `www.drinkbossmode.net` both serve your site over HTTPS
- DNS managed inside Cloudflare (not GoDaddy anymore — GoDaddy still owns the registration, that's fine)
- Pushing updates = drag the folder onto Cloudflare again, ~30 seconds to deploy

You will need: your GoDaddy login, a new Cloudflare account (free), and the project files zipped up.

---

## Phase 1 — Bundle the site into a zip

Ask me in chat: **"package the site for Cloudflare"**

I'll create a ZIP with `site/index.html` at the root (so Cloudflare serves the homepage at `/`) and all the assets in the right places. Save it to your desktop. **Don't double-click to extract** — Cloudflare wants the zip OR the unzipped folder, your choice.

---

## Phase 2 — Create your Cloudflare account

1. Go to **https://dash.cloudflare.com/sign-up**
2. Enter an email + password. Use an email you'll keep checking — Cloudflare emails you DNS verification confirmations later.
3. Verify the email when their message arrives.
4. **Skip** any plan-picker prompts; the free plan is what you want. You can ignore the "add a website" CTA on the dashboard for now — we'll come back to it.

---

## Phase 3 — Deploy the site to Cloudflare Pages

1. In the Cloudflare dashboard, find **Workers & Pages** in the left sidebar (it's near the top).
2. Click the **Pages** tab at the top of that section.
3. Click **Create application** → **Upload assets** tab → **Create a new project**.
4. **Project name:** type `bossmode` (lowercase, no spaces). This becomes a `bossmode.pages.dev` URL temporarily — we'll override it with your real domain in Phase 5.
5. **Production branch:** leave as `main` (it's irrelevant for direct uploads).
6. Click **Create project**.
7. On the next screen, **drag your zip file (or unzipped folder) onto the upload area.** Wait for the upload to finish — there's a progress bar.
8. Click **Deploy site**.

After ~30 seconds you'll see a green "Success!" screen with a link like `https://bossmode.pages.dev`. **Click it. Confirm the site looks right.** If anything's broken, screenshot it and tell me — easier to fix now than after DNS is pointed.

---

## Phase 4 — Add `drinkbossmode.net` as a Cloudflare site

This step moves DNS authority for the domain from GoDaddy onto Cloudflare. Cloudflare will become responsible for telling the internet where `drinkbossmode.net` lives.

1. In the Cloudflare dashboard, click the Cloudflare logo (top-left) to go home.
2. Click **+ Add a site** (top of the page).
3. Type `drinkbossmode.net` → Continue.
4. Pick the **Free** plan → Continue.
5. Cloudflare will scan your existing GoDaddy DNS records. **Review the list** — anything important like an MX record for email? If you don't have email forwarding set up on this domain, the list will be mostly empty. Click **Continue**.
6. Cloudflare now shows you **two nameservers**, like:
   ```
   adam.ns.cloudflare.com
   tia.ns.cloudflare.com
   ```
   (Yours will be different — they're randomly assigned. **Keep this tab open**, you need these values in the next phase.)

---

## Phase 5 — Point GoDaddy at Cloudflare's nameservers

This is the only GoDaddy step. After this, GoDaddy stops controlling DNS for your domain.

1. Open a **new tab** → log in at **godaddy.com**.
2. Top-right avatar → **My Products**.
3. Find `drinkbossmode.net` → click the **DNS** button (or **Manage DNS** if that's what shows).
4. Scroll down to a section called **Nameservers**. Click **Change**.
5. You'll see two options. Pick **"I'll use my own nameservers"** (sometimes labeled "Enter my own nameservers" or "Custom").
6. Two text fields appear. Paste in **the two nameservers Cloudflare gave you** in Phase 4. (Lowercase, no trailing dots, no spaces.)
7. Click **Save**.
8. GoDaddy may show a warning: *"Changing nameservers can affect your services."* That's expected. Confirm.

GoDaddy now hands DNS off to Cloudflare. Internet propagation takes 5 minutes to a few hours; sometimes up to 24h.

---

## Phase 6 — Tell Cloudflare you've made the switch

1. Back in the Cloudflare tab from Phase 4, scroll down and click **Done, check nameservers** (or **Verify nameservers**).
2. Cloudflare will check immediately. **If it says "Pending,"** that's normal — DNS hasn't propagated yet. You'll get an email when it has. Close the tab; check email later.
3. Once verified, the domain page in Cloudflare turns green/active. You're done with the DNS handoff.

---

## Phase 7 — Connect `drinkbossmode.net` to your Pages deployment

Now the domain is on Cloudflare and the site is on Cloudflare — wire them together.

1. Go back to **Workers & Pages → Pages → bossmode** (your project).
2. Top tab bar: click **Custom domains**.
3. Click **Set up a custom domain**.
4. Type `drinkbossmode.net` → Continue.
5. Cloudflare automatically creates the DNS record (`CNAME` pointing to your `bossmode.pages.dev`) — click **Activate domain**.
6. **Repeat** for `www.drinkbossmode.net`. (Type that exact value, including `www.`, then Continue → Activate.) This makes both `bossmode.net` and `www.bossmode.net` work.

Free SSL provisions automatically — usually within 60 seconds, sometimes up to 15 minutes.

---

## Phase 8 — Test it

Open a fresh browser tab (or incognito) and try each:

- `https://drinkbossmode.net` — should load with a padlock
- `https://www.drinkbossmode.net` — should load with a padlock
- `http://drinkbossmode.net` — should auto-redirect to https://

If any of those fail with "site can't be reached," DNS just hasn't propagated yet. Wait 30 minutes, try again. If it fails after 24 hours, message me with the error.

---

## Phase 9 — Privacy hardening (5 minutes, recommended)

You're already running on Cloudflare's privacy-respecting infrastructure. A few extra clicks tighten it further:

1. **SSL/TLS → Overview:** set to **"Full (strict)"** — encrypts the connection between Cloudflare and Pages, not just between visitor and Cloudflare.
2. **SSL/TLS → Edge Certificates:** turn on **"Always Use HTTPS"** and **"Automatic HTTPS Rewrites"**. Set **Minimum TLS Version** to **1.2**.
3. **Security → Settings:** Security level **Medium** is fine for a marketing site. **Bot Fight Mode** ON — blocks bot scrapers without affecting humans.
4. **Analytics & Logs → Web Analytics:** Cloudflare offers privacy-respecting, cookieless analytics. **Don't** add this until you've decided you want page-view data — it's still tracking, just less invasive than GA. The default of "no analytics" is the most private choice.
5. **Speed → Optimization:** turn on **Auto Minify** for HTML/CSS/JS, **Brotli** compression. (Speed, not privacy, but free.)

---

## How to update the site later

When you ask me to change something on the site:

1. After my changes are done, ask me: **"package the site for Cloudflare"**
2. Drag the new zip onto **Workers & Pages → bossmode → Create deployment**.
3. Live in ~30 seconds. The previous deployment stays accessible at a `https://<hash>.bossmode.pages.dev` URL — useful if you ever need to roll back.

---

## What didn't change

- **GoDaddy still owns the domain registration.** You'll still renew the domain through GoDaddy each year. We just moved the *DNS pointing* to Cloudflare.
- **No email setup.** If you set up email on the domain later (e.g. `hello@drinkbossmode.net`), you'll add an MX record in Cloudflare DNS at that time. Easy when you get there.

---

## Common stumbling blocks

**"Cloudflare says my nameservers haven't propagated."**
Wait. DNS is global; it takes time. The typical wait is 30 min – 4 h. If it's been 24h, log into GoDaddy and re-check that the nameservers were actually saved (sometimes GoDaddy's UI silently fails to save).

**"I see Cloudflare's default page, not my site."**
You missed Phase 7 (Custom domains). The domain is on Cloudflare but isn't pointed at your Pages project yet. Repeat Phase 7.

**"SSL warning when I visit the site."**
Cloudflare's edge certificate is still provisioning. Wait 15 minutes. If still broken, go to **SSL/TLS → Edge Certificates** and confirm there's a certificate for both `drinkbossmode.net` and `*.drinkbossmode.net`.

**"It works on https:// but not www."**
You only added one of the two custom domains. Go back to Phase 7 and add the `www` one too.

---

## When to upgrade (and away from this setup)

This setup is great for a pre-launch marketing site. It scales to ~unlimited traffic for free. You'll outgrow it when:

- **You start taking real orders.** Move to Shopify or wire Stripe Checkout into this site.
- **You want a CMS** (e.g. blog posts that non-technical people can publish). Move the site to a setup like Astro + a headless CMS, still hosted on Pages.

Until then, this is the move.
