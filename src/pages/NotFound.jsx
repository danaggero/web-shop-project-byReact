import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFoundImage from "../assets/images/database-error.png";

const NotFound = () => {
    const styles = {
        wrap: {
            marginTop: '0',
            marginBottom: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '1280px',
            height: '1080px',
        },
        image: {
            display: 'block',
            margin: '0 auto',
            width: '150px',
            height: '150px',
        },
        text: {
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
        },
        picture : {
            marginBottom: "350px",
            marginTop: "350px",
        }
    };

    return (
        <div id="wrap" style={styles.wrap}>
            <Header />
            <div style={styles.picture}>
                <img src={NotFoundImage} alt="Not Found" style={styles.image} />
                <p style={styles.text}>404 Not Found</p>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;