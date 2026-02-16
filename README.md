# 🎵 INAM-Music

A premium, fully responsive music streaming web application built with modern web technologies. Experience seamless playback, dynamic categorization, and an immersive user interface designed for music lovers.

## 🌟 Features

-   **Responsive Design**: optimized for all screen sizes (Mobile, Tablet, Desktop).
-   **Dynamic Music Categories**: Explore Latest releases, 90's Hits, Bollywood chartbusters, Marathi classics, and Devotional melodies.
-   **Immersive Player**: Full-screen player with album art support, progress bar, shuffle/repeat controls, and volume management.
-   **Lyrics Integration**: View synchronized lyrics directly within the app.
-   **Social Sharing**: Custom share modal for easy sharing on WhatsApp, X (Twitter), Facebook, etc.
-   **Authentication Flow**: Interactive Sign-In/Sign-Up overlays for a personalized experience.
-   **Playback Controls**: Play/Pause, Next/Previous track navigation with keyboard shortcuts support.
-   **Visual Effects**: Glassmorphism UI elements, smooth transitions, and engaging animations.

## 🚀 Tech Stack

-   **Frontend Framework**: HTML5, SCSS (Sass), Vanilla JavaScript (ES6+).
-   **Styling**: Bootstrap 5 + Custom CSS/SCSS (Modular architecture).
-   **Build Tool**: Vite (Fast HMR & Optimized Builds).
-   **Icons**: Bootstrap Icons.

## 🛠️ Installation & Setup

Follow these steps to set up the project locally:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/krishnakamble759/INAM-Music.git
    cd INAM-Music
    ```

2.  **Install Dependencies**
    Ensure you have [Node.js](https://nodejs.org/) installed.
    ```bash
    npm install
    ```

3.  **Run Development Server**
    Start the local development server:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the link shown in the terminal (usually `http://localhost:5173`).

4.  **Build for Production**
    To create a production-ready build:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
INAM-Music/
├── public/              # Static assets (images, icons)
├── src/
│   ├── scss/            # SCSS source files (variables, components, etc.)
│   │   ├── _variables.scss
│   │   ├── _signin.scss
│   │   ├── _playback_auth.scss
│   │   ├── _more_options.scss
│   │   ├── _lyrics.scss
│   │   └── style.scss   # Main entry point for styles
│   ├── js/              # JavaScript logic
│   │   └── main.js      # Core application logic
│   └── ...
├── index.html           # Main HTML structure
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

-   **Bootstrap** for the robust grid system and utility classes.
-   **Vite** for the lightning-fast development experience.
-   **Google Fonts** (Outfit) for typography.
