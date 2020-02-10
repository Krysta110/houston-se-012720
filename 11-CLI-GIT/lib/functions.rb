def userInfo
    name = $prompt.ask('What is your name?', default: ENV['USER'])
    password = $prompt.mask("What is your secret?")
    p "Hi #{name}! Your Password is #{password}"
    userDestiny
end

def userDestiny
   userSelection =  $prompt.select("Choose your destiny?", %w(Scorpion Kano Jax))
    p userSelection
end