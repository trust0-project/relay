


export const PORT = parseInt(process.env.PORT || '5050');


export const SK = process.env.PRIVATE_KEY || "f6335f09116b362a779d964edd431d3bb6e227aafde36653fb20836331e569e53142bebd812054496050646872c6a33d7ecc008f02eaddfc7a3d04cc13739a1d";


export const ANNOUNCE_ADDRESS = process.env.ANNOUNCE_ADDRESS ||
`/ip4/127.0.0.1/tcp/${PORT}/ws/p2p/12D3KooWD8fB9GHxMgV7gHg2op9chXcn8M5Tg4zqiVYb6bSKj8DS`;
