 // styles/formStyles.ts
import React from "react";

export const inputClass = `
  w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900
  transition-all duration-200 placeholder:text-gray-400
  focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10
  focus:outline-none
`;

export const textareaClass = `${inputClass} resize-none`;

export const selectClass = `
  ${inputClass} appearance-none bg-white
  bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')]
  bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat
`;

export const buttonClass = `
  w-full rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/40 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-[0.98]
`;

export const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

 
 