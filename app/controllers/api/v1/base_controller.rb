class Api::V1::BaseController < ApplicationController
  #ensures that all actions from decendent controllers will issue a JSON response
  respond_to :json
end