
function echo(params) {
  return {
    action: process.env["__OW_ACTION_NAME"],
    hello: "world",
    params: params,
    version: process.versions,
    packages: require("./package.json").dependencies
  };
}

module.exports.main = function main(params) {
  try {
    return echo(params);
  } catch (e) {
    return {
      error: '' + e.stack
    }
  }
};
