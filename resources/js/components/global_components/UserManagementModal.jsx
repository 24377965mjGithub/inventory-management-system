import { useState } from "react";

function UserModal({
    userName,
    userRole,
    userFullNameState,
    userEmail,
    userEmailState,
    userPhone,
    userPhoneNumberState,
    userFirstName,
    userMiddleName,
    userLastName,
    userFirstNameState,
    userMiddleNameState,
    userLastNameState}) {

    // edit name ======================================================================================

    let [isNameEdit, setNameEdit] = useState(false);
    let [loadingEditNameButton, setLoadingEditButton] = useState(false);
    let [isNameEmpty, setNameEmpty] = useState(false);

    function clickEditname() { // click edit
        setNameEdit(true);
        setPhoneNumberEdit(false)
        setEmailEdit(false);
        setIsEditPassword(false);
    }

    function saveName() { // save name
        setLoadingEditButton(true);

        // if something is empty
        if (userFirstName === "" || userMiddleName === "" || userLastName === "") {
            setNameEmpty(true);
            setLoadingEditButton(false);
            setInterval(() => {
                setNameEmpty(false);
            }, 5000);
        } else {
            axios.post('/api/editname', {
                firstname: userFirstName,
                middlename: userMiddleName,
                lastname: userLastName
            }).then((res) => {
                console.log(res.data);
                setNameEmpty(false);
                setLoadingEditButton(false);
                setNameEdit(false);
                userFullNameState(userFirstName + " " + userMiddleName + " " + userLastName);
            })
        }
    }

    function cancelNameEdit() { // cancel edit
        setNameEdit(false);
    }

    // edit phone number ================================================================================

    let [isPhoneNumberEdit, setPhoneNumberEdit] = useState(false);
    let [loadingPhoneNumberButton, setLoadingPhoneNumberButton] = useState(false);
    let [isPhoneNUmberEmpty, setPhoneNumberEmpty] = useState(false);
    let [isPhoneNumberTaken, setPhoneNumberTaken] = useState(false);

    function clickEditPhoneNumber()  {
        setNameEdit(false)
        setPhoneNumberEdit(true)
        setEmailEdit(false)
        setIsEditPassword(false);
    }

    function savePhoneNumber() {
        setLoadingPhoneNumberButton(true)
        
        if (userPhone === "") {
            setPhoneNumberEmpty(true);
            setLoadingPhoneNumberButton(false);
            setInterval(() => {
                setPhoneNumberEmpty(false);
            }, 5000);
        } else {
            axios.post('/api/savephonenumber',{
                phonenumber: userPhone
            }).then((res) => {
                console.log(res.data);
                setPhoneNumberEmpty(false);
                setLoadingPhoneNumberButton(false)
                setPhoneNumberEdit(false)
            }).catch(err => {
                console.log(err.response.data.message);
                setLoadingPhoneNumberButton(false);
                setPhoneNumberTaken(true);
                setInterval(() => {
                    setPhoneNumberTaken(false);
                }, 5000);
            })
        }
    }

    function cancelEditPhoneNumber() {
        setPhoneNumberEdit(false);
    }

    // edit email  =======================================================================================

    let [isEmailEdit, setEmailEdit] = useState(false);
    let [loadingEmailButton,  setLoadingEmailButton] = useState(false);
    let [isEmailTaken, setEmailTaken] = useState(false);
    let [isEmailEmpty, setEmailEmpty] = useState(false);

    function clickEditEmail() {
        setNameEdit(false);
        setPhoneNumberEdit(false);
        setEmailEdit(true);
        setIsEditPassword(false);
    }

    function saveEmail() {

        if (userEmail === "") {
            setEmailEmpty(true)
            setInterval(() => {
                setEmailEmpty(false)
            }, 5000);
        } else {
            setLoadingEmailButton(true)
            axios.post('/api/saveemail', {
                email: userEmail
            }).then((res) => {
                setLoadingEmailButton(false)
                setEmailEdit(false)
                console.log(res.data);
            }).catch(err => {
                console.log(err.response.data.message);
                setEmailTaken(true);
                setLoadingEmailButton(false);
                setInterval(() => {
                    setEmailTaken(false);
                }, 5000);
            });
        }
    }

    function cancelEditEmail() {
        setEmailEdit(false);
    }

    // change password ===================================================================================

    let [isEditPassword, setIsEditPassword]= useState(false);
    let [newPassword, setNewPassword] = useState('');
    let [repeatNewPassword, setRepeatNewPassword] = useState('');
    let [oldPassword, setOldPassword] = useState('')
    let [loadingPasswordButton, setLoadingPasswordButton] = useState(false);
    let [isPasswordEmpty, setPasswordEmpty] = useState(false);
    let [isPasswordDontMatch, setPasswordDontMatch] = useState(false);
    let [isIncorrectPassword, setIncorrectPassword] = useState(false);
    let [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    let [passwordSuccessMsg, setPasswordSuccessMsg] = useState('');

    function clickEditPassword() {
        setNameEdit(false);
        setPhoneNumberEdit(false);
        setEmailEdit(false);
        setIsEditPassword(true);
    }

    function savePassword() {
        if (newPassword === "" || repeatNewPassword ==="" || oldPassword === "") {
            setPasswordEmpty(true);
            setInterval(() => {
                setPasswordEmpty(false)
            }, 5000);
        } else {
            if (newPassword != repeatNewPassword)  {
                setPasswordDontMatch(true);
                setInterval(() => {
                    setPasswordDontMatch(false);
                }, 5000);
            } else {
                setLoadingPasswordButton(true);
                console.log(newPassword);
                console.log(repeatNewPassword);
                console.log(oldPassword);

                axios.post('/api/changepassword', {
                    // new password
                    newPassword: newPassword,
                    oldPassword: oldPassword
                }).then(res => {
                    setLoadingPasswordButton(false);
                    setIsEditPassword(false);
                    setPasswordSuccessMsg('Password changed successfully.')
                    console.log(res.data);
                }).catch(err => {
                    setLoadingPasswordButton(false);
                    setPasswordErrorMsg(err.response.data.message);
                    setInterval(() => {
                        setPasswordErrorMsg("");
                    }, 5000);
                })
            }
        }
    }

    function cancelEditPassword() {
        setIsEditPassword(false);
    }

    // logout ====================================================================================

     function logout() {
        axios.post('/logout').then(() => {
            window.location.replace('/');
        })
    }
    
    return <div className="modal fade" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>{userName}<br /><span className="userRole">{userRole}</span></h4>
                </div>
                <div className="modal-body">

                    {/* error alerts */}

                    { isEmailTaken ? <p className="alert alert-danger">The email has already been taken.</p> : <></> }
                    { isPhoneNumberTaken ? <p className="alert alert-danger">The phonenumber has already been taken.</p> : <></> }
                    { isNameEmpty || isPhoneNUmberEmpty || isEmailEmpty || isPasswordEmpty ? <p className="alert alert-danger">Incomplete details.</p> : <></> }
                    { isPasswordDontMatch ? <p className="alert alert-danger">Password don't match.</p> : <></> }
                    { passwordErrorMsg != "" ? <p className="alert alert-danger">{passwordErrorMsg}</p> : <></> }
                    { passwordSuccessMsg != "" ? <p className="alert alert-success">{passwordSuccessMsg}</p> : <></> }

                    <p className="info">
                        <label>Name</label><br />
                        <b className="grayBg"><i className="fa fa-user"></i> {userName}<i className="fa fa-edit action" onClick={clickEditname}></i></b><br />

                        {/* update name form */}

                        {
                            isNameEdit ? <> 
                                <label>Edit First name</label>
                                <input type="text" className="form-control" placeholder="Edit Firstname..." value={userFirstName} onChange={e => userFirstNameState(e.target.value)}/><br />
                                <label>Edit Middle name</label>
                                <input type="text" className="form-control" placeholder="Edit Middlename..." value={userMiddleName} onChange={e => userMiddleNameState(e.target.value)}/><br />
                                <label>Edit Last name</label>
                                <input type="text" className="form-control" placeholder="Edit Lastname..." value={userLastName} onChange={e => userLastNameState(e.target.value)}/><br />
                                {
                                    loadingEditNameButton ? <button className="btn btn-info">Please Wait...</button>
                                    : <button onClick={saveName} className="btn btn-info">Save <i className="fa fa-check"></i></button>
                                }
                                <button onClick={cancelNameEdit} className="btn btn-danger">Cancel <i className="fa fa-times"></i></button><br />
                            </> : <></>
                        }

                        <label>Phone Number</label><br />
                        <b className="grayBg"><i className="fa fa-phone"></i> {userPhone} <i className="fa fa-edit action" onClick={clickEditPhoneNumber}></i></b><br />

                        {/* update phone number form */}

                        {
                            isPhoneNumberEdit ? <>
                                <label>Edit Phone Number</label>
                                <input type="number" value={userPhone} className="form-control" onChange={e  => userPhoneNumberState(e.target.value)}/><br />
                                {
                                    loadingPhoneNumberButton ? <button className="btn btn-info">Please Wait...</button>
                                    : <button className="btn btn-info" onClick={savePhoneNumber}>Save <i className="fa fa-check"></i></button>
                                }
                                <button onClick={cancelEditPhoneNumber} className="btn btn-danger">Cancel <i className="fa fa-times"></i></button><br /><br />
                            </> : <></>
                        }

                        <label>Email</label><br />
                        <b className="grayBg"><i className="fa fa-envelope"></i> {userEmail} <i className="fa fa-edit action" onClick={clickEditEmail}></i></b><br />

                        {/* update email form */}

                        {
                            isEmailEdit ? <>
                                <input type="email" value={userEmail} className="form-control" onChange={e => userEmailState(e.target.value)}/><br />
                                {
                                    loadingEmailButton ? <button className="btn btn-info">Please Wait...</button>
                                    : <button className="btn btn-info" onClick={saveEmail}>Save <i className="fa fa-check"></i></button>
                                }
                                <button onClick={cancelEditEmail} className="btn btn-danger">Cancel <i className="fa fa-times"></i></button><br /><br />
                            </> : <></>
                        }

                        <label>Password</label><br />
                        <b className="grayBg"><i className="fa fa-lock"></i> Change Password <i className="fa fa-edit action" onClick={clickEditPassword}></i></b><br />

                        {
                            isEditPassword ? <>
                                <label>Change Password</label>
                                <input type="password" placeholder="New Password..." className="form-control" value={newPassword}  onChange={e => setNewPassword(e.target.value)}/><br />
                                <input type="password" placeholder="Repeat New Password..." className="form-control" value={repeatNewPassword}  onChange={e => setRepeatNewPassword(e.target.value)}/><br />
                                <input type="password" placeholder="Old Password..." className="form-control" value={oldPassword}  onChange={e => setOldPassword(e.target.value)}/><br />

                                {
                                    loadingPasswordButton ? <button className="btn btn-info">Please Wait...</button>
                                    : <button className="btn btn-info" onClick={savePassword}>Change Password <i className="fa fa-check"></i></button>
                                }
                                <button onClick={cancelEditPassword} className="btn btn-danger">Cancel <i className="fa fa-times"></i></button><br /><br />

                            </> : <></>
                        }

                    </p>
                </div>
                <div className="modal-footer">
                    <button onClick={logout} className="btn btn-light">Logout <svg xmlns="http://www.w3.org/2000/svg" width="31" height="33" viewBox="0 0 31 33" fill="none">
<path d="M23.7827 8.18763C23.2146 7.61939 22.293 7.6193 21.7246 8.18754C21.1564 8.75587 21.1563 9.67726 21.7246 10.2456L26.0317 14.5528H8.20089C7.39718 14.5528 6.74561 15.2044 6.74561 16.0081C6.74561 16.8118 7.39718 17.4634 8.20089 17.4634H26.0315L21.7246 21.7703C21.1563 22.3386 21.1563 23.26 21.7246 23.8283C22.0088 24.1125 22.3813 24.2545 22.7537 24.2545C23.1262 24.2545 23.4986 24.1125 23.7827 23.8283L30.5738 17.0372C31.1422 16.469 31.1422 15.5475 30.5738 14.9792L23.7827 8.18763Z" fill="#AA3131"/>
<path d="M14.9921 32.0162C15.7958 32.0162 16.4473 31.3647 16.4473 30.561C16.4473 29.7572 15.7958 29.1057 14.9921 29.1057H3.83488V2.91057H14.9921C15.7958 2.91057 16.4473 2.25899 16.4473 1.45528C16.4473 0.651579 15.7958 0 14.9921 0H2.3796C1.5759 0 0.924316 0.651579 0.924316 1.45528V30.561C0.924316 31.3647 1.5759 32.0162 2.3796 32.0162H14.9921Z" fill="#AA3131"/>
</svg></button>
                </div>
            </div>
        </div>
    </div>
}

export default UserModal;