module.exports = function(shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: './',
      repositoryUrl: 'https://github.com/dummas/nork.git',
      deployTo: '/var/www/nork/'
    },
    live: {
      servers: 'agurkas@nork.lt'
    }
  });

};
