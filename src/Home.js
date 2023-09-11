import logo from "./HUW.png";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home" style={{ backgroundColor: "#fffaf0" }}>
            <img
                src={logo}
                alt="Logo"
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    height: "300px",
                }}
            />
            <h1 style={{ color: "#e3a857", textAlign: "center" }}>
                {" "}
                Mission and Vison of Healing Untouched Wounds:
            </h1>
            <p>
                <b style={{ color: "#fffaf0", backgroundColor: "#485d23" }}>
                    Mission:
                </b>{" "}
                We offer a safe space for those who are grieving and dealing
                with trauma, by providing education, resources, and community
                events (ex. emotional support) , so that Black and Brown
                communities can heal from the grief and trauma they face.
            </p>
            <p>
                <b style={{ color: "#fffaf0", backgroundColor: "#485d23" }}>
                    Vision:
                </b>{" "}
                Ten years from now Healing Untouched Wounds will be the number
                ONE resource for healing and grief in Upstate, NY by committing
                to healing one individual at a time through our CORE values:
                Love, Integrity, Compassion, and Transparency.
            </p>
            <br />
            <h2 style={{ color: "#e3a857", textAlign: "center" }}>
                More Information on What H.U.W Has To Offer:
            </h2>
            <p>
                Are you interested in attending Healing Untouched Wounds events?
                Do you want help finding Black and Brown therapist in Upstate,
                NY? Do you want to join our mailing list? Please create an
                account below or log in to your account for more information.
            </p>
            <br />
            <Link to="/sign-in/*">
                {" "}
                <button
                    style={{
                        color: "#e3a857",
                        textAlign: "center",
                        fontFamily: "initial",
                        fontSize: 18,
                    }}
                >
                    {" "}
                    Login
                </button>
            </Link>
            <Link to="/sign-up/*">
                {" "}
                <button
                    style={{
                        color: "#e3a857",
                        textAlign: "center",
                        fontFamily: "initial",
                        fontSize: 18,
                    }}
                >
                    Create An Account
                </button>
            </Link>
            <br /> <br />
        </div>
    );
};

export default Home;
