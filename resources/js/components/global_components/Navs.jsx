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

    function logout() {
        axios.post('/logout').then(() => {
            window.location.replace('/');
        })
    }

    return <>
        <ul>
            <li><i className="fa fa-home"></i></li>
            <li><i className="fa fa-question-circle"></i></li>
            <li data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-user-circle"></i> {userName} - {userRole}</li>
            <li><button className="btn btn-success" onClick={logout}>Logout</button></li>
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