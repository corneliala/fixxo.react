import React from 'react'
import LeftImage from '../assets/images/img-2.svg'
import RightImage from '../assets/images/img-1.svg'

const Showcase = () => {
  return (
    <section className="__showcase">
        <div className="container-fluid">
            <img className="womanimg fr-1" src={LeftImage} alt="" />
            <div className="fr-1">mitten</div>
            <img className="manimg fr-1" src={RightImage} alt="" />
        </div>
    </section>
  )
}

export default Showcase