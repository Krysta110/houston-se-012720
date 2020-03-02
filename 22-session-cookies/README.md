# Session and Cookies

### LGs:
- [ ] Explain the stateless nature of HTTP
- [ ] Explain that session is built on cookies
- [ ] Implementing Session Variables
- [ ] Implementing Flash Variables

#### Explain the stateless nature of HTTP

* The problem of remembering a users score
* The request response cycle
* How each HTTP request is treated as separate

##### TASK: Take a min with you partner(person sitting next to you) and discuss the stateless nature of HTTP

#### Explain that session is built on cookies

* What is session? what is cookie?
* Rails sessions helps solve this problem by following code:
```ruby
 def create
        if session[:number_correct] == nil
            session[:number_correct] = 0
        end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            session[:number_correct] = session[:number_correct] + 1
            puts "Correct"
        else
            puts "Incorrect"
        end
        puts "Answered Correctly: #{session[:number_correct]}"
        redirect_to '/random-question'
end
```
* Application tab show cookies
* Cookies carry are session variables from request to request

##### TASK: Take a min and than explain in your own words:
* What is session? what is cookie?

#### Implementing Session Variables

* How our :number_correct is persisted in the session(review)
* How to use the session variable in the view:
```ruby
...
    before_action :define_question, :define_response, :define_number_correct
    ...
    def  define_number_correct
        @number_correct = session[:number_correct]
    end
    ...
```
##### TASK: Take a minute to create define_number_correct method.

#### Implementing Flash Variables

* Problem with session message variable (Refresh)
* Introduce flash
* Show message in the view

##### TASK: Take 3 mins and implement a flash variable to display that selected answer is right or wrong.
