#!/bin/bash

# install business network
composer network install --card PeerAdmin@hlfv1 --archiveFile tenderingnetwork@0.0.2.bna
composer network start --networkName tenderingnetwork --networkVersion 0.0.2 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card

# start rest api server
composer-rest-server -c admin@tenderingnetwork -n never -w true