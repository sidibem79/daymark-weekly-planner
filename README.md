# Daymark Weekly Planner

A free, simple weekly planner for time blocking. Give every hour a job, see where your week goes, and copy a good week forward.

**Open it:** https://www.daymarkweekly.app/

![A week planned in Daymark](media/01-week.webp)

## Why I made it

I learned time blocking in a time management training and did it by hand every week, on paper. It worked. Then life got busy and I stopped. I built this to make the habit easier to come back to.

## How to use it

1. **Block your week.** Click or drag on empty time to add a block, then give it a name and a category.
2. **Adjust as you go.** Drag blocks to move them, pull the bottom edge to resize, and tick them off when they're done.
3. **Work on several blocks at once.** Ctrl-click or Shift-click blocks, or drag a box across days, then move, copy, recolor or delete them together.
4. **Reuse good weeks.** Copy this week to next week, or save it as a template.
5. **Send it to your calendar.** Choose **Export → Google Calendar** to save this week as a `.ics` file. In Google Calendar, open **Settings → Import & export** and import it. The same file works in Apple Calendar and Outlook.

On a phone: swipe to move around, tap a block to edit it, and press and hold a block to move it. Let go without moving to start selecting several blocks.

There's a one-minute walkthrough video on the [website](https://www.daymarkweekly.app/#video).

## Your data

Your plan is saved in your own browser, with no account or cloud sync. The hosted site uses Google Analytics for visit statistics and Microsoft Clarity for interaction recordings and heatmaps. Planner text is explicitly masked in Clarity, including blocks, categories, templates, and dialogs. No planner content is passed to custom analytics events. Use **Back up** in the planner to save a copy as a file, and **Restore** to load it on another device. The [privacy policy](https://www.daymarkweekly.app/privacy/) and [terms](https://www.daymarkweekly.app/terms/) have the details.

## Use it offline

The whole planner is one file: [`app/index.html`](app/index.html). Download it and open it in any browser.

## Analytics setup

The hosted site is configured with GA4 Measurement ID `G-5E2LBE1R2H` and Clarity Project ID `yxp6nquhv7`. The GA4 web stream measures pageviews, scrolls, outbound clicks, video engagement, and file downloads; automatic form interactions and site search are disabled.

Set `measurementId` (the GA4 `G-...` Measurement ID) and `clarityProjectId` in the head scripts of **both** `index.html` and `app/index.html`. These are public tracking identifiers, not secrets. Empty IDs leave the corresponding integration disabled.

Analytics loads asynchronously only on HTTPS at `daymarkweekly.app` or `www.daymarkweekly.app`. Local previews, other hosts, and downloaded copies skip analytics. Each page load initializes GA4 once, sending its default pageview, and initializes Clarity once. No custom conversion events are configured.

After deployment, visit the landing page and planner and check GA4 Realtime or Tag Assistant and Clarity's dashboard. Confirm Google Analytics collection requests and Clarity `/collect` requests in browser developer tools, and inspect a planner recording to verify that user text is masked. Vendor dashboard delivery and recording masking must be verified against the configured projects; local checks alone cannot prove them.

## License

[MIT](LICENSE) © 2026 Quebec Mobile. You're free to use, share and change it.
