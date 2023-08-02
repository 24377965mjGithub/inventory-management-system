import axios from "axios";
import UserModal from "./UserManagementModal";

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
            <li className="active link">Home</li>
            <li className="link">About</li>
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