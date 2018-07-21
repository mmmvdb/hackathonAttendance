// public/js/services/nerdService.js/services/nerdService
angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
    return{
        // call to get all nerds
        get: function(){
            return $http.get('/api/nerds');
        },
        
        create: function(){
            return $http.post('/api/nerds', nerdData);
        },
        
        delete: function(){
            return $http.delete('/api/nerds/'+ id);
        }
    }
}]);