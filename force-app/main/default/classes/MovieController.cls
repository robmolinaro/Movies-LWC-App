public with sharing class MovieController {
    
    private static final String movieNodeKey = 'results';

    @AuraEnabled(cacheable=true)
    public static String searchMovies(String movieName) {
        HttpResponse response = MovieDBCallouts.searchMovies(movieName);
        return Utilities.stringifyJSON(response);
    }
}