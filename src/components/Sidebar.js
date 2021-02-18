import React from "react"
import Links from "../constants/links"
import { IconContext } from "react-icons"
import { IoMdClose } from "react-icons/io"
const Sidebar = ({ open, toggle }) => {
  return (
    <aside className={`sidebar ${open ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <IoMdClose />
        </IconContext.Provider>
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebarLinks" />
      </div>
    </aside>
  )
}
export default Sidebar
