import React from 'react';

import Profile from '../components/Profile';
import data from '../assets/DummyData.json';
import Data from '../components/Data';
import './styles.css';

const Home = () => {

    const profile = JSON.parse(localStorage.getItem('profile') as string);

    const [orders, setOrders] = React.useState(data);

    return (
        <div className="root">
            <Profile profile={profile} data={orders} setOrders={setOrders}/>
            <Data data={orders} setOrders={setOrders}/>
        </div>
    )
}

export default Home;
