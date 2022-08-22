import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TypeField = () => {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>A</MenuItem>
        <MenuItem value={20}>B</MenuItem>
        <MenuItem value={30}>C</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TypeField