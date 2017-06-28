ArtistController.$inject = ["$stateParams", "$http", "artistService"];

function ArtistController($stateParams, $http, artistService){
	var vm = this;
    
	activate();

	function activate(){
		getArtist($stateParams.id);
	}

	function getArtist(id){
		artistService.getArtist(id).then((data) => {
			console.log(data);
			vm.artist = data;
		});
	}
}

export default ArtistController;