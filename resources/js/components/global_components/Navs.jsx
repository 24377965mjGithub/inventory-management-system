import axios from "axios";
import UserModal from "./UserManagementModal";
import { Link } from "react-router-dom";

function Navs({
    userName,
    userFullNameState,
    userEmail,
    userEmailState,
    userPhoneNumberState,
    userPhone,
    userRole,
    userFirstName,
    userMiddleName,
    userLastName,
    userFirstNameState,
    userMiddleNameState,
    userLastNameState}) {

    return <>
        <ul>
            <Link to={'/'}>
                <li className="active" id="active">Home</li>
            </Link>
            <Link to={'/dashboard'}>
                <li className="link">Dashboard</li>
            </Link>
            <Link to={'/about'}>
                <li className="link">About</li>
            </Link>
            <li data-bs-toggle="modal" data-bs-target="#myModal"><span className="userRole">{userRole}</span><i className="fa fa-user-circle"></i></li>
        </ul>
        <UserModal
            userFirstNameState={userFirstNameState}
            userMiddleNameState={userMiddleNameState}
            userLastNameState={userLastNameState}
            userFirstName={userFirstName}
            userMiddleName={userMiddleName}
            userLastName={userLastName}
            userName={userName}
            userFullNameState={userFullNameState}
            userEmail={userEmail}
            userPhone={userPhone}
            userRole={userRole}
            userPhoneNumberState={userPhoneNumberState}
            userEmailState={userEmailState}
        />
    </>
}

export default Navs;