NewArtistController.$inject = ['$stateParams', '$http', 'artistService']

function NewArtistController($stateParams, $http, artistService){
    var vm = this;
    vm.artist = {};
    console.log('hello from controller')
    
    vm.saveArtist = function(){
        console.log('submit!')
        artistService.saveArtist(vm.artist).then((res) => {
            console.log(res)
        })
    }

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