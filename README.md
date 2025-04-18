# Trust0 Relay server

Package contains the Trust0 relay server, used to transmit point-to-point encrypted data on the peer to peer network.

## Environment Variables

DO NOT USE DEFAULT ENV VARIABLES IN PRODUCTION

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `DELEGATED_ROUTING_V1_HOST` | Host URL for the delegated routing service | `http://localhost:8081` |
| `RELAY_MULTI_ADDR` | Multiaddress for the relay service | `/ip4/127.0.0.1/tcp/5050/ws` |
| `TRUSTLESS_GATEWAY` | URL for the trustless gateway | `http://localhost:8080` |
| `PORT` | Port for the relay service | `5050` |
| `PRIVATE_KEY` | Private key for the relay server | `f6335f09116b362a779d964edd431d3bb6e227aafde36653fb20836331e569e53142bebd812054496050646872c6a33d7ecc008f02eaddfc7a3d04cc13739a1d` |
| `ANNOUNCE_ADDRESS` | Address that the relay server announces | `/ip4/127.0.0.1/tcp/5050/ws/p2p/12D3KooWD8fB9GHxMgV7gHg2op9chXcn8M5Tg4zqiVYb6bSKj8DS` |

## Running the server

```
npx @trust0/relay
```