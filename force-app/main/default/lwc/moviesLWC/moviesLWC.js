import { LightningElement, api } from 'lwc';

export default class MoviesLWC extends LightningElement {
    @api library;
    @api favourites;
    @api search;

    handleSearchMovies(){
        library = false;
        favourites = false;
        search = true;
    }

    handleViewLibrary(){
        library = true;
        favourites = false;
        search = false;
    }

    handleViewFavourites(){
        library = false;
        favourites = true;
        search = false;
    }
}