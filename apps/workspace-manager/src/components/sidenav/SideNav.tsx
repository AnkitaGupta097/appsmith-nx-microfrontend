import React, { useState } from "react";
import "./SideNav.css";

interface SideNavProps {
  title?: string;
}

const SideNav: React.FC<SideNavProps> = ({ title = "Workspaces" }) => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="side-nav">
      <div className="side-nav-header">
        <h2>{title}</h2>
        <button onClick={addItem} className="add-button">
          +
        </button>
      </div>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="input"
      />
      <ul className="side-nav-list">
        {items.map((item, index) => (
          <li key={index} className="side-nav-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
