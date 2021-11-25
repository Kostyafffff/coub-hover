import './styles.css';

import React, { useState } from 'react';

const Square = ({ pushToList, rowIndex, columnIndex }) => {
    const [ customClass, setIsCustomClass ] = useState({customClassName: 'column'});

    const onMouseEnterChange = (() => {
        setIsCustomClass(prevState => {
            if (prevState.customClassName.split(' ').includes('blue')) {
                pushToList(rowIndex, columnIndex);

                return {
                    ...prevState,
                    customClassName: 'column'
                };
            }

            pushToList(rowIndex, columnIndex);

            return {
                ...prevState,
                customClassName: 'column blue'
            };
        });
    });

    return (
        <div
            className={customClass.customClassName}
            onMouseEnter={onMouseEnterChange}
        />
    );
}

export default React.memo(Square);
