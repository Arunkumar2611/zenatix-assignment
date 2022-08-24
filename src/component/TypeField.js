import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TypeField = () => {
  const [type, setType] = React.useState();
  const Ptypes = ["normal","fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]

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
        {
          Ptypes.map((types) => (
            <MenuItem value={types}>{types}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default TypeField