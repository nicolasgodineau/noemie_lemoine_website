import BackToTop from '../components/backToTop/backToTop';

const Layout = ({ children, headerColor, headerColorText, backgroundColor }) => {
    return (
        <>
            {children}
            <BackToTop />
        </>
    );
};

export default Layout; 