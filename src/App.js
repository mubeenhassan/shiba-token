import React, { useState } from 'react';
import './App.css';
import logo from './assets/images/shib-logo.svg';
import swapLogo from './assets/images/swap-ico.svg';
import hero_img from './assets/images/hero-shib.png'
import hero_moon from './assets/images/moon.svg';
import Uniswap_img from './assets/images/uniswap.svg';
import Uniswap_trans from './assets/images/uniswap_transparent.svg';
import relife_fund from './assets/images/relife_fund.png';
import relife_img from './assets/images/relife.png';
import burn_img from './assets/images/burn.svg';
import burn_trans from './assets/images/burn_trans.svg';
import lang_icon from './assets/images/lang-ico.svg';
import menu_icon from './assets/images/menu_icon.svg';
import shiba_coin_1 from './assets/images/shiba_coin-1.png';
import cartoon from './assets/images/cartoon.png';
import circle_dash from './assets/images/circle-dashes.svg';
import ico_graph_ora from './assets/images/ico-graph-ora.svg';
import coin_elip from './assets/images/coin-elip.png';
import circle_img_1 from './assets/images/circle_img1.png';
import swap_card from './assets/images/swap_card.png'
import icon_discover from './assets/images/ico-dis.svg'
import icon_reddit from  './assets/images/ico-red.svg'
import icon_twitter from  './assets/images/ico-tw.svg'
import icon_instagram from  './assets/images/instagram.svg'
import icon_telegram from  './assets/images/ico-tel.svg'



function App() {
  const [uniswap, setUniswap] = useState(false);
  const [relife, setRelife] = useState(false);
  const [burn, setBurn] = useState(false);
  const [menu, setMenu] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main_token_container">
      <div className='inner_container'>
        <nav>
          <a href='#' className='brand_logo'>
            <img src={logo} />
            <span>SHIBA TOKEN</span>
          </a>
          <div className={isOpen ? ' close_btn' : "nav_bars"} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={isOpen ? 'mobile_navLink' : "navlinks"}>
            <li><a href='#'>Ecosystem</a></li>
            <li><a href="#">Buy</a></li>
            <li className='menu_link nav_more_menu'>
              <a href='#' onClick={() => setMenu(!menu)}>More<img src={menu_icon} className='menu_icon' />
                <ol className={menu ? 'show_menu ' : ' hidden_menu'}>
                  <img src={lang_icon} />
                  <a href='#'>Art</a>
                  <a href='#'>Rescue</a>
                  <a href='#'>Community</a>
                </ol>
              </a>
            </li>
            <li className='nav_lang_menu'>
              <a href='#' onClick={() => setLangMenu(!langMenu)}>EN<img src={menu_icon} className='menu_icon' />
                <ol className={langMenu ? 'show_lang_menu ' : ' hidden_menu'}>
                  <img src={lang_icon} />
                  <a href='#'>Spanish</a>
                  <a href='#'>German</a>
                  <a href='#'>Italian</a>
                  <a href='#'>Hebrew</a>
                  <a href='#'>Russian</a>
                  <a href='#'>Romanian</a>
                  <a href='#'>Vietnamese</a>
                  <a href='#'>Chinese</a>
                </ol></a>
            </li>
            <a href='#' className='animation_btn'>
              <img src={swapLogo} />
              <span>Use ShibaSwap</span>
            </a>
          </ul>
        </nav>
        <div className='token_hero_section'>
          <div className='hero_text'>
            <h1>A Decentralized Meme Token that Evolved into a Vibrant Ecosystem</h1>
            <p>SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The Shiba Incubator — And more. 585k+ Community Members and Growing Fast!</p>
            <div className='hero_btn_container'>
              <a href='#' className='special_btn'>How to Buy</a>
              <a href='#' className='animation_btn'>
                <img src={swapLogo} />
                <span>Use ShibaSwap</span>
              </a>
            </div>
          </div>
          <div className='hero_img'>
            <img src={hero_img} className='cartoon_image' />
            {/* <img src={hero_moon} className='moon_image' /> */}
          </div>
        </div>
        <div className='ecosystem_section'>
          <div className='ecosystem_text'>
            <h1>Our Project & Ecosystem</h1>
            <p>From its inception, Shiba Inu has done things differently. Starting with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in Uniswap, then “burned” the other half to Ethereum co-founder <strong>Vitalik Buterin</strong> for safekeeping.</p>
            <p>To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history, and then <strong>actually</strong> burned 40% of its total supply to a dead wallet, ensuring our long-term success and stability. In the words of Ryoshi, “Thank you to the woofmeister for enabling true decentralization. Now we truly begin.”</p>
          </div>
          <div className='ecosystem_card'>
            <div className='card_1'>
              <a href='#' className='ecosystem_data' onMouseEnter={() => setUniswap(!uniswap)} onMouseLeave={() => setUniswap(!uniswap)}>
                <div className='ecosystem_images' >{uniswap ? <img src={Uniswap_img} /> : <img src={Uniswap_trans} />}
                </div>
                <p>Liquidity Locked to Uniswap</p>
              </a>
            </div>
            <div className='card_2' >
              <a href='#' className='ecosystem_data' onMouseEnter={() => setRelife(!relife)} onMouseLeave={() => setRelife(!relife)}>
                <div className='ecosystem_images'>
                  {relife ? <img src={relife_fund} /> : <img src={relife_img} />}
                </div>
                <p>India's Covid Relief Fund</p>
              </a>
            </div>
            <div className='card_3'>
              <a href='#' className='ecosystem_data' onMouseEnter={() => setBurn(!burn)} onMouseLeave={() => setBurn(!burn)}>
                <div className='ecosystem_images'>
                  {burn ? <img src={burn_img} /> : <img src={burn_trans} />}
                </div>
                <p>Vitalik Buterin Burn</p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div className='coin_section'>
            <div className='coin_card'>
              <div className='coin_img'>
                <div>
                  <img src={shiba_coin_1} />
                </div>
                <img src={coin_elip} className='blur_bg' />
              </div>
              <div className='coin_box'>
                <div className='coin_title'>
                  <h3>SHIB</h3>
                  <a href='#'>
                    <img src={ico_graph_ora} />
                    <span>See Live Charts</span>
                  </a>
                </div>
                <br />
                <p>The Shiba Inu token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets.</p>
                <br />
                <p>Between its international recognition and its legitimate utility, <span>SHIB</span> is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on</p>
                <p>ShibaSwap, our proprietary DEX.</p>
                <br />
                <a href='#' className='special_btn'>Buy SHIB</a>
              </div>
            </div>
            <div className='coin_card'>
              <div className='coin_img'>
                <div>
                  <img src={shiba_coin_1} />
                </div>
                <img src={coin_elip} className='blur_bg' />
              </div>
              <div className='coin_box'>
                <div className='coin_title'>
                  <h3>SHIB</h3>
                  <a href='#'>
                    <img src={ico_graph_ora} />
                    <span>See Live Charts</span>
                  </a>
                </div>
                <br />
                <p><span>LEASH</span> was originally set to be a rebase token, but then we removed the rebase and unleashed its full potential. With a total supply of ONLY<strong> 107,646</strong> tokens, it represents the other end of our Ecosystem spectrum.</p>
                <br />
                <p>LEASH is the second token incentivized on ShibaSwap and will offer lucrative rewards for the holders providing its liquidity.</p>
                <br />
                <a href='#' className='special_btn'>Buy SHIB</a>
              </div>
            </div>
            <div className='coin_card'>
              <div className='coin_img'>
                <div>
                  <img src={shiba_coin_1} />
                </div>
                <img src={coin_elip} className='blur_bg' />

              </div>
              <div className='coin_box'>
                <div className='coin_title'>
                  <h3>SHIB</h3>
                  <a href='#'>
                    <img src={ico_graph_ora} />
                    <span>See Live Charts</span>
                  </a>
                </div>
                <br />
                <p><span>BONE</span> has 250,000,000 tokens, and is designed to fit perfectly between the previous two tokens in regards to circulation supply.</p>
                <br />
                <p>Moreover, the token is a Governance token which will allow the #ShibArmy to vote on upcoming proposals on our <span>Doggy DAO</span>.</p>
                <br />
                <a href='#' className='special_btn'>Buy SHIB</a>
              </div>
            </div>
          </div>
        </div>


        <div className='how_to_buy_section'>
          <div className='how_to_buy_title'>
            <h1>How to Buy</h1>
            <p>SHIB and LEASH are best purchased and sold through <strong>ShibaSwap</strong>, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.</p>
            <br/>
            <p>SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.</p>
            <br />
            <div>
              <a href='#' className='special_btn'>Buy SHIB</a>
              <a href='#' className='special_btn'>Buy LEASH</a>
              <a href='#' className='special_btn'>Buy BONE</a>
            </div>
          </div>
          <div className='rotation_container'>
            <img src={cartoon} className='cartoon_img' />
            <img src={circle_dash} className='circle_img' />
            <div>
              {/* <img src={circle_img_1}/> */}
            </div>
          </div>
        </div>

        <div className=' quick_start'>
          <h1>
            Quick Start Guide
          </h1>
          <div className='quick_section'>

            <div className='quick_card'>
              <div className='quick_circle'>
                <span>1</span>
                <div></div>
              </div>
              <div className='quick_text'>
                <h3>
                  Create MetaMask wallet</h3>
                <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
              </div>
            </div>
            <div className='quick_hori'>
            </div>
            <div className='quick_card'>
              <div className='quick_circle'>
                <span>2</span>
                <div></div>
              </div>
              <div className='quick_text'>
                <h3>
                  
Send ETH to your wallet</h3>
                <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.</p>
              </div>
            </div>
            <div className='quick_hori'>
            </div>
            <div className='quick_card'>
              <div className='quick_circle'>
                <span>3</span>
                <div></div>
              </div>
              <div className='quick_text'>
                <h3>
                  
Connect your wallet to ShibaSwap</h3>
                <p>Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.</p>
              </div>
            </div>
            <div className='quick_hori'>
            </div>
            <div className='quick_card'>
              <div className='quick_circle'>
                <span>4</span>
                <div></div>
              </div>
              <div className='quick_text'>
                <h3>
                  
Swap ETH for SHIB, LEASH or BONE</h3>
                <p>You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.</p>
              </div>
            </div>
            <div className='quick_hori'>
            </div>
          </div>
        </div>



        <div className='swap_container'>
          <div className='swap_card'>
            <img src={swap_card} className='swap_card_img' />
            <a href='#' className='animation_btn'>
              <img src={swapLogo} />
              <span>Use ShibaSwap</span>
            </a>
          </div>
          <div className='swap_text' >
            <h1>ShibaSwap</h1>
            <div className='swap_logo_container'>
              <div className='swap_logo'></div>
              <div className='swap_logo_elip'>
                <span></span>
                <p>On board</p>
              </div>
              <a href='#' className='animation_btn'>
                <img src={swapLogo} />
                <span>Use ShibaSwap</span>

              </a>
            </div>
            <br />
            <p>SHIB, LEASH, and BONE, come together to create <span>ShibaSwap</span>, the next evolution in DeFi platforms. ShibaSwap gives users the ability to <strong>DIG</strong> (provide liquidity), <strong>BURY</strong> (stake), and <strong>SWAP</strong> tokens to gain <strong>WOOF Returns </strong>  through our sophisticated and innovative passive income reward system.</p>
            <br />
            <p>Our platform also allows the ShibArmy to access upcoming NFTs and additional tools, such as portfolio trackers, to make navigating the crypto world simple and intuitive.</p>
          </div>
        </div>
        <div className='art_section'>
          <div className='art_text'>
            <h1>Art</h1>
            <p>We are proud to support ingenuity in all its forms with the <span>Shiba Inu Incubator</span>. The ShibArmy is made up of talented individuals who have united to build something remarkable, and we support this by cultivating an environment which encourages creativity and growth. Through the power of the Shiba Inu Incubator, we help holders find the tools they need to bring their inspiration and unique perspectives to life. This as just another way to encourage others to step outside of preconceived limits and regulations and experience what it means to be part of our decentralized movement.</p>
          </div>
        </div>
        <div className='rescue_section'>
          <div className='rescue_text'>
            <h1>Rescue</h1>
            <p>From the tips of their noses to the ends of their tails, Shiba Inu are intelligent, brave, and independent, with an equal propensity for loyalty and mischief. Sadly, the characteristics which make them extraordinary are the same ones which make them a challenging pet. Inexperienced owners can find themselves unprepared for a dog that’s known for its bold (i.e. stubborn) personality.</p>
            <p>Luckily, we are helping these dogs in real life! We use <span>Amazon Smile</span> to collect and donate a percentage of your Amazon purchases to the<span> Shiba Inu Rescue Association</span>. Joining is easy and free! Just use</p>
            <p><span>
              <a href='#'>smile.amazon.com</a>
              </span> when placing orders and select Shiba Inu Rescue Association (a 501(c)3, preferred non-profit organization). You’re seconds away from helping Shibs in need. Start funding shelters today.</p>
          </div>
          <div className='rescue_img'>
            <a href='#'>Rescue Me</a>
          </div>
        </div>

        <div className='community_section'>
          <h1>
            Community
          </h1>
          <p>If you'd like to donate to the <strong>Devs</strong>, send <span>ETH</span>, <span>SHIB</span>, <span>LEASH</span> or <span>BONE</span> here. Thank you for your support! WOOF!
          </p>
          <div className='community_box'>
           <div className='comm_text'>
           <div>0xc351155C80aCD043BD</div>
            <div className='comm_blur_text'>5F8FE7ffc8536af1fF9375</div>
           </div>
            <a href='#' className='animation_btn'>
                <img src={swapLogo} />
                <span>Use ShibaSwap</span>
              </a>
          </div>
        </div>
        <div className='footer_section'>
          <div>
            <p>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date,<br/> accurate SHIB information.</p>
            <br/>
            <div className='footer_icons'>
              <a href='#'>
                <img src={icon_telegram}/>
                <p>Shiba Ecosystem Telegram</p>
              </a>
              <a href='#'>
                <img src={icon_twitter}/>
                <p>
Twitter</p>
              </a>
              <a href='#'>
              <img src={icon_reddit}/>
                <p>Reddit</p>
              </a>
              <a href='#'>
              <img src={icon_discover}/>
                <p>Discord</p>
              </a>
              <a href='#'>
              <img src={icon_instagram}/>
                <p>Instagram</p>
              </a>
            </div>
          </div>
          </div>
          <div className='copyright'>
            <a href='#'>Medium</a>
            <a href='#'>Etherscan</a>
            <a href='#'>CoinMarketCap</a>
            <a href='#'>CoinGecko</a>
          </div>
        
      </div>
    </div>
  );
}

export default App;
