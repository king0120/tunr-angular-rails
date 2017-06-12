TestController.$inject = ['$http']

function TestController($http){
    var vm = this;

    $http.get('/artist').then(res => {
        vm.artists = res.data;
        console.log(vm.artists);
    });
}

export default TestController;