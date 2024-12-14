"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IFormInput, TChangePayload } from "@/types";
import FormMaker from "./FormMaker";

type TProps = IFormInput & {
  onChange: (data: TChangePayload) => void;
};

function SelectInput({ title, options, forms, name, onChange }: TProps) {
  const [showFormMaker, setShowFormMaker] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleChangeSelectValue = (selectValue: string) => {
    setSelectedItem(selectValue);
    onChange({ [name]: selectValue });

    if (forms && Object.keys(forms).length > 0) {
      Object.keys(forms).forEach((formKey) => {
        if (selectValue === formKey) {
          setShowFormMaker(true);
        } else {
          setShowFormMaker(false);
        }
      });
    }
  };

  return (
    <>
      <Select onValueChange={handleChangeSelectValue}>
        <SelectTrigger>
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{title}</SelectLabel>
            {options
              ? options.map((optionItem, optionIndex) => {
                  return (
                    <SelectItem
                      key={`option-${title}-${optionIndex}`}
                      value={optionItem.value}
                    >
                      {optionItem.title}
                    </SelectItem>
                  );
                })
              : "موردی وجود ندارد"}
          </SelectGroup>
        </SelectContent>
      </Select>

      {showFormMaker && forms ? (
        <FormMaker onFormChange={onChange} formInputs={[forms[selectedItem]]} />
      ) : (
        ""
      )}
    </>
  );
}

export default SelectInput;
