import { useEffect, useState } from "react";
import Header from "../global_components/Header";
import Menu from "./dashboard_components/Menu";
import Table from "./dashboard_components/Table";

function Main() {

    let isAdmin = false;
    let isStaff = false;

    let [firstname, setFirstName] = useState("");
    let [middlename, setMiddleName] = useState("");
    let [lastname, setLastName] = useState("");
    let [loggedInUserRole, setloggedInUserRole] = useState("");
    let [loggedInUserName, setLoggedInUser] = useState("");
    let [loggedInUserEmail, setLoggedInUserEmail] = useState("");
    let [loggedInUserPhoneNumber, setLoggedInUserPhoneNumber] = useState("");

    function getLoggedInUser() {
        axios.get('/api/currentuser').then((res) => {
            setloggedInUserRole(res.data.role);
            setFirstName(res.data.firstname);
            setMiddleName(res.data.middlename);
            setLastName(res.data.lastname);
            setLoggedInUser(res.data.firstname + " " + res.data.middlename + " " + res.data.lastname);
            setLoggedInUserEmail(res.data.email);
            setLoggedInUserPhoneNumber(res.data.phonenumber);
        })
    }

    useEffect(() => {
        getLoggedInUser();
        // determine if staff or not//
        console.log(isAdmin);
        console.log(loggedInUserRole)
        console.log(firstname);
    }, []);

    return (
        <>
            <Header
                    userFirstNameState={setFirstName}
                    userMiddleNameState={setMiddleName}
                    userLastNameState={setLastName}
                    userFirstName={firstname}
                    userMiddleName={middlename}
                    userLastName={lastname}
                    userName={loggedInUserName}
                    userFullNameState={setLoggedInUser}
                    userEmail={loggedInUserEmail}
                    userPhone={loggedInUserPhoneNumber}
                    userRole={loggedInUserRole}
                    userPhoneNumberState={setLoggedInUserPhoneNumber}
                    userEmailState={setLoggedInUserEmail}
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 navs">
                        <Menu />
                    </div>
                    <div className="col-lg-10 tables">
                        <Table title={"Products"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;