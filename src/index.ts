import debug from 'debug'
import { buildConfig, createNode } from '@trust0/node'
import { ANNOUNCE_ADDRESS, PORT, SK } from './config';
// Enable debug for libp2p and relay components
debug.enable('libp2p:*,relay:*')

const log = debug('relay:server');

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
        ANNOUNCE_ADDRESS
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