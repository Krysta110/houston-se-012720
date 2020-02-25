require_relative './config/environment'

use ApplicationController
use AuthorsController
use BooksController
run ApplicationController
