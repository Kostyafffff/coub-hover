import './styles.css';

import React from "react";

const HoverSquaresList = ({ list }) => {
    return (
        <>

            <div className='wrapperList'>
                <div className='title'>{ 'Hover squares' }</div>
                {
                    list.map((it, index) => (<div key={index} className='item'>{`row ${it.row} col ${it.column}`}</div>))
                }
            </div>
        </>
    );
};

export default React.memo(HoverSquaresList);
