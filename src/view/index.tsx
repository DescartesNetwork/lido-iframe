import { useEffect } from 'react'
import { useUI, net } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ dark: '#fff', light: '#fff' })
  }, [setBackground])

  return net === 'mainnet' ? (
    <EmbededView
      appId={appId}
      src={'https://solana.lido.fi/'}
      title="Liquidity for staked assets."
      wallet={window.sentre.wallet}
    />
  ) : (
    <MainnetOnly />
  )
}

export default View
