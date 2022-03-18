import React, { useState, useEffect } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from "@solana/web3.js";
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Loader from './components/Loader'

import { Providers } from './providers';
require('@solana/wallet-adapter-react-ui/styles.css');

export function Paths() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = React.useMemo(
    () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, []);

  return (
    <>
      {
        loading ?
          <Loader loading/>
        :
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Providers>
                  <Home/>
              </Providers>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      }
    </>
  );
}
