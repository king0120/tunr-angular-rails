ArtistController.$inject = ['$http']

function ArtistController($http){
    var vm = this;

    $http.get('/artist').then(res => {
        vm.artists = res.data;
        console.log(vm.artists);
    });
}

export default ArtistController;