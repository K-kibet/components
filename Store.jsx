import { ShoppingBag } from '@mui/icons-material';
import { Rating } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Cart } from '../components/Cart';


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`
const Nav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: black;
    color: white;

`

const NavItem = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-size: 18px;
    &:active{
        color: darkcyan;
        text-decoration: underline;
    }
    &:hover{
        color: darkcyan;
    }
`
const CartIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f4f4;
    cursor: pointer;
`
const Holder = styled.div`
    width: 100vw;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width:970px) {
        flex-direction: column;
        justify-content: center;
    }
`

const ItemsHolder = styled.div`
    width: 70%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right:1px solid rgb(216, 216, 216);
    @media screen and (max-width:970px) {
        width: 100%;
    }
    
`

const Item = styled.div`
    width: 90%;
    margin: 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media screen and (max-width:580px) {
        flex-direction: column;
        padding: 5px;
        *{
            margin: 5px;
            padding: 5px;
        }
    }

`

const ItemImage = styled.img`
    width: 200px;
    height: auto;
    margin: 20px;
    object-fit: fill;
    object-position: center;
    border-radius: 5px;
`

const ItemDesc = styled.div`
    margin: 20px;
`

const ItemRating = styled.div`
    position: absolute;
    left: 60px;
    bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 190px;
    height: 38px;
    position: absolute;
    bottom: 5px;
    right: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover{
       background-color: #03c0c0;
       color: white;
    }
    @media screen and (max-width:580px) {
        position: relative;
    }
`
const Aside = styled.div`
    width: 30%;
    margin: 10px;
    padding: 20px;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width:970px) {
        width: 100%;
    }
`

const Store = () => {
    const [value, setValue] = useState(2);
    const [visibility, setVisibility] = useState(false);
    document.addEventListener('click', e => {
        const cart = document.querySelector('.cart');
        const cartIcon = document.querySelector('.cartIcon');
        if (!cart.contains(e.target)) {
            if(!cartIcon.contains(e.target)){
                setVisibility(false);
            } else return;
            
        }
    })

    window.onscroll = () => {
        if(visibility === true) {
            setVisibility(false);
        }
    }

    const handleCartOpen = () => {
        if(visibility === true) {
            setVisibility(false);
            console.log(visibility);
        } else  {
            setVisibility(true);
            console.log(visibility);
        }
    }
    return (
        <Container>
            <Nav>
                <NavItem>ALL</NavItem>
                <NavItem>LAPTOPS</NavItem>
                <NavItem>PHONE</NavItem>
                <NavItem>WATCHES</NavItem>
                <NavItem>TABLETS</NavItem>
                <CartIcon className='cartIcon' onClick={handleCartOpen}>
                    <ShoppingBag />
                </CartIcon>
            </Nav>
            <Holder>
                <Cart visibility={visibility}/>
                <ItemsHolder>
                    <Item>
                        <ItemImage src='data:image/jpeg;base64,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' />
                        <ItemDesc>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In molestias minus aliquam asperiores illum temporibus aperiam repudiandae vero eius, eligendi soluta odit ex accusantium illo dolor maiores consectetur? Assumenda, eligendi?
                        </ItemDesc>
                        <Button>ADD TO CART</Button>
                    </Item>

                    <Item>
                        <ItemImage src='data:image/jpeg;base64,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' />
                        <ItemDesc>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In molestias minus aliquam asperiores illum temporibus aperiam repudiandae vero eius, eligendi soluta odit ex accusantium illo dolor maiores consectetur? Assumenda, eligendi?
                        </ItemDesc>
                        <ItemRating>
                            <Rating name="read-only" value={value} readOnly />
                        </ItemRating>
                        <Button className='inCart'>REMOVE FROM CART</Button>
                    </Item>
                </ItemsHolder>
                <Aside>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deserunt quis iste, totam provident rerum iusto adipisci ad, esse quam? Deleniti repellat adipisci eligendi error perspiciatis, alias sequi sed?
                </Aside>
            </Holder>
        </Container>
    );
}

export default Store;
