# Intro
Vagrant and docker environment to run the tenderingnetwork based on the Hyperledger Composer Developer Tutorial
see: https://hyperledger.github.io/composer/latest/tutorials/tutorials


# tenderingnetwork

tendering example network



# first start
cd ~/fabric-tools
./startFabric.sh
./createPeerAdminCard.sh

cd ~/tender/tenderingnetwork
./deployBusinessNetwork.sh

cd ~/tender/TenderingApp
npm install
npm start



# second start
cd ~/fabric-tools
./startFabric.sh

cd ~/tender/tenderingnetwork
./deployBusinessNetwork.sh

cd ~/tender/TenderingApp
npm start

# restart rest api
composer-rest-server -c admin@tenderingnetwork -n never -w true


# stop
cd ~/fabric-tools
./stopFabric.sh
