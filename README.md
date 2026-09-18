# Sweet Treat Bakery

A simple multi-page bakery website built with HTML and CSS. The site presents the bakery, menu items, online ordering, and contact details.

## Pages

- `Home.html` - bakery introduction, goals, values, and team information
- `About.html` - bakery story, customer values, and team section
- `Our Menu.html` - cakes, croissants, donuts, macarons, and cupcakes
- `Order Online.html` - customer order form
- `Contact.html` - bakery contact details and message form
- `style.css` - shared styles for every page
- `images/` - food and bakery photographs

## How To Run

### Open directly

Open `Home.html` in a web browser. Use the navigation links to move between pages.

### Run with a local server

From the project folder, run one of these commands:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/Home.html> in your browser.

If Python is unavailable and Node.js is installed, you can use:

```bash
npx serve .
```

## CSS Overview

All pages load the shared stylesheet with:

```html
<link rel="stylesheet" href="style.css">
```

The stylesheet includes:

- Global box sizing, spacing resets, typography, and page colors
- Sticky navigation with hover transitions
- Responsive page width using `width: 90%` and `max-width: 1100px`
- Styled headings, paragraphs, sections, forms, and footer links
- Bakery images with rounded corners, borders, shadows, and hover effects
- Menu layout and product image styling through `.menu-page`, `.menu-section`, and `.category`
- Page-specific styles such as `.home-page`, `.about-page`, `.values`, and `.team`
- Animations including `slideDown`, `fadeIn`, `bounceTitle`, and image transitions

## Adding Images

Place new images inside the `images` folder and reference them with a relative path:

```html
<img src="images/example.jpg" alt="Description of the image">
```

Use descriptive `alt` text so the images remain accessible.

## Forms

The order and contact forms currently demonstrate the front-end layout. They need a real server-side endpoint or form service before submitted information can be stored or emailed.

## Browser Support

The project uses standard HTML and CSS and should work in current versions of Chrome, Edge, Firefox, and Safari.
