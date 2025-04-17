import debug from 'debug'
import { buildConfig, createNode } from '@trust0/node'
// Enable debug for libp2p and relay components
debug.enable('libp2p:*,relay:*')

const log = debug('relay:server')
const SK = process.env.PRIVATE_KEY || "f6335f09116b362a779d964edd431d3bb6e227aafde36653fb20836331e569e53142bebd812054496050646872c6a33d7ecc008f02eaddfc7a3d04cc13739a1d";
const PORT = parseInt(process.env.PORT || '5050');

const announceAddress = process.env.ANNOUNCE_ADDRESS ||
  `/ip4/127.0.0.1/tcp/${PORT}/ws/p2p/12D3KooWD8fB9GHxMgV7gHg2op9chXcn8M5Tg4zqiVYb6bSKj8DS`;

(async () => {

  const config = buildConfig({
    type: 'relay',
    addresses: {
      listen: [
        `/ip4/0.0.0.0/tcp/${PORT}/ws`,
        `/p2p-circuit`,
        `/webrtc`
      ],
      announce: [
        announceAddress
      ]
    },
    sk:SK
  })

  const relayNode = await createNode(config);
  log('RELAY node created successfully with config', config)
  const multiAddresses = relayNode.libp2p.getMultiaddrs();
  multiAddresses.forEach(ma => {
    console.log('RELAY listening on', ma.toString())
  })
  relayNode.libp2p.addEventListener("peer:discovery", async (event) => {
    console.log('Peer discovered:', event.detail.id.toString(), "with multiaddr", event.detail.multiaddrs)
  })
})()