import { useState } from "react";
import "./css/booking.css";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const item1 = [
    {
        value:"Category",
        object:["Non Veg Starter","Soup","Main Course","Veg Starter"]
    }
]
const items2 = [
    
    {
        value:"Item Name",
        placeholder:"Enter Item Name"

    },{
        value:"ETA",
        placeholder:"Enter ETA"
    }
]
const Booking=(props)=>{
    const [task,setTask] = useState(props.b_list);

    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className="booking_div">
            <div className="menu_details">Menu Details</div>
            <div className="booking">
                <div className="add_menu">Add Your Menu</div>
                <div className="both">
                    <div className="common2">Category</div>
                    <div>
                        <select name="items" id="" className="common">
                            <option value = "Select a Category">Select a Category</option>
                            <option value="Non Veg Starter">Non Veg Starter</option>
                            <option value="Soup">Soup</option>
                            <option value="Main Course">Main Course</option>
                            <option value="Veg Starter">Veg Starter</option>
                        </select>
                    </div>
                </div>
                

                {items2.map((item)=><div className="both">
                    <div className="common2">{item.value}</div>
                    <div>
                        
                            <input type="text" placeholder={`${item.placeholder}` } className="common"/>
                        
                    </div>
                </div>)}
                <Link to="/dashboard"><div><button class="btn" onClick={()=>setTask([...task,{value1:"tryr",value2:"r767",value3:9}])}>Save</button></div></Link>
                

            </div>

        </div>
        </>
    );
}

export default Booking;