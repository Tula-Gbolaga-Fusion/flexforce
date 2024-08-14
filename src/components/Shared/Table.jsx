import React, { useState, useMemo } from "react";

const Table = ({ tableData, onRowClick = () => {}, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tableData]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="overflow-x-auto bg-gray-100 rounded-lg shadow">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sticky ? "sticky left-0 z-10 bg-white" : ""
                } `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentTableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick(row)}
              className={`
                ${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                hover:bg-gray-100 cursor-pointer transition-colors duration-200
              `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                    column.sticky ? "sticky left-0 z-10 bg-white" : ""
                  }`}
                >
                  {column.cell ? column.cell(row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, tableData.length)}
              </span>{" "}
              of <span className="font-medium">{tableData.length}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                    ${
                      currentPage === number + 1
                        ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                >
                  {number + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((page) => Math.min(page + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Table };
