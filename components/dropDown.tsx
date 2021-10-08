import { useState } from "react";
import { SelectInput } from "vcc-ui";
import { DropDownProps } from "../types";

export default function DropDown(props: DropDownProps) {
  const [value, setValue] = useState("all");

  return (
    <SelectInput label='Modell' value={value} onChange={(e: any) => {
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
