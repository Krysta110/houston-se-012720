# require 'tty-prompt'
$prompt = TTY::Prompt.new

# name = prompt.ask('What is your name?', default: ENV['USER'])
# # p name
# prompt.yes?('Do you like Ruby?')
# password = prompt.mask("What is your secret?")
# p "Hi #{name}! Your Password is #{password}"

def start
    p "Welcome to our application!"
    userInfo
end

