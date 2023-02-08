import { LightningElement, api } from 'lwc';

export default class MoviesLWC extends LightningElement {
    library;
    movies;
    favourites;

    handleSearchMovies(){
        library = false;
        movies = true;
        favourites = false;
    }

    handleViewLibrary(){
        library = true;
        movies = false;
        favourites = false;
    }

    handleViewFavourites(){
        library = false;
        movies = false;
        favourites = true;
    }
}