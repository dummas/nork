module.exports = function(shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: './',
      deployTo: '/var/www/nork/'
    },
    live: {
      servers: 'agurkas@nork.lt'
    }
  });

};
