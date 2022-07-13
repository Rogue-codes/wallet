import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsArrowUpRight} from 'react-icons/bs'
import { useTransition, animated } from 'react-spring'
import {BsArrowUpRightCircleFill} from 'react-icons/bs'

const Navi = styled.nav`
    width: 100%;
    max-height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0% 1%;
    position: relative;
    .firstAni{
        @media (max-width:480px) {
        display: block;
        }
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 90;
        background-color: #8787949e;
    }
    .animate{
        width: 20%;
        height: 50vh;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 72%;
        z-index: 10;
        border-radius: 20px;
        top: 12%;
        p{
            padding: 5%;
            img{
                left: 5px;
                height: 20px;
                width: 20px;
                position: absolute;
            }
        }
        span{
            padding: 5% 18%;
            display: block;
            img{
                left: 15px;
                height: 20px;
                width: 20px;
                position: absolute;
            }
        }
        .box{
            width: 90%;
            height: 30%;
            background: #f7f8fa;
            border-radius: 15px;
            margin-left: 5%;
            position: relative;
            .eth{
                width: 100%;
                height: 70%;
                border-radius: 15px;
                display: flex;
                justify-content: flex-start;
                padding-left: 15%;
                align-items: center;
                position: relative;
                cursor: pointer;
                img{
                    left: 5px;
                    height: 20px;
                    width: 20px;
                    position: absolute;
                }
            }
            .greenCircle{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: green;
                position: absolute;
                left: 90%;
                top: 30%;
            }
            .ethscan{
                display: flex;
                justify-content: space-between;
                padding: 0% 5%;
                a{
                    color: grey;
                }
            }
        }
    }
`
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
    width: 35%;
    height: 90%;
    .others{
        @media (max-width:480px) {
            display: none;
        }
        width: 70%;
        height: 100%;
        background: #ffffff;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;
        position: relative;
        a{
            text-decoration: none;
            color: grey;
            font-size: 1.3vw;
            &:hover{
                color: black;
            }
            span{
                background: #ebedf2;
                padding: 5% 20%;
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
const Right = styled.div`
    @media (max-width:480px) {
        width: 100%;
    }
    width: 35%;
    height: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: .5%;
    .eth{
        @media (max-width:480px) {
            width: 15%;
            font-size: .8rem;
            height: 30%;
            p{
                display: none;
            }
        }
        width: 35%;
        height: 70%;
        background:#fff;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        img{
            left: 5px;
            height: 20px;
            width: 20px;
            position: absolute;
        }
    }
    .con{
        @media (max-width:480px) {
            width: 65%;
            font-size: .8rem;
            height: 40%;
        }
        width: 35%;
        height: 70%;
        display: flex;
        background: #fdeaf1;
        border: 2px solid #fff;
        border-radius: 15px;
        color: #dd3485;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .dot{
        @media (max-width:480px) {
            font-size: .8rem;
            height: 30%;
        }
        width: 10%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 15px;
        &:hover{
            cursor: pointer;
            border: .5px solid #c3bdbd;
        }
    }
`
const Logo = styled.div`
    width: 30px;
    height: 30px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

`



function Nav({showModal,setShowModal}) {
    const [showMenu, setShowMenu]= useState(false)

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const maskTransitions = useTransition(showModal, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showModal,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
    })
  

  return (
    <Navi>
        <Left>
            <Logo>
                <img src="/logo.png" alt="logo" />
            </Logo>
            <div className="others">
                <Link to='/'><span>Swap</span></Link>
                <Link to='/'>Pool</Link>
                <Link to='/'>Vote</Link>
                <Link to='/'>Charts <BsArrowUpRight className='arrow' size='.5rem'/></Link>
            </div>
        </Left>
        <Right>
            <div className="eth" onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}} ><img src="/eth.png" alt="" /> <p>Ethereum</p></div>
            <div className="con" onClick={()=>setShowModal(!showModal)}>Connect Wallet</div>
            <div className="dot"><BiDotsHorizontalRounded size="1.5rem"/></div>
        </Right>

        {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>
            <p>Select a Network</p>
            <div className="box">
                <div className="eth">
                    <img src="/eth.png" alt="" /> Ethereum
                </div>
                <div className="ethscan">
                    <Link to='/'>Etherscan</Link>
                    <BsArrowUpRightCircleFill/>
                </div>
                <div className="greenCircle"></div>
            </div>
            <span> <img src="/polygon.png" alt=""/>Polygon</span>
            <span><img src="/optimistic.svg" alt=""/>Optimism</span>
            <span><img src="/arbitrum.svg" alt=""/>Arbitrum</span>
        </animated.div>
        )
      }

    {
        maskTransitions(
        (styles, item) => item && <animated.div style={styles} className='firstAni' onClick={()=> setShowModal(false)}>

        </animated.div>
        )
    }        
    </Navi>
  )
}

export default Nav