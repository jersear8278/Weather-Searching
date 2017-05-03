import React from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average (data){
    return _.round(_.sum(data)/data.length);
}

export default  (data,color,units) => {
    return (

    <div>
        <Sparklines data={data}  width={180} height={120}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(data)}{units} </div>
    </div>
       );
}