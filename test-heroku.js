const test = require("tape");
const Web3 = require("web3");

test("responds created accounts", (t) => {
  //fail if 2 asserts or more was executed
  t.plan(1);

  let publicUrl = `http://arcd-dev-eth-network.herokuapp.com/`;
  let web3 = new Web3(publicUrl);

  (async () => {
    const accounts = await web3.eth.getAccounts();
    t.ok(accounts.length > 0);
  })();
});
