Profile Card Project

A clean, responsive multi-page personal profile site built with HTML, CSS, and JavaScript, following HNG’s Stage 1 design and functionality specifications.
This project demonstrates layout mastery, accessibility, form validation, semantic HTML, and keyboard-friendly navigation.

🧭 Table of Contents

Overview

Features

Installation

Usage

Accessibility

Technologies Used

License

🧩 Overview

This project extends the Stage 0 single-page Profile Card into a multi-page web application.
It now includes:

Home Page (index.html) — Profile card displaying:

User avatar

Name and bio

Join time (updated live via JavaScript)

Social links

Hobbies and dislikes

About Page (about.html) — A reflective page showcasing:

Bio and program goals

Areas of low confidence

A note to your future self

Extra thoughts

Contact Page (contact.html) — A simple contact form featuring:

Full name, email, subject, and message fields

Built-in form validation using JavaScript

Success and error feedback for user interaction

Each page is fully responsive, semantic, and accessible — designed to meet the HNG technical standards.

⚙️ Features

✅ Multi-page layout — Includes Home, About, and Contact pages

🧭 Navigation bar — Seamlessly links all pages

♿ Accessibility-first — Semantic tags, proper labels, and keyboard support

📱 Responsive design — Optimized for desktop, tablet, and mobile

🧩 Form validation — Checks required fields, valid email format, and message length

🕒 Dynamic time display — Shows current time in milliseconds (Home page)

💅 Clean styling — Flexbox-based, with consistent spacing, shadows, and colors

🚀 Installation

Clone the repository:

git clone git@github.com:jiggyblocc/profile-card.git


Navigate to the project folder:

cd profile-card


Open the project in your browser:

open index.html

🧠 Usage

Open index.html to view your profile card.

Open about.html to view your reflections.

Open contact.html to test the contact form.

The form validates input:

All fields are required.

Email must be valid (e.g., name@example.com).

Message must be at least 10 characters long.

A success message appears when the form is correctly filled.

♿ Accessibility

All input fields include <label> elements linked via for attributes.

Error messages use aria-describedby for screen readers.

Keyboard navigation is fully supported (use Tab to move through links/fields).

Semantic HTML elements (<main>, <section>, <nav>, <header>, <footer>) improve readability and accessibility.

💻 Technologies Used

HTML5 — Semantic and accessible structure

CSS3 — Responsive, modern layout using Flexbox

JavaScript (ES6) — DOM manipulation and form validation

Font Awesome — For clean social media icons

📜 License

This project is open-source and free to use for learning and personal development.
This project is open-source and free to use for learning and personal projects.
