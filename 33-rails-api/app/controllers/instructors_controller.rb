class InstructorsController < ApplicationController

  def show
    @instructor = Instructor.find(params[:id])
  end

  def index
    @instructors = Instructor.all
  end

  def edit
    @instructor = Instructor.find(params[:id])
  end

  def create
    @instructor = Instructor.new(instructor_params)

    if @instructor.valid?
      @instructor.save
      redirect_to @instructor
    else
      redirect_to new_instructor_path
    end

  end

  def new
    @instructor = Instructor.new
  end

  def update
    @instructor = Instructor.find(params[:id])
    if @instructor.update(instructor_params)
      redirect_to @instructor
    else
      redirect_to edit_instructor_path
    end
  end

  def destroy
    @instructor = Instructor.find(params[:id])
    @instructor.destroy
    redirect_to instructors_path
  end

  private
  
  def instructor_params
    params.require(:instructor).permit(:name)
  end
end
