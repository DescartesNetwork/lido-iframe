import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://solana.lido.fi/'}
      title="Liquidity for staked assets."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
