import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <div>
        <h6 data-test="main-heading" style={{ fontSize: 46 }}>
          test
        </h6>
        <p style={{ fontSize: 18 }}>
          Click button to clear page
        </p>
        <Button
          variant="primary"
          size="lg"
          data-test="docs-btn-anchor"
          target="_blank"
          onClick={()=>{
            localStorage.clear()
            location.reload()
          }}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};
