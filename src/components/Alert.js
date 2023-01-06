import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div>
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
