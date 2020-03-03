# Authentication & Authorization

### LGs:
- [x] Understand, theoretically, how authentication and authorization work
- [x] Augment a user model in rails using bcrypt and password_digest
- [x] Go over sessions, cookies, and implement sign up, log in, and log out

#### Understand, theoretically, how authentication and authorization work
* Why do we need it?
* what is authentication?
    * Are you who you say you are? 
    * SignUp => LogIn
* What is authorization?
    * Authorization happens after authentication. It's about scope, and specific information. What is the user allowed to see/interact with?
* Discuss different encryption and hashing schemes, and bcrypt specifically
    * **Encryption:** Anything that can be encrypted, must also be able to be decrypted.
    * **Hashing:** Hashing is a little different: the ultimate goal of one-way hashing is that you cannot "decrypt" the original text. In addition to any encryption scheme, each authenticated user has a "salt", added information that augments the password to make decryption even harder.
    * **bcrypt:** What's cool about bcrypt? By design, it's slow. This means that anyone who wants to crack it has to take a long time to brute-force passwords. It also allows you to define a column called password_digest and it will do the rest of the work.

        Remember, convention over configuration. And especially in this case, we generally don't have the time or energy to build our own encryption that surpasses what already exists.

##### TASK: What is the difference between authentication and authorization?

#### Augment a user model in rails using bcrypt and password_digest
* uncomment gem `bcrypt`
* After installing the bcrypt gem, you can use a macro in your user model called has_secure_password, which does a lot of the integration for you.

#### Go over sessions, cookies, and implement sign up, log in, and log out
* create view for signup
    * password and password_confirmation
* create sessions_controller
* create routes
* login form
* create logout button
* authorazation






