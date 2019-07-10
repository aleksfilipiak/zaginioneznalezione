# Znalezione - zaginione app

## App created to help reunite lost animals with their owners

## Docs and description (english):
1. [What is this app made for](https://github.com/aleksfilipiak/zaginioneznalezione#1-what-is-made-for)
1. [How to run this app](https://github.com/aleksfilipiak/zaginioneznalezione#2-how-to-run-app)
1. [How does is work](https://github.com/aleksfilipiak/zaginioneznalezione#3-how-does-it-work)
1. [Next steps](https://github.com/aleksfilipiak/zaginioneznalezione#4-next-steps)
1. [Dokumentacja i opisy (polish)](https://github.com/aleksfilipiak/zaginioneznalezione#5-dokumentacja-i-opisy-in-polish)


### 1. What is this app made for

This project has two goals:

**To build my portfolio.**  I want to present my continuously growing knowledge in building useful apps. Thanks to that project I develop new skills every day.

**It is an attempt to resolve huge problem of lost pets in cities of Poland.**  Every month dozens of pictures of lost pets reveals in social media. It's hard to find clear information of who, when and where spotted an runaway pet. With this app I'm trying to solve this problem.


### 2. How to run this app

#### You can try this app by visiting it on its project-website (running by github pages) here: [https://aleksfilipiak.github.io/zaginioneznalezione](https://aleksfilipiak.github.io/zaginioneznalezione/#/)

Just please remember that it's only static version of this app. This means that you can't put new data into its database (ex. you can't register new user) or delete it.

#### Running app locally

This app is running by react framework. It means that you can run it on your local server (localhost). To try each of functionality of this app, you need to follow these steps:

1. Clone apps repo from github:

`git clone https://github.com/aleksfilipiak/zaginioneznalezione.git`

2. You need to have installed Node.js and npm:

- install Node.js from its official site: [https://nodejs.org/en/](https://nodejs.org/en/). At this moment recommended version is 10.16.0. After downloading the package write these lines in your terminal (if you have Ubuntu system):

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

- install npm (you can go to your local folder with cloned repo or do it globally) 

`npm install npm@latest -g`

3. You need to install few additional packages for this project. Enter in your terminal:

`npm install react`

`npm install -g json`

4. Now you should run two json servers, where app stores two databases. Run those lines in two new terminal windows and run them in folder *public* of this app:

`json-server --watch founded.json --port 3004`

`json-server --watch logins.json --port 3005`

5. Last step is to run this app by entering:

`npm start`

Now your default browser should open this app on http://localhost:3000. Enjoy!

### 3 How does it work

This app contains few nice functionalities:
- you can sing up by registering your new account and then you can use login to add new lost/found pet
- it uses cookies to provide account authentication
- it supports REST API methods like GET, POST, PUT and DELETE

When it comes to UX subject, the idea of this app was to create very simple to use help system. It supposed to help confused people in case of doubts what to do, when they find/loose a pet. It guides its user in 3 steps.

### 4 Next steps

In very short time I plan to do:

- [ ] Add entire "add new pet" form
- [ ] Add validation to all input fields
- [ ] Add safer authentication
- [ ] Add Google Maps API
- [ ] Combine Google Maps API with geolocation of the user
- [ ] Fit layout to RWD standards


### 5 Dokumentacja i opisy (in polish)

Aplikacja ma za zadanie ułatwienie użytkownikom odnalezienie swojego zaginionego zwierzęcia bądź skontaktowanie się z właścicielem zwierzaka, którego właśnie znalezli.

Jak uruchomić tę aplikację:

1. wejdź na [https://aleksfilipiak.github.io/zaginioneznalezione](https://aleksfilipiak.github.io/zaginioneznalezione/#/)

lub

2. Zainstalują ją u siebie na komputerze. W tym celu niezbędne jest wykonanie kilku kroków za pomocą terminalu systemu.

- sklonuj to repozytorium do siebie:

`git clone https://github.com/aleksfilipiak/zaginioneznalezione.git`

- zainstaluj Node.js i pakiety npm. W tym celu wpisz w terminal poniższe komendy (komendy dla systemu Ubuntu):

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

`npm install npm@latest -g`

- zainstaluj odpowiednie paczki:

`npm install react`

`npm install -g json`

- uruchom dwa serwery typu JSON. W tym celu otwórz dwa nowe okna terminalu i w każdym przejdź do folderu *public* ściągniętego repozytorium. Wpisz poniższe dwie komendy po jednej w każdym oknie:

`json-server --watch founded.json --port 3004`

`json-server --watch logins.json --port 3005`

- w głównym folderze tego repozytorium wywołaj komendę:

`npm start`

W ten sposób pod adresem http://localhost:3000 w przeglądarce uruchomi się nasza aplikacja. Miłego testowania!

W najbliższej przyszłości aplikacja będzie uzupełniona o:

- [ ] formularz dodawania zwierząt do bazy znalezionych i zaginionych
- [ ] walidację wszystkich pól typu input
- [ ] dodanie bezpieczniejszej autoryzacji
- [ ] dodanie API od Google Maps
- [ ] połączenie API od Google Maps z lokalizacją użytkownika
