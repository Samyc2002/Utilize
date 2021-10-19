import React from 'react';

import Card from './Card';
import './styles.css';

interface Iprops {
    data: any[],
    setOrders: React.Dispatch<React.SetStateAction<any[]>>
}

const Data = ({ data, setOrders }: Iprops) => {

    return (
        <div className="data">
            {data.map(order => <Card data={order} key={order.id} initial={data} changeData={setOrders}/>)}
        </div>
    )
}

export default Data;
