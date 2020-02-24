# Rails Intro

### LGs:
- [x] Create a new Rails application
- [x] Generate a model and a controller
- [x] Create routes actions/methods for a RESTful controller
    - Describe similarities between Sinatra routing & Rails routing
- [x] Create views

---

#### Create a new Rails application
* Why rails?
    * Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions.
* Install rails: gem install rails
```
rails new blog_app
```
* Discuss all the files and folders
* --skip-javascript
* byebug
* rails s
* rails s -p 3001
* rails c
* rails routes

**TASK:** Create new rails app

#### Generate a model and a controller
* Domain selection
* Model and migration generation:
    * `rails g model Dog name breed age:integer`
* Controller and methods
    * `rails g controller dogs`
    * `rails g controller dogs index show`
* `--no-test-framework`

**TASK:** Generate a model and a controller

#### Create routes actions/methods for a RESTful controller
* Describe similarities between Sinatra routing & Rails routing
``` rails
    get ‘/dogs’, to: ‘dogs#index’
    get '/index', to: 'dogs#index'
    get 'dogs/show'
```

#### Create views
* Index page
* Show Page