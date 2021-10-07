import { useState } from "react";
import { SelectInput } from "vcc-ui";

export default function DropDown(props) {
  const [value, setValue] = useState("all");

  return (
    <SelectInput label='Modell' value={value} onChange={e => {
        setValue(e.target.value);
        props.onChange(e.target.value)
    }}>
      <option value="all">Alla modeller</option>
      <option value="suv">suv</option>
      <option value="estate">Estate</option>
      <option value="sedan">Sedan</option>
    </SelectInput>
  );
}
