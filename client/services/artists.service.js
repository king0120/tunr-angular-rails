const angular = require('angular');

artistService.$inject = ['$http'];

function artistService($http) {
    const service = this;

    service.getAllArtists = function () {
        return $http.get('/artist').then(res => {
            return res.data;
        });
    }

    service.getArtist = function(id){
        return $http.get('/artist/' + id).then(res => {
            return res.data;
        });
    }

    return service;
}

angular.module('TunrApp').service('artistService', artistService);