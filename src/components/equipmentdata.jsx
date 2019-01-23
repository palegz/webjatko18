import React from "react";
import MUIDataTable from "mui-datatables";

class EquipmentTable extends React.Component {
  render() {
    const columns = ["id", "name", "description"];

    const data = [
        [ "001", "iPhone 5 ", "iPhone 5 in working condition" ],
        [ "002", "Google Nexus 5", "A bit older raw android phone"],
        ["003" , "iPad ", "Apple Tablet"],
        ["004", "OnePlus 6" , "Modern android phone for testing purposes"],
        ["005", "MacBook Pro" , "Expensive laptop, loan with care"],
        ["006", "Gaming PC", "fast gaming pc for testing games"]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      print: false,
      download: false
    };

    return (
      <MUIDataTable
        title={"Equipment table"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default EquipmentTable;