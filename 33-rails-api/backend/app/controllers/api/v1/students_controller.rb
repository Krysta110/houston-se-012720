class Api::V1::StudentsController < ApplicationController

    def index
    @students = Student.all
    end

    def show
        @student = Student.find(params[:id])
        #render json?
        render json: @student
        # render json: @student, except: :id

    end

    def new
        @student = Student.new
        @instructors = Instructor.all
    end

    def create
    # byebug
        @student = Student.new(student_params)

        if @student.valid?
            @student.save
            redirect_to @student
            # redirect_to student_path(@student)
        else
            redirect_to new_student_path
        end
    end

    def edit
        @student = Student.find(params[:id])
        @instructors = Instructor.all
    end

    def update
        @student = Student.find(params[:id])
        if @student.update(student_params)
            redirect_to @student
        else
            redirect_to edit_student_path
        end
    end

    def destroy
        @student = Student.find(params[:id])
        @student.destroy

        redirect_to students_path
    end

    private

    def student_params
        params.require(:student).permit(:name, :major, :age, :instructor_id)
    end
end
