import Square from "../square/Square";
import './styles.css';

import React from "react";

const SquareList = ({ coubArray, pushToList, wrapperClassName }) => {

  const wrapperName = wrapperClassName();

  return (
      <div className={wrapperName}>
        {
            coubArray.map((it, rowIndex) => {
                return coubArray.map((jt, columnIndex) => {
                    return (
                        <Square
                            key={columnIndex}
                            pushToList={pushToList}
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}
                        />
                    );
                })
            })
        }
      </div>
    )
}

export default React.memo(SquareList);
