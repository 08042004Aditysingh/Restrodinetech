import { useState } from "react";
import "./css/dashboard.css";
import Booking from "./Booking";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom'
const Dashboard = (props) => {
  const items = [
    {
      value1: "Category",
      value2: "Enter Category",
    },
    {
      value1: "Item Name",
      value2: "Enter Item Name",
    },
    {
      value1: "ETA",
      value2: "ETA",
    },
  ];

  const [list, setList] = useState(props.list)

  return (
    <>
    <Navbar/>
    <Sidebar/>
      <div className="dashboard_div">
        <div className="menu_dashboard">Menu Dashboard</div>
        <div className="items">
          {items.map((item) => (
            <div className="under_item">
              <div className="item">{item.value1}</div>
              <div>
                <input className="input" type="text" placeholder={`${item.value2}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="both_div">
          <div className="color_div">
            <span className="category">Category</span>
            <span className="item_name">Item Name</span>
            <span className="eta">ETA</span>
          </div>
          {list.map((item)=><div className="second_div">
            
            <div className="spans"><div className="itm sapn1">{item.value1}</div>
            <div className="itm span2">{item.value2}</div>
            <div className="itm span3">{item.value3}</div></div>
            <div onClick={()=>{const newlist = list.filter((i)=>i.value2!==item.value2);
            setList(newlist);}}><img src="../Delete.png" alt="delete" className="delete"/></div>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
