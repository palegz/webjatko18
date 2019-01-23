import React from "react";
import MUIDataTable from "mui-datatables";

class UsersTable extends React.Component {
  render() {
    const columns = ["id", "name", "email"];

    const data = [
        [ "001", "Pentti", "pentti@pentti.com"   ],
        [ "002", "Emma", "emmawau@gmail.com"],
        ["003" , "Seppo", "setämies69@live.fi"],
        ["004", "Salla" , "sallailona@ilona.fi"],
        ["005", "Jimmy" , "jipa2222@hotmail.com"],
        ["006", "Vladimir", "vladimir@motherland.ru"]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      print: false,
      download: false
    };

    return (
      <MUIDataTable
        title={"Users table"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default UsersTable;