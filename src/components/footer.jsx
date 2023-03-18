import React from 'react'

const footer = () => {
 
    const year = new Date().getFullYear();

    return (<footer>{`Copyright © Upbeat Code ${year}`}</footer>)
  
}

export default footer