import React from "react";

const Counter = props => {
    return (
        <div className="Counter">
            <b>To-Do Count: </b>
            {props.amount}
        </div>
    );
};

export default Counter;
