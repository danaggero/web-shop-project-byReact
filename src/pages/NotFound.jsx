import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import NotFoundImage from "../assets/images/database-error.png";

const NotFound = () => {
    const styles = {
        wrap: {
            margin: '0 auto',
            width: '1280px',
            height: '1080px',
        },
        image: {
            display: 'block',
            margin: '0 auto',
        },
        text: {
            textAlign: 'center',
            fontSize: '24px',
            color: '#333',
        },
    };

    return (
        <div id="wrap" style={styles.wrap}>
            <Header />
            <img src={NotFoundImage} alt="Not Found" style={styles.image} />
            <p style={styles.text}>404 Not Found</p>
            <Footer />
        </div>
    );
};

export default NotFound;