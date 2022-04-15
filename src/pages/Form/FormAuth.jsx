import * as React from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

export default function FormAuth() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container mt-5 w-full mx-auto flex flex-col gap-y-5">
      <TabContext value={value}>
        <TabList onChange={handleChange} centered>
          <Tab label="Đăng Nhập" value="1" />
          <Tab label="Đăng Ký" value="2" />
        </TabList>
        <TabPanel value="1">
          <Login onClick={() => setValue("2")}></Login>
        </TabPanel>
        <TabPanel value="2">
          <Register onClick={() => setValue("1")}></Register>
        </TabPanel>
      </TabContext>
    </div>
  );
}
