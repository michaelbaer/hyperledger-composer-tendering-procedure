#!/bin/bash

#https://hyperledger.github.io/composer/latest/
#https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html

# Install prerequists

curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh

./prereqs-ubuntu.sh


# Install the CLI tools 

npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo

# Install Playground

npm install -g composer-playground


# Install Hyperledger Fabric

mkdir ~/fabric-tools && cd ~/fabric-tools

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz

cd ~/fabric-tools
./downloadFabric.sh