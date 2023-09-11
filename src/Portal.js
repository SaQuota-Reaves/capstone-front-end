import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    UserButton,
    useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
function PortalSignedIn() {
    const { user } = useUser();
    return (
        <div style={{ backgroundColor: "#4a5d23" }}>
            <h1 style={{ color: "#e3a857" }}>H.U.W Portal</h1>
            <p className="whiteText">Welcome, {user.firstName}</p>
            <UserButton />
            <p className="whiteText">
                My name is SaQuota and I am the owner of Healing Untouched
                Wounds! I am very happy to welcome you to our community. Here we
                help individuals who are battling with grief and trauma. We hope
                that you will be able to enjoy our events and utilize our
                services. Below you can click on the like Find A Therapist to
                begin your search to find a provider that fits your needs. Happy
                Healing!
            </p>

            <br />
            <br />

            <button
                type="submit"
                className="form-control"
                style={{
                    backgroundColor: "#e3a857",
                    fontFamily: "initial",
                    fontSize: 18,
                    color: "#485d23",
                    borderRadius: "6px",
                }}
            >
                <Link to="/FindATherapist">Find A Therapist</Link>
            </button>
        </div>
    );
}

function Portal() {
    return (
        <div>
            <SignedIn>
                <PortalSignedIn />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

export default Portal;
