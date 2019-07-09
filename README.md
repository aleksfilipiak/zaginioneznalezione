# Znalezione - zaginione app

## App for easier reunion of lost animals with their keepers

## Docs and description (english):
1. [What is made for](https://github.com/aleksfilipiak/zaginioneznalezione#1-what-is-made-for)
1. [How to run app](https://github.com/aleksfilipiak/zaginioneznalezione#2-how-to-run-app)
1. [How it's work](https://github.com/aleksfilipiak/zaginioneznalezione#3-how-does-it-work)
1. [Next steps](https://github.com/aleksfilipiak/zaginioneznalezione#4-next-steps)
1. [Dokumentacja i opisy (polish)](https://github.com/aleksfilipiak/zaginioneznalezione#5-dokumentacja-i-opisy-in-polish)


### 1. What is made for

This project has two goals:

**Being a part of my portfolio.**  I want to present my continously growing knowledge in bulding usefull apps. Thanks to that project I develope new skills everyday.

**Is an attempt to resolve huge problem of lost pets in polish cities.**  Every month new quantity of lost pets reveals in social media. It's hard to find clear info of who, when and where spotted an runaway pet. With this app I'm trying to solve that problem.


### 2. How to run app

#### You can try this app by visiting it on its project-website (runnig by github pages) here: [https://aleksfilipiak.github.io/zaginioneznalezione](https://aleksfilipiak.github.io/zaginioneznalezione/#/)

Just please remember that is only static version of this app. That it means, you can't put new data into its database (ex. you can't register new user) or delete it.

#### Running app locally

This app is runnig by react framework. It means, you can run it on your local server (localhost). To try each of functionality of this app, you need to follow this steps:

1. Clone apps repo from github:

`git clone https://github.com/aleksfilipiak/zaginioneznalezione.git`

2. You need to have installed Node.js and npm, which is very basic, but just in case you have neccesary things: 

- install Node.js from its official site: [https://nodejs.org/en/](https://nodejs.org/en/). At this moment recommended version is 10.16.0. After downloading its package wrote those lines in your terminal (if you have Ubuntu system):

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

- install npm (you can go to your local folder with cloned repo or do it globally) 

`npm install npm@latest -g`

3. You need to install few additional packeges for this project. Enter in your terminal:

`npm install react`

`npm install -g json`

4. Now you should run two json servers, where app stores 2 databases. Run those lines in two new terminal windows and run them in folder *public* of this app:

`json-server --watch founded.json --port 3004`

`json-server --watch logins.json --port 3005`

5. Last step is to run this app by entering:

`npm start`

Now you default browser should open this app on http://localhost:3000. Enjoy!

### 3 How does it work

This app contains few nice functionalities:
- you can sing up by register your new account and then you can use login to add new lost/found pet
- it uses cookies to provide account authentication
- it supports REST API methods like GET, POST, PUT and DELETE

When it comes to UX subject, the idea of this app was to create very simple tu use help system. It supposed to help confused people in case of doubts what to do, when they find/lost some pet. It guides user in 3 steps.

### 4 Next steps

In very short time I plan to do:

- [ ] Add entire "add new pet" form
- [ ] Add validation to all input fields
- [ ] Add more safe authentication
- [ ] Add Google Maps API
- [ ] Combine Google Maps API with geolocation of user


### 5 Dokumentacja i opisy (in polish)

To jutro