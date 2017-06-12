import artistController from './artist.controlller';
import artistTemplate from './artist.html';

const artistComponent = {
    controller: artistController,
    template: artistTemplate
}

console.log('hello')
angular.module('TunrApp').component('ngArtist', artistComponent);