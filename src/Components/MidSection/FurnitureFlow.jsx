import React, {useContext} from 'react'
import {ThemeBgContext} from '../ContextWrapper/ThemeContext'
const FurnitureFlow = () => {
  const {theme} = useContext(ThemeBgContext)
  return (
    <div>
      <img
        className="sm:hidden bg-center bg-no-repeat bg-cover h-full w-full"
        src={ theme === 'light' 
        ? "https://github.com/MarkoWebDev/React-AxeL-Site/blob/master/src/assets/images/flow-light.png?raw=true"
        : "https://github.com/MarkoWebDev/React-AxeL-Site/blob/master/src/assets/images/flow-dark.png?raw=true"
        }
        alt="furniture flow"
      ></img>
    </div>
  )
}

export default FurnitureFlow
