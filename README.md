Hello there! I hope your day is going great!

    This small project is a prototype of a Podcast Website, as an assignment submission for
    management Course for Cairo university.

    The front end is pure HTML, CSS, JS while the back end is based on node.js & express with data provided by 
    the spotify api.

    It has limited functionality by now as it is currently an MVP (Minimal Viable Product) but 
    we hope the desgin is something you will apprecicate!


	There front end is complete but the backEnd needs a few setup steps before being able to
	be used fully(the main page have a few images with categories on them. clicking on them 
    while you are logged on with spotify will cause them to search and display the top 5
    podcasts in each category from spotfiy):

1- please for the server side authentication to work, please open the "index.html" as a root file for 
    your local host or any serving service.

2- to start the server please type " node Server/spotify.js" in the command console/terminal in this directory.
    and make sure it listens on port 8888 or Spotify will deny acess

3- sadly since this is a personal college project not a paid coperate-orianted API,
	spotify puts a few restrcitons on the usage of their API.
	those restrcitons force the "Tech Talks" web to silently fail if the user
	trying to login with spotify isn't a verfied user (verfied users are added manually to 
	the API user list with their emails that use to log to their spotify accounts)