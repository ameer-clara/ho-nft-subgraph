# ho-nft-subgraph

My humble opionion of this NFT ...
This repository contains the subgraph used by [ho-nft](https://github.com/codiak/ho-nft)

## Dev notes

- Install [graph-cli](https://github.com/graphprotocol/graph-cli)
- Initialize with

```sh
graph init --index-events
graph codegen && graph build
```

- After making changes to subgraph.yaml:

```sh
graph auth --product hosted-service <TOKEN>
graph deploy --product hosted-service <YOUR_SUBGRAPH>
```

- [subgraph explorer](https://thegraph.com/hosted-service/subgraph/ameer-clara/honft-test)
