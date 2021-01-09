import React from "react"
import Links from "../constants/links"
import { IoMdClose } from "react-icons/io"
const Sidebar = ({ open, toggle }) => {
  return (
    <aside className={`sidebar ${open ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="siderbarLinks" />
      </div>
    </aside>
  )
}
export default Sidebar
