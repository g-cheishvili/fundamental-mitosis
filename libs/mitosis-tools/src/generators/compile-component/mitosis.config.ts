const {angularPlugin} = require("./utils/plugins/angular");
const {reactPlugin} = require("./utils/plugins/react");

module.exports = {
  options: {
    angular: {
      plugins: [angularPlugin],
      typescript: true,
      preserveImports: true
    },
    react: {
      plugins: [reactPlugin],
      typescript: true,
      preserveImports: true
    }
  }
};
