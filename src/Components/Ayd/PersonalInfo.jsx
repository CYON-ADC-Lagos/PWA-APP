"use client";

import { isEmpty } from "../../helpers/utils";
import Controls from "./Controls";
import { TextField } from "./FormField";
import StepShell from "./StepShell";

const PersonalInfo = ({ requestData, goBack, next, onChange, start, end }) => {
  const { firstName, lastName } = requestData;
  const disableBtn = isEmpty(lastName) || isEmpty(firstName);

  return (
    <StepShell
      eyebrow="About you"
      title="Personal information"
      subtitle="Let us know who will be attending."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="First name"
          required
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="Jane"
          autoComplete="given-name"
        />
        <TextField
          label="Last name"
          required
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Doe"
          autoComplete="family-name"
        />
      </div>
      <Controls
        goBack={goBack}
        next={next}
        start={start}
        end={end}
        disable={disableBtn}
      />
    </StepShell>
  );
};

export default PersonalInfo;
