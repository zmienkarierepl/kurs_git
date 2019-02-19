# Git - Praktyczne wprowadzenie
#### [zmienkariere.pl](https://kursy.zmienkariere.pl)
---

Repozytorium zawiera zestaw ćwiczeń praktycznych które pozwolą sprawdzić Ci nabytą wiedzę. Testy jednostkowe zostały napisane z użyciem frameworka Jest. 



### Wymagania

* NodeJS w versji >8
* GIT dostępny w pasku poleceń

### Zanim uruchomisz testy

* Sklonuj repozytorium `git clone https://github.com/zmienkarierepl/kurs_git.git`
* Zainstaluj wymagane zależności za pomocą komendy `npm install` w katalogu głównym projektu  

### Zadania

#### Zadanie 1 (ex1.1)

 Twoim zdaniem jest utworzenie lokalnego repozytorium. Test Ex1 sprawdza czy w danym katalogu takie repozytorium się znajduje.  Domyślnie sprawdzany jest katalog z którego odpalana jest komenda. Jeśli chcesz możesz zmienić domyślny katalog w pliku config.js lub przekazując argument path jako parametr. Aby uruchomić test wykonaj polecenie : 
 
 `npm run ex1.1` lub `npm run ex1.1 --path='../myGitRepo'`

#### Zadanie 2 (ex1.2)

 Dodaj przynajmniej jedno zdalne repozytorium czyli remote. Jak w przypadku poprzedniego zadania domyślnie test sprawdza katalog z którego został uruchomiony test. Ścieżkę do swojego repozytorium możesz przekazać w postaci parametru np :

 `npm run ex1.2 --path='../myGitRepo'`

#### Zadanie 3 (ex2.1)

 W swoim lokalnym repozytorium utwórz pliki fileA.txt, fileB.txt, fileC.txt, fileD.txt. Uruchom test poleceniem
 
 `npm run ex2.1 --path='../myGitRepo'`
 
#### Zadanie 4 (ex2.2)

 Zapisz do repozytorium pliki fileA.txt, fileB.txt, fileC.txt. Jako komentarz do commita wpisz "my first commit"
 
 `npm run ex2.2 --path='../myGitRepo'`
 
#### Zadanie 6 

#### Zadanie 7 
 
#### Zadanie 8

#### Przed wykonaniem Zadania 9 i 10 i 11

Uruchom skrypt ex4.prepare wykonując polecenie :

`npm run ex4.prepare`

Skrypt ten dokona kilku zmian w plikach w katalogu ex4. Możesz je sprawdzić wykonująć komendę 

`git status`

#### Zadanie 9 (ex4.1)

Twoim zadaniem jest usunięcie pliku file2.txt ze staging-u. Po wykonaniu zadania uruchom test ex4.1 poleceniem

`npm run ex4.1`

#### Zadanie 10 (ex4.2)

Twoim zadaniem jest cofnięcie zmian w pliku file.txt. Po wykonaniu zadania uruchom test ex4.2 poleceniem

`npm run ex4.2`

#### Zadanie 11 (ex4.3)

Twoim zadaniem jest usunięcie wszystkich plików które nie są częścią projektu. Po wykonaniu zdania uruchom test ex4.3 poleceniem

`npm run ex4.3`


#### Zadanie 11 (ex5.1)

Twoim zadaniem jest utworzenie nowego branch-a o nazwie “my-branch”. Następnie przejdź do tego branch-a i utwórz w katalogu ex5 plik o nazwie file2.txt. Dodaj ten plik do stage-ingu , ale nie commit-uj. Aby uruchomić test uruchom komendę:

`npm run ex5.1`

#### Zadanie 12 (ex5.2)

Twoim zadaniem jest zapisanie zmian. Ważne jako komentarz do commita wpisz “new file”. Po zapisaniu zmień branch z powrotem na master. Dokonaj operacji merge z brancha my-branch. Aby uruchomić test uruchom komendę:

`npm run ex5.2`

#### Zadanie 13 (ex5.3)

Twoim zadaniem jest usunięcie branch-a my-branch oraz cofnięcie się w historii do poprzedniego commita. Aby uruchomić test uruchom komendę:

`npm run ex5.3`

#### Zadanie 14 (ex6)

Twoje zadanie polega na rozwiązaniu konfliktu w dwóch plikach w katalogu ex6. `file.txt` i `file.js` , aby przygotować środowisko uruchom skrypt prepare.js za pomocą komendy :

`npm run ex6.prepare`

Skrypt tworzy nowy branch o nazwie `my-branch` zapisuje zmiany do pliku file.txt oraz file.js i dokonuje operacji commit. Analogicznie postępuje w branchu master. 

Dokonaj operacji merge za pomocą komendy : 

`git merge my-branch`

W tym momencie w plikach ex6/file.txt oraz ex6/file.js są konflikty. Twoim zadaniem jest je rozwiązać. Po rozwiązaniu konfliktów możesz sprawdzić wynik uruchamiając test:

`npm run ex6`

Jeśli nie jesteś pewien jak powinny wyglądać wynikowe pliki, możesz przejrzeć ich zawartość w `ex6/files/file.final.js` oraz `ex6/files/file.final.txt`

Jeśli chciałbyś powtórzyć ćwiczenie w przyszłości pamiętaj by usunąć ostatni commit oraz usunąć branch `my-branch`





