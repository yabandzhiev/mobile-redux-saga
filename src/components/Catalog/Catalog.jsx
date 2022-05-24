import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";

import { columns } from "../../constants/columns";

import {
  useCrudActionsDispatch,
  useErrorActionsDispatch,
} from "../../common/hooks/useActions";

//check if rows are empty
const validateRow = (row) => {
  return Object.values(row).length === columns.length;
};

//check if object is empty
const isEmpty = (cars) => {
  return Object.keys(cars).length === 0;
};

const Catalog = () => {
  const { getCars, createCar, editCar, removeCar } = useCrudActionsDispatch();
  //get cars,user and errors from state
  const { cars } = useSelector((state) => state.getCars);
  const [allCars, setAllCars] = useState(cars);
  const { currentUser, userId, accessToken, firstName, lastName } = useSelector(
    (state) => state.userSession
  );
  const lengthOfTable = allCars.length > 10 ? 20 : 10;

  useEffect(() => {
    getCars();
    setAllCars(cars);
  }, [!isEmpty(cars)]);

  const onEdit = (newData, oldData) => {
    setAllCars((prevState) => {
      const data = [...prevState];

      data[data.indexOf(oldData)] = newData;
      editCar(newData, userId, accessToken);
      return data;
    });
  };

  const onCreate = (newData) => {
    const user = {
      id: userId,
      username: currentUser,
      password: null,
      firstName,
      lastName,
    };

    setAllCars((prevState) => {
      const data = [...prevState];
      data.push({ ...newData, user });
      createCar({ ...newData, user }, accessToken);

      return data;
    });
  };

  const onDelete = (oldData) => {
    setAllCars((prevState) => {
      const data = [...prevState];

      const index = data.indexOf(oldData);

      data.splice(index, 1);
      return data;
    });
    removeCar(oldData.id, userId, accessToken);
  };

  return (
    <div>
      <MaterialTable
        columns={columns}
        data={allCars}
        title="Mobile"
        options={{
          addRowPosition: "first",
          pageSize: lengthOfTable,
        }}
        editable={{
          isEditable: (rowData) => (userId ? rowData.user.id === userId : rowData),
          isEditHidden: (rowData) => (userId ? rowData.user.id !== userId : rowData),
          isDeletable: (rowData) => (userId ? rowData.user.id === userId : rowData),
          isDeleteHidden: (rowData) => (userId ? rowData.user.id !== userId : rowData),

          onRowAdd: currentUser
            ? (newData) =>
                new Promise((resolve, reject) => {
                  const isDataValid = validateRow(newData);
                  if (!isDataValid) {
                    reject();
                  } else {
                    onCreate(newData);
                    resolve();
                  }
                })
            : null,

          onRowUpdate: currentUser
            ? (newData, oldData) =>
                new Promise((resolve, reject) => {
                  //check if every field is filled
                  for (let key in newData) {
                    if (newData[key] === "" || newData[key] === 0) {
                      reject();
                      return;
                    }
                  }
                  if (oldData) {
                    resolve();
                    onEdit(newData, oldData);
                  } else {
                    reject();
                  }
                })
            : null,

          onRowDelete: currentUser
            ? (oldData) =>
                new Promise((resolve) => {
                  onDelete(oldData);
                  resolve();
                })
            : null,
        }}
      />
    </div>
  );
};

export default Catalog;
