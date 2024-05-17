import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.envato.com" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright {currentYear} - Yosra Gallah</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/Yosra.glh" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            <a href="https://github.com/Yusra-glh" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/yosra-gallah/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;