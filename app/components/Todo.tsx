"use client";

import React, { useState } from "react";
import DropdownComponent from "./button";

export default function Todo({}: Props) {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // State to store the index of the todo being edited
  const [editActivity, setEditActivity] = useState(""); // State to store the todo content to be edited

  function addActivity() {
    if (editIndex !== -1) {
      // If editIndex is not -1, it means we are in edit mode
      setlistData((listData) => {
        const updatedList = [...listData];
        updatedList[editIndex] = editActivity;
        setEditIndex(-1);
        setEditActivity("");
        return updatedList;
      });
    } else {
      // Otherwise, we are adding a new todo
      setlistData((listData) => {
        const updatedList = [...listData, activity];
        setActivity("");
        return updatedList;
      });
    }
  }

  // Function to handle the edit mode
  function handleEdit(index: React.SetStateAction<number>) {
    setEditIndex(index);
    setEditActivity(listData[index]);
  }

  function removeActivity(index: number) {
    const updatedListData = listData.filter((elem, id) => {
      return index != id;
    });
    setlistData(updatedListData);
  }

  return (
    <div className="flex flex-col w-full gap-8 relative">
      <div className="w-full text-center text-3xl font-bold">Todo APP</div>

      <div className="flex w-full bg-white justify-between rounded-lg overflow-hidden p-2">
        <input
          className="w-[86%] p-2 outline-none text-black"
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="p-2 rounded-md bg-black" onClick={addActivity}>
          {editIndex !== -1 ? "Save" : "Create TODO"}
        </button>
      </div>

      <div className="flex w-full flex-col gap-2">
        {listData.length > 0 &&
          listData.map((data, index) => {
            return (
              <div
                className="flex w-full bg-white justify-between rounded-lg overflow-hidden p-2 gap-2"
                key={index}
              >
                <div className="w-[70%] p-2 outline-none text-black">
                  {data}
                </div>
                <div className="flex w-[40%] gap-1">
                  <DropdownComponent />
                  <button
                    className="py-2 px-4 rounded-md bg-black w-[30%]"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="py-2 px-4 text-center rounded-md bg-black w-[30%] hover:bg-red-500"
                    onClick={() => removeActivity(index)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {editIndex !== -1 && (
        <div className="flex absolute bg-black w-full h-screen justify-center items-center bg-opacity-70">
          <div className="flex w-full bg-white justify-between rounded-sm overflow-hidden py-44 gap-2 px-4 h-[55%] items-center">
            <input
              className="w-full px-2 py-4 outline-none text-white rounded-lg bg-black"
              value={editActivity}
              onChange={(e) => setEditActivity(e.target.value)}
            />
            <div className="flex w-[30%] gap-1">
              <button
                className="p-4 rounded-md bg-black w-full text-white"
                onClick={() => setEditIndex(-1)}
              >
                Cancel
              </button>
              <button
                className="p-4 text-center rounded-md bg-black w-full hover:bg-green-500 text-white"
                onClick={addActivity}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
