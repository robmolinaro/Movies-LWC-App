public with sharing class MovieDBCallouts {
    
    private static final String SEARCH_MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/search/movie?api_key=';
    private static final String MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/movie/';
    
    public static HttpResponse searchMovies(String movieName) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SEARCH_MOVIES_ENDPOINT + Constants.MOVIEDB_API_KEY + '&language=en-US&include_adult=false');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response; 
        }

        return null;
    }
    
    public static HttpResponse getMovieById(String movieId) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(MOVIES_ENDPOINT + movieId + '?api_key=' + Constants.MOVIEDB_API_KEY + '&language=en-US');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response; 
        }

        return null;
    }
}