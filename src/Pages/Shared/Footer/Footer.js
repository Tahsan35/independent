
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
        <p><small>copyright wedding photography © {year} </small></p>
    </footer>
    );
};

export default Footer;