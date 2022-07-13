import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import {FiSettings} from 'react-icons/fi'
import {MdCancel} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import {FaTimes} from 'react-icons/fa'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f7f0f6;
    position: relative;
    .wallet{
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
            top: -9%;
            left: 93%;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    }
    .modal{
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
`
const Card = styled.div`
    @media (max-width:480px) {
        width: 90%;
        left: 5%;
    }
    width: 40%;
    left: 30%;
    top: 15vh;
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
`

function Home() {
    
    const [showModal, setShowModal]= useState(false)
    const [showWallet, setShowWallet]= useState(false)

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
        </Card>

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
                <div className="cards">
                    <div className="imgC">
                        <img src="/rain.png" alt="" />
                    </div>
                    <Link to='/form'>Rainbow</Link> 
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/trust.svg" alt="" />
                    </div>
                    <Link to='/form'>Trust</Link> 
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/arg.png" alt="" />
                    </div>
                    <Link to='/form'>Argent</Link> 
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/metamask.png" alt="" />
                    </div>
                    <Link to='/form'>MetaMask</Link> 
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/gn.png" alt="" />
                    </div>
                    <Link to='/form'>Gnois safe</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                    <img src="/crypt.png" alt="" />
                    </div>
                    <Link to='/form'>crypto.com</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/pillar.jpg" alt="" />
                    </div>
                    <Link to='/form'>pillar</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/imt.png" alt="" />
                    </div>
                    <Link to='/form'>imToken</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/on.png" alt="" />
                    </div>
                    <Link to='/form'>ONTO</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/spt.webp" alt="" />
                    </div>
                    <Link to='/form'>Spot</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/stk.png" alt="" />
                    </div>
                    <Link to='/form'>Steakwallet</Link>
                </div>

                <div className="cards">
                    <div className="imgC">
                        <img src="/tp.png" alt="" />
                    </div>
                    <Link to='/form'>Tokenpocket</Link>
                </div>
            </div>
            <MdCancel className='cncel' onClick={()=>setShowWallet(false)}/>
        </animated.div>
        )
    }
    </Container>
  )
}

export default Home