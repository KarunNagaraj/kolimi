// app/mainStyles.ts

// app/mainStyles.ts

export const cta = {
  contactOwner: `
    fixed top-4 right-4 z-50
    bg-indigo-600 text-white
    text-sm sm:text-base
    px-4 sm:px-5 py-2.5 sm:py-3
    rounded-xl font-semibold
    shadow-xl ring-2 ring-indigo-300
    hover:bg-indigo-700 hover:scale-105
    transition-all
  `,
};

export const layout = {
  page: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8",
  container: "mx-auto max-w-3xl",
};

export const card = {
  base: "bg-white rounded-2xl shadow-xl border border-gray-100",
  padded: "p-8",
  imageWrapper: "bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8",
};

export const typography = {
  h1: "text-4xl font-bold text-gray-900 tracking-tight",
  h2: "text-xl font-bold text-gray-900 tracking-tight",
  body: "text-lg text-gray-700 leading-relaxed",
  label: "font-semibold text-gray-900",
  value: "text-gray-600",
  link: "text-indigo-600 font-medium hover:underline",
};

export const featureCard = {
  wrapper: "flex items-center p-4 rounded-xl",
  iconWrapper: "flex-shrink-0 w-12 h-12  bg-indigo-600 rounded-lg flex items-center justify-center mr-4",
  label: "text-sm font-medium text-gray-600",
  value: "text-2xl font-bold text-gray-900",
  textOnly: "font-medium text-gray-800",
};

export const grid = {
  features: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4",
  details: "grid grid-cols-1 sm:grid-cols-2 gap-4",
};

export const section = {
  borderedLeft: "border-l-4 border-indigo-600 pl-4 mb-6",
  mutedBox: "mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200",
};

export const buttons = {
  primary:
    "inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition",
};

export const icons = {
  detail:
    "w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0",
};
