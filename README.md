# metaweather-forecast

## System Design
Please take a look at [System Design](https://github.com/DeKal/metaweather-forecast/blob/master/system-design.pdf)

## Prerequisite
- Docker
- Docker compose

## Development
- Build docker images using (Only first time)
```
docker-compose build
```
- Running docker containers using
```
docker-compose up
```

## Production
- Build docker images using:
```
docker-compose -f docker-compose.production.yml build
```
- Running docker containers using:
```
docker-compose -f docker-compose.production.yml up
```

## Manually
In case your docker environment has something wrong, just start 2 project in 2 different terminal tabs. As default, client will run at http://localhost:3000 and backend service will run at http://localhost:3001.
- Start Client
```
cd day-weather-forecast
yarn instal
yarn start
```
- Start backend
```
cd weather-service
yarn instal
yarn start
```


## Frontend
### Documetation
- See [Front-end docs](/day-weather-forecast/README.md) for more development detail.
### Demo
- Visit http://localhost:3000 to see the page
1) Suggestion city

<img src="https://user-images.githubusercontent.com/7911873/111914747-e881f500-8aa5-11eb-856d-008f9a80d930.png" width="800px"> 

2) Show 6 days weather forecast
- Desktop

<img src="https://user-images.githubusercontent.com/7911873/111914822-3a2a7f80-8aa6-11eb-9bbc-58233be5f4b5.png" width="800px"> 

- Mobile 

<img src="https://user-images.githubusercontent.com/7911873/111914883-75c54980-8aa6-11eb-82e3-373c51f73e7c.png" width="400px"> 

- Ipad

<img src="https://user-images.githubusercontent.com/7911873/111914937-a907d880-8aa6-11eb-8afc-7c7bb034d02e.png" width="500px"> 

- Ipad pro

<img src="https://user-images.githubusercontent.com/7911873/111914988-d2286900-8aa6-11eb-9f66-c46092a62824.png" width="500px"> 



## Backend
### Documetation
- See [Back-end docs](/weather-service/README.md) for more development detail.
### Swagger
- Visit http://localhost:3001/docs to see the api contract

