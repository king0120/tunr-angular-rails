class ArtistController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @artist = Artist.all
        render json: @artist
    end
    
    def create
        @artist = Artist.create!(artist_params)
        render json: @artist
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
    
    def destroy
    end

   private
   def artist_params
     params.require(:artist).permit(:name, :origin, :photo_url, :genre, :bio)    
   end

end
