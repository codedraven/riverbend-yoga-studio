# Riverbend Yoga Studio Website

This is my project for my web development class. I built a small website for a made-up client, Riverbend Yoga Studio. It is just HTML, CSS, and a little JavaScript. No backend or anything fancy.

This is a 4-page static site for a local yoga studio. The idea was to make it simple and welcoming, especially for beginners.

Pages:

- `index.html` - Home, mission, featured class, schedule, breathing audio, hours
- `about.html` - Studio story, instructors, accessibility info, policies
- `services.html` - Class descriptions, pricing, and a little "find a class" picker
- `events.html` - Workshop list and a request-a-spot form

## Features I added

- Same header nav on every page with `aria-current` on the current page
- Responsive image on home with `<picture>` for large / small screens
- Audio player for a guided breathing break
- Class finder on the Classes page. You click a button and it shows you a suggestion. It saves your pick in `localStorage` so it remembers you next time.
- Workshop form on the Events page with HTML validation (`required`, `type="email"`, `minlength`) plus JavaScript checks for name, email, and message. It also saves your name so the form is pre-filled if you come back.
- I tried to keep accessibility in mind with labels, alt text, and fieldsets.

## How to run it

You don't need to install anything.

1. Download or clone this repo
2. Open the folder
3. Double-click `index.html` to open it in your browser

Or if you use VS Code, right-click `index.html` and do "Open with Live Server."

There is no form backend, so submitting the form just validates and stays on the page. It does not actually send anywhere.

## Project structure

```
index.html
about.html
services.html
events.html
styles.css
script.js
media/ - logo, class photos, audio, and video
```

`script.js` is shared by the pages. It handles the class finder buttons and the events form.

## What I learned

This was my first time wiring up JavaScript to an actual form. The hardest part was learning javascript and figuring out github.

## Credits

Images and audio are client-provided practice files for the assignment.
