public with sharing class Utilities {
    
    public static List<Object> deserializeJSON(HttpResponse response, String nodeKey) {
        if (response != null) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

            List<Object> jsonResponse = (List<Object>)results.get(nodeKey);

            return jsonResponse;
        }
    }

}