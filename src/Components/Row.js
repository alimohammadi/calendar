import React from 'react';
const Row=(props) => {
    let cells=props.cells.map(cell => cell);
    return (
        <tr>
            {cells}
        </tr>
    );
}
export default Row;