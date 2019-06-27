import React from 'react'
import building from '../../images/BUILDING.svg'

const HomeBanner = () => {
    return(
        <div   id="welcome-text"  className="d-flex align-items-lg-center" >
            <div className="position-relative container d-flex">
                <p className="text-white home_banner-title ">
                    <strong>Tec Academy ya <br />empieza y te lleva a <br /></strong>
                    <span className="text-yellow home_banner-subtitle">
                        <strong>Silicon Valley</strong>
                    </span>
                </p>
                <img  className="position-absolute  home_banner-img" src={building}   />    
            </div>
        </div>
    )
}

export default HomeBanner   