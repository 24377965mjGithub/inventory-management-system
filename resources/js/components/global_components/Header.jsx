import Navs from "./Navs";

function Header({
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
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="poppins">Inventory Management System</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Navs
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
                            
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;