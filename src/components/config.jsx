export const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
if (!tmdbApiKey) throw new Error(`Expected env var VITE_TMDB_API_KEY`);
