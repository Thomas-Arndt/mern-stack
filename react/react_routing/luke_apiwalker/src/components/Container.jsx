import React from "react";

const Container = (props) => {
    return(
        <div className="d-flex flex-column align-items-center col-8 offset-2">
                {props.children}
        </div>
    )
}
export default Container;