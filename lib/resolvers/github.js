'use strict'

var debug = require('../debuglog')('resolver:npm-registry')
var GitHubApi = require('github');

function fetch(url, cb) {

}

module.exports = function resolveFromGithub (name, version, hostedSpec, cb) {
  console.log(name)
  console.log(version)
  console.log(hostedSpec)

  var github = new GitHubApi({
    version: "3.0.0",
    debug: true,
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: { "user-agent": "IED-Downloader" }
  });

  var options = {
    archive_format: 'tarball',
    user: 'XXX',
    repo: 'YYY',
    ref: 'master'
  }

  github.repos.getArchiveLink(options, function(err, res) {
    console.log(err)

    var tarball_location = res['meta']['location'];
    console.log(tarball_location);

    fetch(tarball_location, function(err, pkg) {
      console.log('PKG')
      console.log(pkg);

      console.log('ERR')
      console.log(err);

      // Lets donwload the tarbal!
    })

  });
}
