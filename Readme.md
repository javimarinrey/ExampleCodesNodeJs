- typescript
- tslint
- ts-node-dev
- express
- dotenv
- API node: cluster
- PM2
- loadtest
- Grafana *

## PM2
PM2 is a production process manager for Node.js applications with a built-in load balancer.
https://www.npmjs.com/package/pm2

$ pm2 start src/Service.js -i <number of workers>
$ pm2 list
$ pm2 stop src/Service.js

## loadtest
Runs a load test on the selected HTTP.

$ loadtest http://localhost:3000/api/500 -n 1000 -c 100

-n : max number of requests
-c : level of concurrency


