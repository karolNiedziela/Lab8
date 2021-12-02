# Dockerfile.dev
Budowa obrazu: 

`docker build -f Dockerfile.dev -t local/fibonacci:1 .`

Uruchomienie kontenera:

`docker run -it -p 4200:4200 -v /app/node_modules -v ${pwd}:/app local/fibonacci:1.`

# Multi stage build z wykorzystaniem nigx

Aby zbudować obraz użyto polecenia:

`docker build -t local/fibonacci:2 .`

Do uruchomienia kontenera użyto polecenia:

`docker run -d -p 4200:80 local/fibonacci:2`

# Travis CI

![image](https://user-images.githubusercontent.com/51209004/144466652-12ce3f10-5e12-40c9-bf8f-4b1ff0df3860.png)

![image](https://user-images.githubusercontent.com/51209004/144445549-ce250278-3f19-47ee-adb8-5470e29e5f0e.png)

Dodanie deploy dla Heroku:
![image](https://user-images.githubusercontent.com/51209004/144460378-f41c56b4-617a-4b3d-8e6d-100a1f0d41f1.png)

Wygląd na Heroku:
![image](https://user-images.githubusercontent.com/51209004/144466387-05141063-8985-472e-a5a5-7ac9e65598d1.png)

Link do aplikacji na heroku:
https://fibonacci-lab8.herokuapp.com/
