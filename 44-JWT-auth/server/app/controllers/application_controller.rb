class ApplicationController < ActionController::API

    before_action :logged_in?

    def encode_token(payload)
        # byebug
        JWT.encode(payload, "se012720", "HS256") #algo is optional
    end

    def logged_in?
        # byebug
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]
        # byebug
        begin
            user_id = JWT.decode(token, "se012720")[0]["user_id"]
            user = User.find(user_id)
        # rescue JWT::DecodeError
        rescue
            user = nil
        # ensure
            #always runs with an error or without
        end

        # byebug
        render json: {error: "Please log in!"} unless user
    end

end
