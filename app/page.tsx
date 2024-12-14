"use client";

import FormMaker from "@/components/app/FormMaker";
import { formSchema } from "@/data";
import { TChangePayload } from "@/types";
import { useState } from "react";

export default function Home() {
  const [formValue, setFormValue] = useState<TChangePayload>(
    {} as TChangePayload
  );
  const handleFormChange = (data: TChangePayload) => {
    setFormValue({ ...formValue, ...data });

    console.log(data);
  };

  return (
    <div>
      <main>
        <FormMaker onFormChange={handleFormChange} formInputs={formSchema} />
      </main>
    </div>
  );
}
