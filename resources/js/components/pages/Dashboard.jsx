import HeroSection from '../global_components/HeroSection';
import Header from '../global_components/Header';
import { useState, useEffect } from "react";
import Footer from "../global_components/Footer";
import { forEach } from 'lodash';

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

    // api testings...

    function getProducts() {
        axios.get('/api/products').then(res => {
            console.log(res.data);
        })
    }

    function createProductCategory() {
        axios.post('/api/createproductcategory', {
            categoryName: 'Sample Category' + Math.floor(Math.random() * 1000000),
            categoryDescription: 'asdsa',
            categoryPackaging: 'wholesale'
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data.message);
        })
    }

    function createSupplier() {
        axios.post('/api/createsupplier', {
            suppliersName: "CheersTrading",
            suppliersPhoneNumber: "09978972882",
            suppliersEmail: "cheerstradings@gmail.com"
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data.message);
        })
    }

    function createCustomerType() {
        axios.post('/api/createcustomertype', {
            customersType: "Retailer"
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data.message);
        })
    }

    function createUserRole() {
        axios.post('/api/createuserrole', {
            roleName: "Staff"
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data.message);
        })
    }

    // endApi Testing...

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
                        <button className="btn btn-warning" onClick={getProducts}>Get All Products</button>
                        <button className='btn btn-info' onClick={createProductCategory}>Create Product Category</button>
                        <button className='btn btn-warning' onClick={createSupplier}>Create Supplier</button>
                        <button className='btn btn-info' onClick={createCustomerType}>Create Customer Types</button>
                        <button className='btn btn-warning' onClick={createUserRole}>Create User Role</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard;