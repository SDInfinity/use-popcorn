# usePopcorn - Movie App in React

![usePopcorn Preview](screenshot.png)

usePopcorn is a movie app built with React that allows you to discover, rate, and track the movies you've watched. With a clean and intuitive interface, usePopcorn simplifies your movie-watching experience.

## Features

- **Search Movies**: Easily search for your favorite movies by title and see the number of results found.
- **View Movie Details**: Get detailed information about a movie, including its plot, release date, and more.
- **Rate Movies**: Rate movies on a scale of 1 to 5 stars based on your enjoyment.
- **Track Watched Movies**: Add movies to your watched list to keep a record of what you've seen.
- **Watched Movie Summary**: See a summary of the total movies you've watched, your average rating, and total watch time.

## Components

The project is organized into several reusable components:

- **Navbar**: The navigation bar for searching movies and displaying the number of results found.
- **MovieList**: Display a list of movies based on your search query.
- **Movie**: Render detailed information about a single movie.
- **WatchedMovieList**: List of movies you've watched.
- **WatchedMovie**: Display details of a watched movie.
- **StarRating**: A component for rating movies.
- **ErrorMessage**: Handle and display errors gracefully.
- **Loader**: A loading spinner for a smoother user experience.
- **ToggleButton**: Allows you to add or remove movies from your watched list.

## OMDB API Integration

usePopcorn leverages the OMDB API to fetch movie data, including details and search results. This allows you to access up-to-date information about your favorite movies.

## useState and useEffect

- **useState**: The app uses the `useState` hook to manage component state efficiently, enabling dynamic updates to the user interface.
- **useEffect**: `useEffect` is employed for handling side effects, such as fetching data from the OMDB API, ensuring a seamless user experience.


