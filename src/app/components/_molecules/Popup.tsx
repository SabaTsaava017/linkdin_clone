import React from "react";

const Popup = ({ setShow, title }: any) => {
  return (
    <div
      style={{
        width: "60%",
        height: "50%",
        backgroundColor: "grey",
        position: "absolute",
        borderRadius: 20,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <h1>{title}</h1>
        <button
          style={{ width: 60, height: 20 }}
          onClick={() => setShow(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
