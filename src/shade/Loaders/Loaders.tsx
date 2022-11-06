import React from 'react'

const Loader = () => {
    return(
        <div id="global-loader">
            <img src={require("../../assets/img/loader.svg").default} className="loader-img" alt="Loader"/>
        </div>
    )
}

export default Loader;