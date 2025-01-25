import React from "react";

export default function TabSelections({ active, list, activeTab }) {
  return active === activeTab ? (
    <div>
      {Array.isArray(list[0]) ? (
        <div className="flex flex-row gap-10">
          {list.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </div>
          ))}
        </div>
      ) : (
        list.map((el, idx) => <li key={idx}>{el}</li>)
      )}
    </div>
  ) : null;
}
