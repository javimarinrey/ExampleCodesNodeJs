#!/bin/sh
tsc
#mkdir -p ./logs
#npm run tsoa:spec
pm2 stop all
pm2 delete all
pm2 kill
pm2 start ecosystem.config.js --env production
