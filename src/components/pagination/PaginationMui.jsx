import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ currentPage, itemsPerPage, totalItems, onChangePage }) {
  
  const pagesVisited = currentPage * itemsPerPage;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, page) => {
    onChangePage(event, page);
  };

  return (
    <div className='pagination-container'>
        <p className='text-xs text-left'>
            Showing {Math.min(itemsPerPage, totalItems - pagesVisited)} results of {totalItems}
        </p>
        <div className='flex items-center justify-center'>
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                page={currentPage + 1}
                variant="outlined"
                color="primary"
                shape="rounded"
                onChange={handlePageChange}
              />
            </Stack>
        </div>
    </div>
  );
}
