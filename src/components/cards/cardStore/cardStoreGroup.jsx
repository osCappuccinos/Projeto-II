import React from 'react';
import CardStore from './cardStore';
import '../cards.css'

const CardStoreGroup = ({ stores }) => (
    <div className="card-group">
        {
            Object.keys(stores).map((storeKey) => (
                <CardStore key={storeKey} store={stores[storeKey]} />
            ))
        }
    </div>
)

export { CardStoreGroup };