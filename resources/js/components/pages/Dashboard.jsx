import Box from "../global_components/Box";
import HeroSection from '../global_components/HeroSection';
import Header from '../global_components/Header';
import { useState, useEffect } from "react";
import Footer from "../global_components/Footer";

function Dashboard() {

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

    loggedInUserRole === "Admin" ? isAdmin = true : isStaff = true;
    // console.log(isAdmin);

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
            <HeroSection />
            <section className="dashboard-links">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="http://www.w3.org/2000/svg"
                                name="Products"
                                count={233}
                            />
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="http://www.w3.org/2000/svg"
                                name="Suppliers"
                                count={233}
                            />
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="http://www.w3.org/2000/svg"
                                name="Customers"
                                count={233}
                            />
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="fa-solid fa-boxes-packing"
                                name="Staffs"
                                count={233}
                            />
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="fa-solid fa-boxes-packing"
                                name="Delivery"
                                count={233}
                            />
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <Box
                                icon="fa-solid fa-boxes-packing"
                                name="Sold Outs"
                                count={233}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard;