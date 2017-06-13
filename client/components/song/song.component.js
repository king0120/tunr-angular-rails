import controller from 'song.controller';
import template from 'song.html';

const songComponent = {controller, template};

angular.module('TunrApp').component('tunrSong', songComponent);
