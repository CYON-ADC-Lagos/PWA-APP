"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const baseField =
  "peer w-full rounded-xl bg-white/[0.04] text-ink placeholder:text-ink-subtle " +
  "border border-line px-4 py-3.5 text-base transition-all duration-200 " +
  "focus:outline-none focus:border-primary focus:bg-white/[0.08] " +
  "hover:border-line-strong disabled:opacity-60 disabled:cursor-not-allowed";

const errorField = "border-danger/80 focus:border-danger";

const FormField = ({
  label,
  required,
  error,
  hint,
  children,
  className = "",
  focused,
}) => {
  return (
    <div className={`relative flex flex-col gap-1.5 ${className}`}>
      <label className="flex items-center gap-1 text-xs font-medium text-ink-muted tracking-wide uppercase">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <div className="relative">
        {children}
        <AnimatePresence>
          {focused && !error && (
            <motion.span
              aria-hidden
              layoutId="input-focus-ring"
              className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-primary/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {error ? (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.22 }}
            className="flex items-center gap-1.5 text-xs text-danger mt-0.5"
          >
            <svg
              className="h-3.5 w-3.5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </motion.span>
        ) : hint ? (
          <motion.span
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-ink-subtle mt-0.5"
          >
            {hint}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export const TextField = ({
  label,
  required,
  error,
  hint,
  className,
  onFocus,
  onBlur,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <FormField
      label={label}
      required={required}
      error={error}
      hint={hint}
      className={className}
      focused={focused}
    >
      <input
        {...inputProps}
        onFocus={(e) => {
          setFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        className={`${baseField} ${error ? errorField : ""}`}
      />
    </FormField>
  );
};

export const SelectField = ({
  label,
  required,
  error,
  hint,
  className,
  children,
  onFocus,
  onBlur,
  ...selectProps
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <FormField
      label={label}
      required={required}
      error={error}
      hint={hint}
      className={className}
      focused={focused}
    >
      <div className="relative">
        <select
          {...selectProps}
          onFocus={(e) => {
            setFocused(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          className={`${baseField} appearance-none pr-11 cursor-pointer ${
            error ? errorField : ""
          }`}
        >
          {children}
        </select>
        <motion.svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          animate={{ rotate: focused ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </motion.svg>
      </div>
    </FormField>
  );
};

export default FormField;
