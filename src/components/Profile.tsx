import React from 'react';
import './styles.css';

interface Iprops {
    profile: any,
    data: any[],
    setOrders: React.Dispatch<React.SetStateAction<any[]>>
}

const Profile = ({ profile, data, setOrders }: Iprops) => {

    const makeid = (length: Number) => {
        var result           = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result.toLowerCase();
    }

    const order = {
        id: makeid(25),
        customer_name: '',
        customer_email: '',
        product: '',
        quantity: 0
    }

    const [newOrder, setNewOrder] = React.useState(order)

    const makeNewOrder = () => {
        setOrders([newOrder, ...data]);
    }

    const handleChange = (e: any) => {
        setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
    }

    return (
        <div className="profile-root">
            <div className="profile">
                <img className="profile-image m-1" src={profile.avatar} alt="avatar"/>
                <h4 className="m-1">{profile.name}</h4>
                <h5 className="m-1">{profile.email}</h5>
            </div>
            <div className="profile m-5 mb-0">
                <form>
                    <label>Customer Name</label>
                    <br/>
                    <input name="customer_name" type="text" onChange={handleChange}/>
                    <br/>
                    <label>Customer Email</label>
                    <br/>
                    <input name="customer_email" type="text" onChange={handleChange}/>
                    <br/>
                    <label>Product</label>
                    <br/>
                    <input name="product" type="text" onChange={handleChange}/>
                    <br/>
                    <label>Quantity</label>
                    <br/>
                    <input name="quantity" type="number" onChange={handleChange}/>
                </form>
            </div>
            <div className="profile m-5 pointer" onClick={makeNewOrder}>
                <h3 className="m-0">+ New Order</h3>
            </div>
        </div>
    )
}

export default Profile;
