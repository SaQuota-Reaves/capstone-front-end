import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIURL from "./APIURL";

const FindATherapist = () => {
    const [speciality, setSpeciality] = useState("");
    const [therapists, setTherapists] = useState([]);
    const [specList, setSpecList] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(`${APIURL}/spec`);
            const data = await response.json();
            setSpecList(data.spec);
        };
        makeAPICall();
    }, []);

    const searchDatabase = async (event) => {
        event.preventDefault();
        // console.log(event.target.elements);
        // const anxiety = event.target.elements.anxiety.checked;
        // const ptsd = event.target.elements.ptsd.checked;
        // const trauma = event.target.elements.trauma.checked;
        let checkedValues = {};
        for (const element of [...event.target.elements]) {
            console.log(element);
            checkedValues[element.name] = element.checked;
        }

        console.log(checkedValues);

        const response = await fetch(`${APIURL}/databaseSearch`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // query: event.target.elements.searchInput.value,
                // anxiety,
                // ptsd,
                // trauma,
                ...checkedValues,
            }),
            method: "POST",
        });
        const data = await response.json();
        console.log(data);
        setTherapists(data.therapists);
    };

    return (
        <div
            className="App container"
            style={{
                backgroundColor: "#4a5d23",
                fontFamily: "initial",
                fontSize: 30,
                color: "#e3a857",
            }}
        >
            Need Help Finding a Therapist?
            <br />
            <br />
            <form onSubmit={searchDatabase}>
                <label
                    for="searchBar"
                    style={{
                        fontSize: 18,
                        color: "#fffaf0",
                        fontFamily: "initial",
                    }}
                >
                    Specialities:
                </label>
                {/* <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    value={speciality}
                    onChange={(event) => {
                        setSpeciality(event.target.value);
                    }}
                /> */}
                <div
                    style={{ maxHeight: 200, overflowX: "auto" }}
                    className="row"
                >
                    {specList.map((spec) => {
                        return (
                            <div className="col-4">
                                <input type="checkbox" name={spec} key={spec} />
                                {spec}
                            </div>
                        );
                    })}
                </div>
                {/* <input type="checkbox" name="trauma" />
                Trauma
                <br />
                <input type="checkbox" name="ptsd" />
                PTSD
                <br />
                <input type="checkbox" name="anxiety" />
                Anxiety
                <br /> */}
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
                    Search
                </button>
                <br />
            </form>
            <table
                className="table table-striped table-hover "
                style={{ fontSize: 14 }}
            >
                <thead>
                    <tr>
                        <th>First Name:</th>
                        <th>Last Name:</th>
                        <th>State of Practice:</th>
                        <th>Phone Number:</th>
                        <th>Email:</th>
                        <th>Website:</th>
                        <th>Specialities:</th>
                    </tr>
                </thead>
                <tbody>
                    {therapists.map((therapist) => {
                        return (
                            <tr key={therapist.id}>
                                <td>{therapist.first_name}</td>
                                <td>{therapist.last_name}</td>
                                <td>{therapist.state_of_practice}</td>
                                <td>{therapist.phone}</td>
                                <td>{therapist.email}</td>
                                <td>{therapist.website}</td>
                                <td>{therapist.speciality_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
            <br />
            <Link
                to="/"
                style={{
                    backgroundColor: "#e3a857",
                    fontFamily: "initial",
                    fontSize: 18,
                    color: "#485d23",
                    borderRadius: "1px",
                }}
            >
                Home
            </Link>
        </div>
    );
};

export default FindATherapist;
