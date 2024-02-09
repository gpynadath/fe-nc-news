import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

const Sorting = ({ searchParams, setSearchParams }) => {
  function setSortBy(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", value);
    setSearchParams(newParams);
  }

  function setOrderBy(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order_by", value);
    setSearchParams(newParams);
  }
  return (
    <div>
      <FormControl
        sx={{ backgroundColor: "lightGrey", minWidth: 120, margin: 1 }}
        size="small"
      >
        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort By"
          defaultValue=""
        >
          <MenuItem
            onClick={() => setSortBy("created_at")}
            value={"created_at" || ""}
          >
            Date
          </MenuItem>
          <MenuItem
            onClick={() => setSortBy("comment_count")}
            value={"comment_count" || ""}
          >
            Comment Count
          </MenuItem>
          <MenuItem onClick={() => setSortBy("votes")} value={"votes" || ""}>
            Votes
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ backgroundColor: "lightGrey", minWidth: 120, margin: 1 }}
        size="small"
      >
        <InputLabel id="demo-simple-select-label2" sx={{ color: "black" }}>
          Order By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          label="Order By"
          defaultValue=""
        >
          <MenuItem onClick={() => setOrderBy("asc")} value={"asc" || ""}>
            Ascending
          </MenuItem>
          <MenuItem onClick={() => setOrderBy("desc")} value={"desc" || ""}>
            Descending
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sorting;
