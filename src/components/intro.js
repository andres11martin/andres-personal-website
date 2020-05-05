import React, { useEffect } from "react"

import "./intro.css"

const Intro = () => {

    const showIntro = !localStorage.getItem('noIntro');

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('noIntro', true);
        }, 200)
    }, [])

    return (
        <div>
            {showIntro &&
                <div className="intro">
                    <h1 className="fade-in">Glad you're here!</h1>
                </div>}
        </div>
    )

}

export default Intro