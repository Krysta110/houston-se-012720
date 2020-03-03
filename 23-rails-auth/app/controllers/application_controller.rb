class ApplicationController < ActionController::Base

    before_action :authenticated

    def current_user
        if session[:user_id]
           @user = User.find(session[:user_id])
        else
        
        end
    end

    def logged_in?
        !!current_user
    end

    def authenticated
        redirect_to login_path unless logged_in?
    end

    # def authenticated
    #     current_user = nil
    #     if session[:user_id]
    #         current_user = User.find(session[:user_id])
    #     end

    #     # byebug
    #     redirect_to "/login" unless current_user
            

    # end
end
