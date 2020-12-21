const test = require("tape");
const Web3 = require("web3");
const port = 42880

test("responds created accounts", (t) => {
  //fail if 2 asserts or more was executed
  t.plan(2);

  let publicUrl = `https://arcd-dev-eth-network.herokuapp.com:${port}`;
  let web3 = new Web3(publicUrl);

  (async () => {
    const accounts = await web3.eth.getAccounts();
    t.ok(accounts.length > 0);
  })();
});
