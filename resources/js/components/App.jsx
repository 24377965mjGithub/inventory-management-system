import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './global_components/HeroSection';
import Dashboard from './pages/Dashboard';
import Header from './global_components/Header';

function App() {

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/home" element={<Dashboard />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
