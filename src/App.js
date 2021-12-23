import React from "react";
//import {BrowserRouter as  Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from "react-redux";
//   import { selectSendMessageIsOpen } from "./features/mailSlice";
// import {selectUser} from "./features/userSlice";

function App() {
  // const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
              <Route path="/mail" element={<Mail/>}>
                
              </Route>
              <Route path="/" element={<EmailList />}>
                
              </Route>
            </Routes>
        </div>
        {/* {sendMessageIsOpen && <SendMail />} */}
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
