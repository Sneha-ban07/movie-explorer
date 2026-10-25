# 🎬 Movie Explorer

A simple movie discovery application built with **React.js** and powered by the **TMDB API**. Browse popular movies, search for your favorites, and maintain a personal watchlist using localStorage.

## ✨ Features

- **Popular Movies:** Fetch and display trending/popular movies from TMDB.
- **Movie Search:** Search for movies by title.
- **Add to Favorites:** Save movies to your favorites list.
- **Remove Favorites:** Easily remove movies from your list.
- **Persistent Storage:** Favorites are stored in localStorage, so they remain saved even after refreshing the page.

## 📄 Pages

- **Home:** Displays popular movies by default and allows users to search for movies.
- **Favorites:** Displays all saved movies with the option to remove them.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3
- TMDB REST API
- React Router
- Browser LocalStorage

## 🧠 React Concepts Practised

This project was built to strengthen my understanding of React fundamentals, including:

- Functional Components and Props
- `useState` – Managing component state
- `useEffect` – Handling API calls and side effects
- `useContext` / Context API – Global favorites management
- React Router – Client-side navigation
- Conditional Rendering
- List Rendering using `.map()`
- Event Handling
- Fetching data from REST APIs

## ⚙️ Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/movie-explorer.git
cd movie-explorer
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure TMDB API**

Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Get your API key from [TMDB](https://www.themoviedb.org/settings/api).

Make sure your API configuration uses the same environment variable name.

**4. Run the application**

```bash
npm run dev
```

## 📌 Note

This is a learning project focused on understanding React fundamentals, API integration, state management, and browser storage.

Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). This project is not endorsed or certified by TMDB.
