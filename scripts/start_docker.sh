#!/bin/bash

sudo docker build -t kabuto/mccondochie .
sudo docker push kabuto/mccondochie
sudo docker stop mccondochie | true
sudo docker rm -fv mccondochie | true
sudo docker run -d --restart unless-stopped --name mccondochie -p 80:80 kabuto/mccondochie
