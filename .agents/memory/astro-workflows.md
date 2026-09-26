---
name: Astro managed workflows
description: Astro auto-backgrounding can stop the managed preview service.
---

Astro 7 detects agent environments and may automatically detach its dev server. Keep the server in the foreground for managed workflows.

**Why:** A successful-looking startup exited the workflow and the preview returned 502 because the detached server did not remain available.

**How to apply:** When adjusting Astro dev commands or upgrading Astro, preserve foreground behavior. The installed CLI's `--ignore-lock` option disables agent auto-backgrounding; check CLI help and current behavior on future upgrades.