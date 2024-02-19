import React from 'react'
import MidComponentItem from './MidComponentItem'

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Dive into the Future"
          text="In a world where people constantly have phone in their hands, 
        the need for online opportunities is growing. We have a solution - fully digital access to 
        all information and services related to 
        the interior and design itself. Everything for a carefree stay in the palm of a hand."
          img="https://github.com/MarkoWebDev/React-AxeL-Site/blob/master/src/assets/images/MidComponentPhone.png?raw=true"
          reverse
        ></MidComponentItem>
      </div>
      <div>
        <MidComponentItem
          title="Search by room"
          img="https://github.com/MarkoWebDev/React-AxeL-Site/blob/master/src/assets/images/midPhone2.png?raw=true"
        ></MidComponentItem>
      </div>
    </div>
  )
}

export default MidComponentParent
