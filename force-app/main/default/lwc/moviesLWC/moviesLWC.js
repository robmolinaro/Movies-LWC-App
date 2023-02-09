import { LightningElement, api } from 'lwc';

export default class MoviesLWC extends LightningElement {
    library=false;
    movies=false;
    favourites=false;
    display = false;

    handleSearchMovies(event){
        console.log('clicked search');
        this.library = false;
        this.movies = true;
        this.favourites = false;
        this.display = true;
    }

    handleViewLibrary(event){
        this.library = true;
        this.movies = false;
        this.favourites = false;
        this.display = true;
        console.log('clicked library');
    }

    handleViewFavourites(event){
        this.library = false;
        this.movies = false;
        this.favourites = true;
        this.display = true;
        console.log('clicked favourites');
    }
}