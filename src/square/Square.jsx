import './styles.css';

import React, { useEffect, useState } from 'react';

const Square = ({ pushToList, rowIndex, columnIndex }) => {
    const [ customClass, setIsCustomClass ] = useState({customClassName: 'column'});
    const [ newColumnIndex, setNewColumnIndex ] = useState(null);
    const [ newRowIndex, setNewRowIndex ] = useState(null);

    useEffect(() => {
        if (newColumnIndex === null) {
            return;
        }

        if (newRowIndex === null) {
            return;
        }

        pushToList(newRowIndex, newColumnIndex);

    }, [newColumnIndex, newRowIndex, rowIndex, columnIndex, pushToList]);

    const onMouseEnterChange = (() => {
        setIsCustomClass(prevState => {
            if (prevState.customClassName.split(' ').includes('blue')) {
                setNewColumnIndex(columnIndex);
                setNewRowIndex(rowIndex);

                return {
                    ...prevState,
                    customClassName: 'column'
                };
            }

            setNewColumnIndex(columnIndex);
            setNewRowIndex(rowIndex);

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
