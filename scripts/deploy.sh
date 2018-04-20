#!/bin/bash

set -e

CI=true npm test -- --coverage
npm run build

sudo docker build -t kabuto/mccondochie .
sudo docker push kabuto/mccondochie

ssh example.com 'docker pull kabuto/mccondochie'
ssh example.com 'docker stop mccondochie'
ssh example.com 'docker rm -fv mccondochie'
ssh example.com 'docker run -d --restart unless-stopped --name mccondochie -p 80:80 kabuto/mccondochie'
