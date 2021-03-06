class StudentsController < ApplicationController
    before_action :current_student, only: [:show, :edit, :update, :destroy]

    def index
    @students = Student.all
    end

    def show
    
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
        @instructors = Instructor.all
    end

    def update
        if @student.update(student_params)
            redirect_to @student
        else
            redirect_to edit_student_path
        end
    end

    def destroy
        @student.destroy

        redirect_to students_path
    end

    private

    def current_student
        @student = Student.find(params[:id])
    end

    def student_params
        params.require(:student).permit(:name, :major, :age, :instructor_id)
    end
end
