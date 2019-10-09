class ProjectsController < ApplicationController
  def index
  	@Projecto = Project.all
  end
  def show
  	@project = Project.find (params[:id])
  end
  def update
  end

  def create
  end
end
