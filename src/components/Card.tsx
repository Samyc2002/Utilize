import React from 'react';

import './styles.css';

interface Iprops {
    data: any,
    initial: any[],
    changeData: React.Dispatch<React.SetStateAction<any[]>>
}

const Card = ({ data, initial, changeData }: Iprops) => {

    const [uploadData, setUploadData] = React.useState(data);
    const [update, setUpdate] = React.useState(false);

    const toggleUpdate = () => {
        setUpdate(prevState => !prevState);
    }

    const updateData = () => {
        changeData([uploadData, ...initial.filter(order => order.id !== data.id)]);
        toggleUpdate();
    }

    const deleteOrder = () => {
        changeData(initial.filter(order => order.id !== data.id));
    }

    const handleChange = (e: any) => {
        setUploadData({ ...uploadData, [e.target.name]: e.target.value });
    }

    const updateForm = (
        <form>
            <label>Customer Name</label>
            <br/>
            <input name="customer_name" value={uploadData.customer_name} type="text" onChange={handleChange}/>
            <br/>
            <label>Customer Email</label>
            <br/>
            <input name="customer_email" value={uploadData.customer_email} type="text" onChange={handleChange}/>
            <br/>
            <label>Product</label>
            <br/>
            <input name="product" value={uploadData.product} type="text" onChange={handleChange}/>
            <br/>
            <label>Quantity</label>
            <br/>
            <input name="quantity" value={uploadData.quantity} type="number" onChange={handleChange}/>
            <br/>
            <br/>
            <button onClick={updateData}>Update</button>
        </form>
    )

    return (
        <div className="card">
            {update?updateForm:(
                <>
                    <h4>Customer Name: {data.customer_name}</h4>
                    <h4>Customer Email: {data.customer_email}</h4>
                    <h4>Product: {data.product}</h4>
                    <h4>Quantity: {data.quantity}</h4>
                    <div>
                        <button onClick={deleteOrder}>Delete Order</button>
                        <button onClick={toggleUpdate}>Update Order</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Card;
