import React from "react";

function Footer() {
    const time = new Date()
    const year = time.getFullYear()

    return (
        <footer>
            <p className="footer"> copyright {year}</p>
        </footer>
    )

}

export default Footer;