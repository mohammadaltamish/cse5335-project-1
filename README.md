# cse5335-project-1
####a. What server framework did you choose and why?
I used nodejs for a variety of reasons: 
  + I am familiar with javascript so I wanted to add on to my skills by delving into nodejs.
  + I did not want to get into unchartered waters of ruby/rails.
####b. What client framework did you choose and why?
I used jquery because
  +  Again, I have used jquery and I am pretty comfortable with it, which was the deciding factor.
  +  Angularjs seemed like an overkill for a project of this scale.
####c. What aspect of the implementation did you find easy, if any, and why?
  I found making a ajax call easy because it is quite straightforward and I am familiar with it. Also, deployment on heroku was seamless.
####d. What aspect of the implementation did you find hard, if any, and why?
  Learning nodejs was the challenging part but not exactly hard.
####e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?
  I did not use any other components.
####f. What Ubuntu commands are required to deploy and run your server?
  I used the following windows cli commands to deploy the application:
    + heroku login
    + git clone https://github.com/mohammadaltamish/cse5335-project-1.git
    + cd .\cse5335-project-1\
    + heroku create cse5335-mxa4346
    + git push heroku master
    + and the application is deployed at https://cse5335-mxa4346.herokuapp.com/
