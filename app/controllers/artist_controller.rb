class ArtistController < ApplicationController
    def index
        @artist = Artist.all

        render json: @artist
    end
    
    def create
    end
    
    def new
    end
    
    def edit
    end
    
    def show
        @artist = Artist.find(params[:id])

        render json: @artist
    end
    
    def update
    end
    
    def update
    end
    
    def destroy
    end
    
end
