import {Grid} from "@mui/material";
import React, {useState} from "react";
import AppAnimation from "./AppAnimation";
import AppForm from "./AppForm";
import AppGraph from "./AppGraph";
import AppSwitch from "./AppSwitch";

// interface Visible = "graph" | "anime" | "both"
//   visibleElement: "graph" | "anime" | "both";
// }

const AppBody = () => {
  const [visibleElement, setvisibleElement] = useState<
    "graph" | "anime" | "both" | "none"
  >("both");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid width="80%">
        {visibleElement === "graph" && <AppGraph></AppGraph>}
        {visibleElement === "anime" && <AppAnimation></AppAnimation>}
        {visibleElement === "both" && (
          <Grid>
            <AppGraph></AppGraph>
            <AppAnimation></AppAnimation>
          </Grid>
        )}
      </Grid>
      <AppSwitch setVisibleElement={setvisibleElement}></AppSwitch>
      <AppForm></AppForm>
    </Grid>
  );
};

export default AppBody;
