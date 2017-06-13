import artistsController from './artists.controlller';
import artistsTemplate from './artists.html';

const artistsComponent = {
    controller: artistsController,
    template: artistsTemplate
}

angular.module('TunrApp').component('tunrArtists', artistsComponent);