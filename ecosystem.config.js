module.exports = {
  apps: [
    {
      name: 'NodeJS',
      script: './dist/App.js',
      //instances: -1,
      instances: "max",
      // instances: 4,
      // node_args: '--max-http-header-size=16000',
      // max_memory_restart: '800M',
      autorestart: false,
      time: true,
      // cron_restart: '0 3 * * *',

      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'devel',
        watch: true,
      },
      env_production: {
        NODE_ENV: 'production',
        watch: false,
      },
      merge_logs: true
    },
  ],
};
