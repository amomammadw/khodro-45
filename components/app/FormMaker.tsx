"use client";

import { IFormInput, TChangePayload } from "@/types";
import { Input } from "../ui/input";
import SelectInput from "./SelectInput";
import { ChangeEvent, useState } from "react";

type TProps = {
  formInputs: IFormInput[];
  isInner?: boolean;
  onFormChange: (values: TChangePayload) => void;
};

function FormMaker({ formInputs, onFormChange }: TProps) {
  return (
    <div className="space-y-5">
      {formInputs.map((inputItem, inputIndex) => {
        switch (inputItem.type) {
          case "input":
            return (
              <Input
                onInput={(event: ChangeEvent<HTMLInputElement>) =>
                  onFormChange({ [inputItem.name]: event.target.value })
                }
                {...inputItem}
                key={`input-${inputIndex}`}
              />
            );
          case "select":
            return (
              <SelectInput
                {...inputItem}
                onChange={onFormChange}
                key={`select-${inputIndex}`}
              />
            );
          default:
            break;
        }
      })}
    </div>
  );
}

export default FormMaker;
