import React from "react";
import { useFilters, useTable, useExpanded, useRowSelect } from "react-table";

const Table = ({
  columns,
  data,
  onRowClick,
  renderRowSubComponent,
  onChangeSelection,
}) => {
  const initiallySelectedRows = React.useMemo(() => new Set(["1"]), []);

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        selectedRowPaths: initiallySelectedRows,
      },
      debug: true,
    },
    useFilters,
    useExpanded,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
  } = tableInstance;

  React.useEffect(() => {
    onChangeSelection(selectedFlatRows);
  }, [selectedFlatRows, onChangeSelection]);

  return (
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups?.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props

                  <th
                    {...column.getHeaderProps({
                      style: {
                        width: column.width ? column.width : "auto",
                      },
                    })}
                  >
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}

      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);

            return (
              <React.Fragment key={row.id}>
                <tr onClick={() => onRowClick(row)} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} title={cell?.value}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td
                      className={"open-subrow"}
                      colSpan={visibleColumns.length}
                    >
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
