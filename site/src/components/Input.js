import React from "react";

const Input = ({ ...rest }) => {
  return (
    <>
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          {...rest}
          class="peer block min-h-[auto] w-full  border-b bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none  "
        />
        <label class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%]  dark:text-neutral-200 dark:peer-focus:text-primary"></label>
      </div>
    </>
  );
};

export default Input;
