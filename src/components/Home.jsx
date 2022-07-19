import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import {BsArrowUpRight} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import {BsArrowDownShort} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'

const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    background: #f7f0f6;
    position: relative;
    .wallet{
        @media screen and (min-width:481px) and (max-width:768px) {
           width: 50%;
           margin-left: 25%;
        }
        @media (max-width:480px) {
            width: 90%;
            margin-left: 5%;
        }
        width: 35%;
        position: absolute;
        height: 75vh;
        background: #fff;
        z-index:150;
        margin-left: 32.5%;
        top: 15%;
        border-radius: 15px;
        .top{
            width: 95%;
            height: 10vh;
            margin: auto;
            background-color: #8787949e;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            padding: 2%;
            align-items: center;
            .qr{
                width: 40%;
                height: 80%;
                background: #fff;
                color: blue;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
            }
            .desk{
                width: 40%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: blue;
                border-radius: 10px;
            }
        }
        p{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 5%;
            padding-bottom: 2%;
        }
        input{
            @media (max-width:480px) {
                height: 6vh;
            }
            width: 80%;
            margin-top: 5%;
            margin-left: 10%;
            height: 6vh;
            padding-left: 2%;
            border-radius: 5px;
            border: none;
            background-color: #8787949e;
            &:focus{
                outline: none;
            }
        }
        .cardCont{
            width: 90%;
            height: 40%;
            margin: auto;
            margin-top: 5%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 2%;
            a{
                @media (max-width:480px) {
                    font-size: .7rem;
                }
                text-decoration: none;
                color: black;
                width: 22%;
                height: 50px;
                font-size: 1vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;               
            }
            .cards{
                @media (max-width:480px) {
                    font-size: .7rem;
                }
                width: 100%;
                height: 50px;
                font-size: 1vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .imgC{
                    @media (max-width:480px) {
                        padding-bottom: 11%;
                    }
                    width: 40%;
                    height: 60%;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                }
                a{
                    margin-bottom:5%;
                }
            }
        }
        .cncel{
            position: absolute;
            top: -9%;
            left: 93%;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    }
    .token{
        @media screen and (min-width:481px) and (max-width:768px) {
            width: 50%;
            margin-left: 25%;
        }
        @media (max-width:480px) {
            width: 90%;
            margin-left: 5%;
        }
        width: 35%;
        position: absolute;
        height: 80vh;
        background: #fff;
        z-index:150;
        margin-left: 32.5%;
        top: 10%;
        border-radius: 15px;
        .up{
            @media (max-width:480px) {
                display: none;
            }
            width: 95%;
            height: 20vh;
            margin: auto;
            margin-top: 3%;
            border-bottom: 1px solid #edeef2;
            display: flex;
            justify-content: space-between;
            padding: 2%;
            gap: 5%;
            flex-wrap: wrap;
            align-items: center;
            .coins{
                min-width: 20%;
                height: 6vh;
                border: 1px solid #000;
                display: flex;
                justify-content: center;
                gap: 5%;
                align-items: center;
                border-radius: 5px;
                cursor: pointer;
                &:hover {
                    background: #edeef2;
                    cursor: pointer;
                }
                img{
                    left: 5px;
                    height: 20px;
                    width: 20px;
                }
            }
        }
        .dwn{
            @media (max-width:480px) {
                height: 50vh;
            }
            width: 95%;
            height: 20vh;
            margin: auto;
            margin-top: 3%;
            border-bottom: 1px solid #edeef2;
            display: flex;
            flex-direction: column;
            padding: 2%;
            gap: 10%;
            align-items: flex-start;
            overflow: auto;
            .coins{
                @media screen and (min-width:481px) and (max-width:768px) {
                    min-width: 25%;
                }
                width: 20%;
                height: 8vh;
                display: flex;
                justify-content: space-between;
                padding: 2px;
                align-items: center;
                border-radius: 5px;
                cursor: pointer;
                img{
                    left: 5px;
                    height: 20px;
                    width: 20px;
                }
            }
        }
        .btm{
            height: 13vh;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                color: #dd3485;
                cursor: pointer
            }
        }
        p{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-top: 5%;
            padding-left: 3%;
            padding-bottom: 8%;
        }
        input{
            @media (max-width:480px) {
                height: 6vh;
                font-size: 1rem;
            }
            width: 80%;
            margin-top: 0%;
            margin-left: 10%;
            height: 9vh;
            padding-left: 2%;
            border-radius: 18px;
            font-size: 1.5vw;
            font-weight: 300;
            border: 1px solid grey;
            &:focus{
                border: none;
                outline: solid 1px #dd3485;
            }
        }
        .cardCont{
            width: 90%;
            height: 40%;
            margin: auto;
            margin-top: 5%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 2%;
            .cards{
                @media (max-width:480px) {
                    font-size: .7rem;
                }
                width: 22%;
                height: 50px;
                font-size: 1vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .imgC{
                    @media (max-width:480px) {
                        padding-bottom: 11%;
                    }
                    width: 40%;
                    height: 60%;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                }
                a{
                    text-decoration: none;
                    color: black;
                    margin-bottom:5%;
                }
            }
        }
        .cncel{
            position: absolute;
            top: 2%;
            left: 93%;
            color: #000;
            font-size: 1.2rem;
            cursor: pointer;
        }
    }
    .modal{
        @media screen and (min-width:481px) and (max-width:768px) {
            width: 50%;
            margin-left: 25%;
        }
        @media (max-width:480px) {
            width: 90%;
            margin-left: 5%;
            top: 5%;
        }
        width: 35%;
        position: absolute;
        height: 75vh;
        background: #fff;
        z-index:150;
        margin-left: 32.5%;
        top: 15%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            padding-top: 5%;
            margin-left: 5%;
        }
        .opt{
            width: 90%;
            margin: auto;
            height: 10vh;
            border-radius: 15px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background: #edeef2;
            position: relative;
            cursor: pointer;
            padding: 0% 2%;
            &:hover {
                border: 1px solid #dd3485;
            }
            p{
                @media screen and (min-width:481px) and (max-width:768px) {
                    font-size: .8rem;
                }
                @media (max-width:480px) {
                    font-size: .8rem;

                }
                font-size: 1vw;
                padding-top: 0;
            }
            a{
                color: #000;
                text-decoration: none;
                &:hover {
                    text-decoration: underline #dd3485;
                }
            }
            &:nth-child(6){
                height: 15vh;
                background: #fbfbfc;
                border: 1px solid #edeef2;
                a{
                    color: #dd3485;
                }
                &:hover {
                    border: none;
                }

            }
            img{
                left: 85%;
                height: 20px;
                width: 20px;
                position: absolute;
            }
        }
        .cncel{
            @media screen and (min-width:481px) and (max-width:768px) {
                top: 1.5%
            }
            @media (max-width:480px) {
                top: 2.5%;
            }
            position: absolute;
            top: 5%;
            left: 90%;
            color: grey;
            font-size: 1.3rem;
            cursor: pointer;
        }
    }
    .other{
        @media (max-width:480px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80%;
            margin: auto;
            height: 6vh;
            background: #ffffff;
            border-radius: 12px;
            padding: 2%;
            position: relative;
            margin-top: 25%;
            font-size: 1rem;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
        display: none;
        a{
            text-decoration: none;
            color: grey;
            &:hover{
                color: black;
            }
            span{
                background: #ebedf2;
                padding: 15% 20%;
                height: 100%;
                border-radius: 12px;
                color: black;
                font-weight: 700;
            }
        }
        .arrow{
            position: absolute;
        }
    }
`
const Card = styled.div`
    @media screen and (min-width:481px) and (max-width:768px) {
        width: 60%;
        left: 20%;
    }
    @media (max-width:480px) {
        width: 90%;
        left: 5%;
        top: 2vh;
    }
    width: 40%;
    left: 30%;
    top: 10vh;
    height: 50vh;
    background: #fff;
    position: absolute;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .settings{
        position: absolute;
        top: 5%;
        left: 90%;
        cursor: pointer;
    }
    .swap{
        position: absolute;
        border:2px solid #fff;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        align-items: center;
        border-radius: 50%;
        background: #f7f8fa;
        color: grey;
        top: 35%;
    }
    .opt1{
        @media screen and (min-width:481px) and (max-width:768px) {
            width: 30%;
            left: 60%;
        }
        @media (max-width:480px) {
            width: 30%;
            left: 65%;
        }
        position: absolute;
        top: 20%;
        left: 70%;
        background: #edeef2;
        box-shadow: rgba(200, 200, 210, 0.2) 0px 7px 29px 0px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        width: 20%;
        height: 6vh;
        img{
            left: 5px;
            height: 20px;
            width: 20px;
            position: absolute;
        }
        .drpdwn{
            left: 70%;
            font-size: 2rem;
            position: absolute;
        }
    }
    .opt2{
        @media (max-width:480px) {
            width: 50%;
            left: 45%;
        }
        position: absolute;
        top: 48%;
        left: 50%;
        background: #e8006f;
        cursor: pointer;
        color: #fff;
        box-shadow: rgba(200, 200, 210, 0.2) 0px 7px 29px 0px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 6vh;
        .drpdwn{
            left: 80%;
            font-size: 2rem;
            position: absolute;
            color: #fff;
        }
    }
    .swapp1{
        top: 48%;
    }
    .swapp2{
        top: 20%;
    }
    p{
        position: absolute;
        top: 5%;
        left: 5%;
    }
    .inputContainer{
        height: 60%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5%;
        input{
            @media (max-width:480px) {
                font-size: 2rem;
            }
            height: 40%;
            display: block;
            width: 100%;
            border-radius: 15px;
            background: #f7f8fa;
            padding-left: 2%;
            font-size: 2.5vw;
            font-family: 'Roboto Mono', monospace;
            border: none;
            &:focus{
                outline: none;
            }
            &:hover{
                border: 1px solid #d9d7d7;
            }
            &::placeholder{
                color: #d9d7d7;
            }
        }

    }
    button{
        @media screen and (min-width:481px) and (max-width:768px) {
            font-size: 1.2rem;
        }
        @media (max-width:480px) {
            font-size: 1.2rem;
        }
        height: 10vh;
        width: 90%;
        background: #fdeaf1;
        color: #dd3485;
        font-size: 1.3vw;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        &:hover{
            background: #f0dce3;
        }
    }
    select{
        position: absolute;
        top: 25%;
        width: 15%;
        left: 78%;
    }
    .secondSelect{
        position: absolute;
        top: 50%;
        width: 15%;
        left: 78%;
    }
`

function Home() {
    
    const [showModal, setShowModal]= useState(false)
    const [showWallet, setShowWallet]= useState(false)
    const [swapWallet, setSwapWallet]= useState(false)
    const [selectToken, setSelectToken]= useState(false)
    const [tokenVal, setTokenVal]= useState('ETH')
    const [optionVal, setOptionVal]= useState('Select a Token')

        const[swapping, setSwapping] = useState(false)

        const swap = (sw) => {
            setSwapping(!swapping)
        }

    const modalTransitions = useTransition(showModal, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showModal,
        delay: 200,
          // config: config.molasses,
        // onRest: () => set(!show),
      })

      const walletTransitions = useTransition(showWallet, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showWallet,
        delay: 200,
          // config: config.molasses,
        // onRest: () => set(!show),
      })

      const swapWalletTransitions = useTransition(swapWallet, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: swapWallet,
        delay: 200,
          // config: config.molasses,
        // onRest: () => set(!show),
      })

      const selectTokenTransitions = useTransition(selectToken, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: selectToken,
        delay: 200,
          // config: config.molasses,
        // onRest: () => set(!show),
      })

     let  ETH = 'ETH'
     let DAI = 'DAI'
     let USDC = 'USDC'
      let USDT = 'USDT'
      let WBTC = 'WBTC'
      let WETH = 'WETH'
      let ALI = 'ALI'
      let ALICE = 'ALICE'
      let AMP = 'ALICE'
      let API3 = 'API3'
      let BTC = '0xBTC'
    let INCH = '1INCH'

    const  ETHs = () =>{
        setTokenVal(ETH)
        setSwapWallet(false)
    }
    const DAIs = () =>{
        setTokenVal(DAI)
        setSwapWallet(false)
    } 
    const USDCs = () =>{
        setTokenVal(USDC)
        setSwapWallet(false)
    } 
     const USDTs = () =>{
        setTokenVal(USDT)
        setSwapWallet(false)
     } 
     const WBTCs = () =>{
        setTokenVal(WBTC)
        setSwapWallet(false)
     }
     const WETHs = () =>{
        setTokenVal(WETH)
        setSwapWallet(false)
     } 
     const ALIs = () =>{
        setTokenVal(ALI)
        setSwapWallet(false)
     } 
     const ALICEs = () =>{
        setTokenVal(ALICE)
        setSwapWallet(false)
     } 
     const AMPs = () =>{
        setTokenVal(AMP)
        setSwapWallet(false)
     }
     const API3s = () =>{
        setTokenVal(API3)
        setSwapWallet(false)
     }
     const BTCs = () =>{
        setTokenVal(BTC)
        setSwapWallet(false)
     }

   const INCHs = () =>{
    setTokenVal(INCH)
    setSwapWallet(false)
   }


   const  ETHss = () =>{
    setOptionVal(ETH)
    setSelectToken(false)
}
const DAIss = () =>{
    setOptionVal(DAI)
    setSelectToken(false)
} 
const USDCss = () =>{
    setOptionVal(USDC)
    setSelectToken(false)
} 
 const USDTss = () =>{
    setOptionVal(USDT)
    setSelectToken(false)
 } 
 const WBTCss = () =>{
    setOptionVal(WBTC)
    setSelectToken(false)
 }
 const WETHss = () =>{
    setOptionVal(WETH)
    setSelectToken(false)
 } 
 const ALIss = () =>{
    setOptionVal(ALI)
    setSelectToken(false)
 } 
 const ALICEss = () =>{
    setOptionVal(ALICE)
    setSelectToken(false)
 } 
 const AMPss = () =>{
    setOptionVal(AMP)
    setSelectToken(false)
 }
 const API3ss = () =>{
    setOptionVal(API3)
    setSelectToken(false)
 }
 const BTCss = () =>{
    setOptionVal(BTC)
    setSelectToken(false)
 }

const INCHss = () =>{
    setOptionVal(INCH)
    setSelectToken(false)
}

  
  return (

    <Container>
        <Nav showModal={showModal} setShowModal={setShowModal} />
        <Card>
            <p>Swap</p>
            <FiSettings className='settings' size='1.2rem'/>
            <div className="inputContainer">
            <input type="text" inputMode='decimal' pattern='^[0-9]*[].,]?[0-9]*$' placeholder='0.0' minLength='1' maxLength='79' />
            <input type="text" inputMode='decimal' pattern='^[0-9]*[].,]?[0-9]*$' placeholder='0.0' minLength='1' maxLength='79'  />
            </div>
            <button onClick={()=>setShowModal(true)}>Connect Wallet</button>
            <div className='swap' onClick={(sw)=>swap(sw)}><BsArrowDownShort/></div>
            <div className={swapping ? 'swapp1 opt1' : 'opt1'} onClick={()=>setSwapWallet(true)}  ><img src="/eth.png" alt=""/> {tokenVal} <RiArrowDropDownLine className='drpdwn'/></div>
            <div className={swapping ? 'swapp2 opt2' : 'opt2'} onClick={()=>setSelectToken(true)}>{optionVal}<RiArrowDropDownLine className='drpdwn'/></div>            
        </Card>

        <div className="other">
            <Link to='/'><span>Swap</span></Link>
            <Link to='/'>Pool</Link>
            <Link to='/'>Vote</Link>
            <Link to='/'>Charts <BsArrowUpRight className='arrow' size='.5rem'/></Link>
        </div>

        {
        modalTransitions(
        (styles, item) => item && <animated.div style={styles} className='modal'>
            <p>Connect Wallet</p>
            <div className='opt' onClick={()=>setShowWallet(true)}><Link to='/form'>Install metamask <img src="metamask.png" alt="" /></Link></div>
            <div className='opt' onClick={()=>setShowWallet(true)}>WalletConnect <img src="walletConnectIcon.svg" alt="" /></div>
            <div className='opt' onClick={()=>setShowWallet(true)}>Coinbase wallet <img src="coinbaseWalletIcon.svg" alt="" /></div>
            <div className='opt' onClick={()=>setShowWallet(true)}>Fortmatic <img src="download.png" alt="" /></div>
            <div className='opt'>
                <p>By connecting a wallet, you agree to Uniswap Labs’ <Link to='/'>Terms of Service</Link> and acknowledge that you have read and understand the Uniswap <Link to='/' href='#'>Protocol Disclaimer.</Link></p>
            </div>
            <FaTimes className='cncel' onClick={()=>setShowModal(false)}/>
        </animated.div>
        )
    }

    {
        walletTransitions(
        (styles, item) => item && <animated.div style={styles} className='wallet'>
            <p>Connect Wallet</p>
            <div className="top">
                <div className="qr">Mobile</div>
                <div className="desk">QR code</div>
            </div>
            <p>Choose your preffered wallet</p>
            <input type="text" placeholder="search" />
            <div className="cardCont">
                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/rain.png" alt="" />
                        </div>
                        Rainbow 
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/trust.svg" alt="" />
                        </div>
                        Trust 
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/arg.png" alt="" />
                        </div>
                        Argent 
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/metamask.png" alt="" />
                        </div>
                        MetaMask 
                    </div>
                </Link>
                
                <Link to='/form'>
                <div className="cards">
                    <div className="imgC">
                        <img src="/gn.png" alt="" />
                    </div>
                    Gnois safe
                </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                        <img src="/crypt.png" alt="" />
                        </div>
                        crypto.com
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/pillar.jpg" alt="" />
                        </div>pillar
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/imt.png" alt="" />
                        </div>
                        imToken
                    </div>
                </Link>

                <Link to='/form'>
                <div className="cards">
                    <div className="imgC">
                        <img src="/on.png" alt="" />
                    </div>
                    ONTO
                </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/spt.webp" alt="" />
                        </div>Spot
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/stk.png" alt="" />
                        </div>
                        Steakwallet
                    </div>
                </Link>

                <Link to='/form'>
                    <div className="cards">
                        <div className="imgC">
                            <img src="/tp.png" alt="" />
                        </div>Tokenpocket
                    </div>
                </Link>
            </div>
            <FaTimes className='cncel' onClick={()=>setShowWallet(false)}/>
        </animated.div>
        )
    }

    {
        swapWalletTransitions(
        (styles, item) => item && <animated.div style={styles} className='token'>
            <p>Connect Wallet</p>
            <input type="text" placeholder="search name or paste address" />
            <div className="up">
                <div className="coins" onClick ={ETHs}><img src="/eth.png" alt="" /> ETH</div>
                <div className="coins" onClick ={DAIs}><img src="/dai.png" alt="" /> DAI</div>
                <div className="coins" onClick ={USDCs}><img src="/sdc.png" alt="" /> USDC</div>
                <div className="coins" onClick ={USDTs}><img src="/usdt.png" alt="" /> USDT</div>
                <div className="coins" onClick ={WBTCs}><img src="/wbtc.png" alt="" /> WBTC</div>
                <div className="coins" onClick ={WETHs}><img src="/weth.png" alt="" /> WETH</div>
            </div>

            <div className="dwn">
                <div className="coins" onClick ={ETHs} ><img src="/eth.png" alt="" /> ETH</div>
                <div className="coins" onClick ={DAIs}><img src="/dai.png" alt="" /> DAI</div>
                <div className="coins" onClick ={USDCs}><img src="/sdc.png" alt="" /> USDC</div>
                <div className="coins" onClick ={USDTs}><img src="/usdt.png" alt="" /> USDT</div>
                <div className="coins" onClick ={WBTCs}><img src="/wbtc.png" alt="" /> WBTC</div>
                <div className="coins" onClick ={WETHs}><img src="/weth.png" alt="" /> WETH</div>
                <div className="coins" onClick ={ALIs}><img src="/ali.svg" alt="" /> ALI</div>
                <div className="coins" onClick ={ALICEs}><img src="/alice_logo.webp" alt="" /> ALICE</div>
                <div className="coins" onClick ={AMPs}><img src="/amp.webp" alt="" /> AMP</div>
                <div className="coins" onClick ={API3s}><img src="/api3.webp" alt="" /> API3</div>
                <div className="coins" onClick ={BTCs} ><img src="/xbt.png" alt="" /> 0xBTC</div>
                <div className="coins" onClick ={INCHs}><img src="/1inch.webp" alt="" />1INCH</div>
            </div>

            <div className="btm">
                <p>Manage Token List</p>
            </div>
            <FaTimes className='cncel' onClick={()=>setSwapWallet(false)}/>
        </animated.div>
        )
    }

{
        selectTokenTransitions(
        (styles, item) => item && <animated.div style={styles} className='token'>
            <p>Connect Wallet</p>
            <input type="text" placeholder="search name or paste address" />
            <div className="up">
                <div className="coins" onClick ={ETHss}><img src="/eth.png" alt="" /> ETH</div>
                <div className="coins" onClick ={DAIss}><img src="/dai.png" alt="" /> DAI</div>
                <div className="coins" onClick ={USDCss}><img src="/sdc.png" alt="" /> USDC</div>
                <div className="coins" onClick ={USDTss}><img src="/usdt.png" alt="" /> USDT</div>
                <div className="coins" onClick ={WBTCss}><img src="/wbtc.png" alt="" /> WBTC</div>
                <div className="coins" onClick ={WETHss}><img src="/weth.png" alt="" /> WETH</div>
            </div>

            <div className="dwn">
                <div className="coins" onClick ={ETHss} ><img src="/eth.png" alt="" /> ETH</div>
                <div className="coins" onClick ={DAIss}><img src="/dai.png" alt="" /> DAI</div>
                <div className="coins" onClick ={USDCss}><img src="/sdc.png" alt="" /> USDC</div>
                <div className="coins" onClick ={USDTss}><img src="/usdt.png" alt="" /> USDT</div>
                <div className="coins" onClick ={WBTCss}><img src="/wbtc.png" alt="" /> WBTC</div>
                <div className="coins" onClick ={WETHss}><img src="/weth.png" alt="" /> WETH</div>
                <div className="coins" onClick ={ALIss}><img src="/ali.svg" alt="" /> ALI</div>
                <div className="coins" onClick ={ALICEss}><img src="/alice_logo.webp" alt="" /> ALICE</div>
                <div className="coins" onClick ={AMPss}><img src="/amp.webp" alt="" /> AMP</div>
                <div className="coins" onClick ={API3ss}><img src="/api3.webp" alt="" /> API3</div>
                <div className="coins" onClick ={BTCss} ><img src="/xbt.png" alt="" /> 0xBTC</div>
                <div className="coins" onClick ={INCHss}><img src="/1inch.webp" alt="" />1INCH</div>
            </div>

            <div className="btm">
                <p>Manage Token List</p>
            </div>
            <FaTimes className='cncel' onClick={()=>setSelectToken(false)}/>
        </animated.div>
        )
    }
    </Container>
  )
}

export default Home