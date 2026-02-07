# Arcane Grimoire - D&D Spell Card Generator

A premium web application for searching D&D 5e spells and generating printable spell cards for your sessions.

## Features

- **Spell Search**: Instant access to the SRD spell database via D&D 5e API.
- **Grimoire Builder**: Select spells to build your personal deck.
- **Print Ready**: Optimized CSS for printing on standard card stock (Standard Magic Card size: 63mm x 88mm).
- **Persistent Storage**: Your deck is saved in your browser's local storage.
- **Magical Design**: A dark, immersive fantasy interface using glassmorphism and gold accents.

## How to Run Locally

You will need `Node.js` and `npm` installed.

1.  Open a terminal in this folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link shown (usually `http://localhost:5173`).

## How to Deploy (Free)

This project is optimized for deployment on **Vercel**.

1.  **Push to GitHub**:
    *   Initialize a git repo: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Push to a new GitHub repository.

2.  **Deploy on Vercel**:
    *   Go to [vercel.com](https://vercel.com) and log in.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
    *   Vercel will automatically detect "Vite" as the framework.
    *   Click "Deploy".

## Usage for Printing

1.  Search for spells and add them to your Grimoire.
2.  Once your deck is ready, press `Ctrl + P` (or Cmd + P on Mac).
3.  The interface will automatically strip away the search bars and backgrounds, leaving you with a clean grid of cards.
4.  **Tip**: In print settings, ensure "Background Graphics" is **unchecked** to save ink (unless you want the card borders), or **checked** if you want the full style. Set margins to "Minimum".
