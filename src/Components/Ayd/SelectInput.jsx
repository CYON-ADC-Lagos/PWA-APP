"use client";

import React from "react";
import Controls from "./Controls";
import { SelectField } from "./FormField";
import StepShell from "./StepShell";

const SelectInput = ({
  loading,
  error,
  onRetry,
  requestData,
  name,
  label,
  placeholder,
  goBack,
  next,
  onChange,
  disable,
  start,
  end,
  activeStep,
  setStep,
  list,
  type,
}) => {
  const options = Array.isArray(list) ? list : [];
  const isEmpty = !loading && !error && options.length === 0;
  const hasData = options.length > 0;
  const selectDisabled = loading || !!error || isEmpty;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (activeStep < 6 && !disable) return setStep(activeStep + 1);
    }
  };

  const lower = type.toLowerCase();
  const placeholderText = loading
    ? `Loading ${lower}s…`
    : error
    ? `Unable to load ${lower}s`
    : isEmpty
    ? `No ${lower}s available`
    : placeholder;

  const hint = isEmpty && !error
    ? type === "Parish"
      ? "No eligible parishes for this deanery yet. Please pick another deanery or try again later."
      : `No ${lower}s have been added yet. Please check back shortly.`
    : undefined;

  return (
    <StepShell
      eyebrow={type === "Deanery" ? "Step one" : "Step two"}
      title={label}
      subtitle={
        type === "Deanery"
          ? "Choose the deanery you are registering under."
          : "Pick the parish you belong to within the deanery."
      }
    >
      <SelectField
        label={`${type} name`}
        required
        name={name}
        value={requestData[name] || ""}
        onChange={onChange}
        onKeyDown={handleKeyPress}
        disabled={selectDisabled}
        error={error || undefined}
        hint={hint}
        aria-busy={loading || undefined}
      >
        <option value="">{placeholderText}</option>
        {hasData &&
          options.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item?.name}
            </option>
          ))}
      </SelectField>

      {error && typeof onRetry === "function" && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 self-start text-xs font-semibold text-primary hover:underline disabled:opacity-60"
          disabled={loading}
        >
          Retry
        </button>
      )}

      <Controls
        goBack={goBack}
        next={next}
        start={start}
        end={end}
        disable={disable || selectDisabled}
      />
    </StepShell>
  );
};

export default SelectInput;
