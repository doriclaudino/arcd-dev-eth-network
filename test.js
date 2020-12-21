const { spawn } = require("child_process");
const test = require("tape");

// Start the app
const env = Object.assign({}, process.env, { RPC_PORT: 5000 });

//spawn the network on port 5000
const child = spawn("node", ["index.js"], { env });

test("responds created accounts", (t) => {
  //fail if 2 asserts or more was executed
  t.plan(2);

  // Wait until the server is ready
  child.stdout.on("data", (_) => {
    // Make a request to our app

    const Web3 = require("web3");
    let publicUrl = `http://127.0.0.1:5000`;
    let web3 = new Web3(publicUrl);

    (async () => {
      const accounts = await web3.eth.getAccounts();
      t.ok(accounts.length>0);
      // stop the server
      child.kill();
    })();
  });
});
