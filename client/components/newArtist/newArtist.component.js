import newArtistController from './newArtist.controller';
import newArtistTemplate from './newArtist.html';

const newArtistComponent = {
    controller: newArtistController,
    template: newArtistTemplate
}

angular.module('TunrApp').component('tunrNewArtist', newArtistComponent);