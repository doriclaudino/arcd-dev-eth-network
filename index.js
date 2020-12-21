const ganache = require("ganache-cli");
const package = require("./package.json");
const hostname = "herokuapp";
const projectName = package.name;
const port = process.env.PORT || 8545;
const network_id = process.env.NETWORK_ID || 6969;

const server = ganache.server({
  network_id,
  port,
});

server.listen(port, function (err, blockchain) {
  if (err) console.log(err);
  else {
    const { options, accounts } = blockchain;
    console.log(options);
    console.log(Object.keys(accounts));
    console.log(`Ethereum running`);
    console.log(`\t local: http://127.0.0.1:${port}`);
    console.log(`\t public: http://${projectName}.${hostname}:${port}`);
  }
});
