# Combat & Survival Academy — v2

Personal installable PWA for weekly combat-training missions, class logging, rota planning and progress tracking.

## v2 changes
- CWI selection/locking removed; the Academy is active immediately.
- Timetable replaced with the new academy schedule (selected sessions up to 3pm).
- Weekly missions are now:
  1. Striking — Muay Thai or Boxing
  2. Grappling — No-Gi, Wrestling or Open Mat
  3. Combat — one additional martial-arts session
  4. Physical Prep — S&C Circuit, Move Strong, Bags & Bells, Bags & HIIT, or Kickboxing & HIIT
- HIIT Circuit and restricted/advanced Muay Thai sessions are excluded from the planner.
- Existing local progress is preserved by keeping the original localStorage key and migrating it to v2.
- Service-worker cache bumped to `csa-v2` so installed apps can receive the update.

## Install/update
Host these files together over HTTPS (for example GitHub Pages). If updating an existing install, replace the existing files in the same repository, wait for Pages to redeploy, then fully close and reopen the installed app. If it still shows the old UI, open the site once in Chrome and refresh, then reopen the app.
