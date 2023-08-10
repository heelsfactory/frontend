import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import "./Table.css";
import { itemRender, onShowSizeChange } from "../Pagination";

const TableComponent = ({ columns, myData,id }) => {
  return (
    <div className="table">
      <Table
        className="table-striped"
        pagination={{
          total: { myData }.length,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: true,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        style={{ overflowX: "auto" }}
        columns={columns}
        // bordered
        dataSource={myData}
        rowKey={(record) => record[id]}
        // onChange={console.log("change")}
      />
    </div>
  );
};

export default TableComponent;
