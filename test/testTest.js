const assert = require("assert");
const openwhisk = require("openwhisk");

const options = {
  apihost: process.env["WSK_HOST"],
  api_key: process.env["WSK_KEY"]
};

//testing deployed OpenWhisk functions
describe("DEPLOYED: Testing Deployed functions", () => {
  it("Is echo function callable", () => {
    var ow = openwhisk(options);

    const myparams = { debug: true };

    return ow.actions
      .invoke({
        name: "docker-test",
        blocking: true,
        result: true,
        params: myparams
      })
      .then(r => {
        console.log(r);
        assert.strictEqual(
          r.version.node,
          "8.11.4",
          "Incorrect node.js version on OpenWhisk"
        );
        assert.equal(
          r.packages["probot"],
          require("./../package.json").dependencies["probot"],
          "Incorrect probot version"
        );
        assert.equal(
            r.params.debug,
            myparams.debug,
            "Parameters don't match"
          );
        Promise.resolve(r);
      });
  }).timeout(5000);
});
