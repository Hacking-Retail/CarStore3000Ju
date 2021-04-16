# Installation


* ```git clone https://github.com/Hacking-Retail/CarStore3000Ju```
* ```cd CarStore3000Ju && python3 -m venv venv```
* ```source venv/bin/activate```
* ```pip install -r requirements.txt```


## Client

* ```cd client && npm install```

### dev server
* ```npm start```         => dev server exposed by react on localhost:3000

### production build
* ```npm run build```     => build exposed by flask on localhost:5000


## Server

* ```cd ../server && flask db upgrade```
* ```flask run```
