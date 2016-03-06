# cse5335-project-1
####a. What server framework did you choose and why?
I used nodejs for a variety of reasons: 
  a) I am familiar with javascript so I wanted to add on to my skills by delving into nodejs
  b) I did not want to get into unchartered waters of ruby/rails.
####b. What client framework did you choose and why?
I used jquery
  a) Again, I have used jquery and pretty comfortable with which was the deciding factor.
  b) angularjs seemed like an overkill for a project of this scale.
####c. What aspect of the implementation did you find easy, if any, and why?
  I found making a ajax call easy because it is quite straightforward and I familiar with it. Also, deployment on heroku was seamless.
####d. What aspect of the implementation did you find hard, if any, and why?
  Learning nodejs was the challenging part but exactly hard.
####e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?
  I did not use any other components.
####f. What Ubuntu commands are required to deploy and run your server?
  I used the following windows cli commands to deploy the application:
    a) heroku login
    b) git clone https://github.com/mohammadaltamish/cse5335-project-1.git
    c) cd .\cse5335-project-1\
    d) heroku create cse5335-mxa4346
    e) git push heroku master
    and the application is deployed at https://cse5335-mxa4346.herokuapp.com/ to Heroku
