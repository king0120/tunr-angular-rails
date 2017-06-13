import artistController from './artist.controlller';
import artistTemplate from './artist.html';

const artistComponent = {
    controller: artistController,
    template: artistTemplate
}

angular.module('TunrApp').component('ngArtist', artistComponent);