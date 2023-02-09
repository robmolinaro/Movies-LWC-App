import { LightningElement, wire, track } from 'lwc';
import searchMovies from '@salesforce/apex/MovieController.searchMovies';

export default class SearchMovies extends LightningElement {

    movieName='Dilbar';
    
    @wire(searchMovies, {movieName: '$movieName'})
    movies;

    handleMovieInputChange(event) {
        // Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
       
		window.clearTimeout(this.delayTimeout);   
		const movieName = event.detail.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.movieName = movieName;
		}, 1500);
    
    }
}