const Links = () => {

    const items = [
        "Homepage",
        "Servies",
        "Portfolio",
        "Contact",
        "About"
    ]; 

    function Links({ handleLinkClick }) {
        return (
            <div className="links">
                <Link to="/#Home" onClick={() => handleLinkClick('Home')}>
                    Home
                </Link>
                <Link to="/#Dream" onClick={() => handleLinkClick('Dream')}>
                    Dream
                </Link>
                {/* Додайте посилання для інших розділів */}
            </div>
        );
    }

    export default Links