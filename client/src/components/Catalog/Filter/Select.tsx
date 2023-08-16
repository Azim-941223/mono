import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from "react-i18next";
import css from "./Select.modules.scss";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Настенные декорации',
  'Зеркала',
  'Шторы',
  'Полки',
  'Картины',
  'Вазы/цветочные горшки'
];

export default function MultipleSelectCheckmarks() {
    const { t } = useTranslation("AcessoiresFilter");


  const [categories, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className={css.selectstyle}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Категории</InputLabel>
        <Select  className={css.selectstyleblack}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={categories}
          onChange={handleChange}
          input={<OutlinedInput label="Категории"/>}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} >
              <Checkbox checked={categories.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}