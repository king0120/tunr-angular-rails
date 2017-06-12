class AddGenreToArtist < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :genre, :string
  end
end
