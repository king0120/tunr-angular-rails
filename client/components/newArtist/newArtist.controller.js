NewArtistController.$inject = ['$stateParams', '$http', 'artistService']

function NewArtistController($stateParams, $http, artistService){
    var vm = this;
    console.log('hello from controller')
    

    // function activate(){
    //     getArtist($stateParams.id);
    // }

    // function getArtist(id){
    //     artistService.getArtist(id).then((data) => {
    //         console.log(data)
    //         vm.artist = data;
    //     })
    // }
}

export default NewArtistController;