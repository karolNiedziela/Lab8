# Środowisko dev
Budowa dev obrazu: 

`docker build -f Dockerfile.dev -t local/fibonacci:1 .`

Uruchomienie dev kontenera:

`docker build -f Dockerfile.dev -t local/fibonacci:1 .`

# Multi stage build z wykorzystaniem nigx

Aby zbudować obraz użyto polecenia:

`docker build -t local/fibonacci:2 .`

Do uruchomienia kontenera użyto polecenia:

`docker run -d -p 4200:80 local/fibonacci:2`

# Travis CI

![image](https://user-images.githubusercontent.com/51209004/144445398-7cf5336a-b4fa-4154-bf1d-5ccfaaf8b2f5.png)

![image](https://user-images.githubusercontent.com/51209004/144445549-ce250278-3f19-47ee-adb8-5470e29e5f0e.png)

