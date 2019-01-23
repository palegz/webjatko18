import React from "react";
import MUIDataTable from "mui-datatables";

class SimpleTable extends React.Component {
  render() {
    const columns = ["id", "equipmentId", "UserId", "Begin date", "End date", "Returned"];

    const data = [
      ["001", "001", "001", "26.12.2018", "30.12.2018",null],
      ["002", "001", "001", "26.12.2018", "30.12.2018",null],
      ["003", "001", "001", "26.12.2018", "30.12.2018",null],
      ["004", "001", "001", "26.12.2018", "30.12.2018",null],
      ["005", "001", "001", "26.12.2018", "30.12.2018",null],
      ["006", "001", "001", "26.12.2018", "30.12.2018",null],
      ["007", "001", "001", "26.12.2018", "30.12.2018",null],
      ["008", "001", "001", "26.12.2018", "30.12.2018",null],
      ["009", "001", "001", "26.12.2018", "30.12.2018",null],
      ["010", "001", "001", "26.12.2018", "30.12.2018",null],
      ["011", "001", "001", "26.12.2018", "30.12.2018",null],
      ["012", "001", "001", "26.12.2018", "30.12.2018",null],
      ["013", "001", "001", "26.12.2018", "30.12.2018",null],
      ["014", "001", "001", "26.12.2018", "30.12.2018",null],
      ["015", "001", "001", "26.12.2018", "30.12.2018",null],
    
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      print: false,
      download: false
    };

    return (
      <MUIDataTable
        title={"Loans table"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default SimpleTable;