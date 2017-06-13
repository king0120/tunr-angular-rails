ArtistsController.$inject = ['$http', 'artistService']

function ArtistsController($http, artistService) {
    var vm = this;
    vm.artists = [];
    activate();
    
    function activate() {
        getAllArtists();
    }

    function getAllArtists() {
        artistService.getAllArtists().then((res) => {
            vm.artists = res;
        });
    }
}

export default ArtistsController;