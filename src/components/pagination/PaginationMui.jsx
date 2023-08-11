import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination
        className="text-white"
        // style={{ backgroundColor: "white" }}
        count={10}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}
