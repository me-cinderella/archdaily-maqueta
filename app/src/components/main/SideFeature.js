import React from 'react';
import introimage from 'assets/images/introimage.jpg';

function SideFeature() {
    return (
        <div style={{backgroundImage: `url(${introimage})` }} className="side-feat">
            <p className="legend">
                <span>Editor's Choice</span>
                <a href="/">Would You Live Here? Exploring What Makes A City Desirable</a>
            </p>
        </div>
    )
}

export default SideFeature;