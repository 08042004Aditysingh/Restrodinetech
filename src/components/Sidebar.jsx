import "./css/sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [present, setPresent] = useState(1);
  const [yes, setYes] = useState(false)
  return (
    <>
      {yes&&<div className="sidebar_div">
        <div className="restrodine">
          <img className="restro" src="../restro.png" alt="restro" />
        </div>
        <div className="ele_div">
          <Link to="/dashboard">
            <div className="component">
              <div>{present == 1 && <img src="../crt-tab.png" alt="" />}</div>
              <div
                onClick={() => {
                  setPresent(1);
                  setYes(false);
                }}
              >
                <img
                  className="dashboard corsr"
                  src="../dashboard.png"
                  alt="dashboard"
                />
              </div>
            </div>
          </Link>
          <Link to="/booking">
            <div className="component">
              <div>{present == 2 && <img src="../crt-tab.png" alt="" />}</div>
              <div
                onClick={() => {
                  setPresent(2);
                  setYes(false);
                }}
              >
                <img className="menu corsr" src="../menu.png" alt="menu" />
              </div>
            </div>
          </Link>
          <div className="component">
            <div>{present == 3 && <img src="../crt-tab.png" alt="" />}</div>
            <div
              onClick={() => {
                setPresent(3);
                setYes(false);
              }}
            >
              <img className="order corsr" src="../order.png" alt="order" />
            </div>
          </div>
          <div className="component">
            <div>{present == 4 && <img src="../crt-tab.png" alt="" />}</div>
            <div
              onClick={() => {
                setPresent(4);
                setYes(false);
              }}
            >
              <img
                className="service corsr"
                src="../service.png"
                alt="service"
              />
            </div>
          </div>
          <div className="component">
            
            <div
              onClick={() => {
                setYes(false);
              }}
            >
              <img className="left"
                src="../left.png"
                alt="service"
              />
            </div>
          </div>
        </div>
      </div>}
      {!yes&&<div className="brgr"><img className="burgr_menu" onClick={()=>{setYes(true)}} src="../burger-menu.png" alt="menu" /></div>}
    </>
  );
};

export default Sidebar;
