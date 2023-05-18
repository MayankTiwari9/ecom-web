import React from 'react';
import "./Account.css";
import {useSelector} from "react-redux";
import moment from "moment";

const Account = () => {

    const {user} = useSelector((state) => state.user);

  return (<>
    {user && (
        <div>
        <div>
            {/* <img src={user.avatar.url} alt='avatar'/> */}
        </div>
        <div>
            <div>
                <h2>Name</h2>
                <input type='text' name='name' readOnly value={user.name}/>
            </div>
            <div>
            <h2>Email</h2>
                <input type='text' name='name' readOnly value={user.email}/>
            </div>
            <div> 
            <h2>Account Created</h2>
                <input type='text' name='name' readOnly value={moment(user.createdAt).utc().format('YYYY-MM-DD')}/>
            </div>
            <div>
                <button>Edit</button>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Account;