import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { clientID } from '../assets/constants';
import './styles.css';

const Dashboard = () => {

    const history = useHistory();

    React.useEffect(() => {
        if(localStorage.getItem('profile') !== null) {
            history.push('/home');
        }
    }, [history]);

    const googleSuccess = async (res: any) => {
        const values = res?.profileObj;
        const result = {
            email: values.email,
            name: values.name,
            avatar: values.imageUrl,
            token: res?.tokenId
        }        
        localStorage.setItem('profile', JSON.stringify(result));
        history.push('/home');
    }

    const googleFailure = (error: any) => {
        console.log('Something went wrong :(', error);
    }

    return (
        <div className="root">
            <GoogleLogin
                clientId={clientID}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default Dashboard;
