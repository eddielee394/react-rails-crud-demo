class Api::V1::ItemsController < Api::V1::BaseController
  # returns all items
  def index
    respond_with Item.all
  end

  # creates an item
  # @params item_params
  def create
    respond_with :api, :v1, Item.create(item_params)
  end

  # destroys a record
  # @params id
  def destroy
    respond_with Item.destroy(params[:id])
  end

  #updates a record
  # @param id
  def update
    #find the item by id
    item = Item.find(params["id"])
    #update the item attributes with the passed in params
    item.update_attributes(item_params)

    #issue the response
    respond_with item, json: item
  end

  #private methods
  private

  def item_params
    params.require(:item).permit(:id, :name,:description)
  end
end