import axios from "axios";

function LogOut() {

    function logout(){
        axios.post('/logout').then(() =>  {
            window.location.replace('/');
        })
    }

    return <button onClick={logout} className="btn btn-danger">Logout</button>
}

export default LogOut;