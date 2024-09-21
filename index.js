const czGit = require("cz-git");
const path = require("path");

module.exports = {
  prompter: function (cz, commit) {
    czGit.prompter(
      cz,
      commit,
      path.resolve(__dirname, "./config/cz.config.js")
    );
  },
};

