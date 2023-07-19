"use client";
import React, { useEffect, useState } from "react";
import DropdownComponent from "./button";
import { data } from "autoprefixer";

type Props = {};

export default function Todo({}: Props) {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const [edit, setEdit] = useState(false);

  function addActivity() {
    if (activity == "") alert("Please add todo");
    else setlistData([...listData, activity]);
    setActivity("");
  }

  function removeActivity(index: number) {
    const updatedListData = listData.filter((elem, id) => {
      return index != id;
    });
    setlistData(updatedListData);
  }

  function editlistData() {
    setEdit(true);
    setEditValue({});
  }
  return (
    <div className="flex flex-col  w-full gap-8 relative">
      {" "}
      <div className="w-full text-center text-3xl font-bold ">Todo APP</div>
      <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
        <input
          className="w-[86%] p-2 outline-none text-black"
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button
          className="
     p-2 rounded-md bg-black "
          onClick={addActivity}
        >
          Create TODO
        </button>
      </div>
      <div className="flex w-full flex-col gap-2">
        {" "}
        {listData != [] &&
          listData.map((data, index) => {
            return (
              <>
                <div
                  className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2 gap-2 "
                  key={index}
                >
                  <div className="w-[70%] p-2 outline-none text-black">
                    {" "}
                    {data}{" "}
                  </div>
                  <div className="flex w-[40%] gap-1">
                    {" "}
                    <DropdownComponent />
                    <EditButton
                      edit={edit}
                      data={data}
                      setEdit={setEdit}
                      setlistData={setlistData}
                      index={index}
                      listData={listData}
                    />
                    <button
                      className="
 py-2 px-4 text-center rounded-md bg-black w-[30%] hover:bg-red-500"
                      onClick={() => removeActivity(index)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
                {/* edit modal */}
              </>
            );
          })}
      </div>
    </div>
  );
}

function EditButton({ edit, data, setEdit, setlistData, index, listData }) {
  const [editValue, setEditValue] = useState(data);

  useEffect(() => {
    setEditValue(data);
  }, [data]);

  console.log("data", data);

  function handleEdit() {
    setEdit(true);
    const editData = listData.filter((elem, id) => {
      return index === id;
    });

    // setEditValue(editData);
  }

  function handleOnChange(e) {
    setEditValue(e.target.value);
  }

  function handleSave() {
    const updatedListData = listData.filter((elem, id) => {
      return index != id;
    });
    setlistData([editValue, ...updatedListData]);
    setEdit(false);
  }

  function handleClose() {
    setEditValue("");
    setEdit(false);
  }
  return (
    <>
      <button
        className="
 py-2 px-4 rounded-md bg-black w-[30%] "
        onClick={handleEdit}
      >
        Edit editValue-{editValue}
      </button>
      {edit && (
        <div
          className={`flex fixed top-0 left-0 bg-black w-full h-screen justify-center items-center bg-opacity-70  `}
        >
          <div className="flex w-[80%]   bg-white justify-between rounded overflow-hidden py-44 gap-2 px-4 h-[55%] items-center">
            <input
              className="w-full px-2 py-4 outline-none text-white rounded-lg  bg-black"
              value={editValue}
              onChange={handleOnChange}
            />
            <div className="flex w-[30%] gap-1">
              <button
                className="
p-4  rounded-md bg-black w-full text-white"
                onClick={handleClose}
              >
                Cancle -{data}
              </button>
              <button
                className="
p-4 text-center rounded-md bg-black w-full hover:bg-green-500 text-white"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
