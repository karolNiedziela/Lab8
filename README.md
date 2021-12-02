Budowa dev obrazu: 

`docker build -f Dockerfile.dev -t local/fibonacci:1 .`

Uruchomienie dev kontenera:

`docker build -f Dockerfile.dev -t local/fibonacci:1 .`

Multi stage build z wykorzystaniem nigx

Aby zbudować obraz użyto polecenia:

`docker build -t local/fibonacci:2 .`

Do uruchomienia kontenera użyto polecenia:

`docker run -d -p 4200:80 local/fibonacci:2`
