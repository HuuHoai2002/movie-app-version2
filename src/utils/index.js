export const handleSetTitle = (title, isHome = false) => {
  document.title = `${title} ${isHome ? "" : " | Tv360"}`;
};

export const getLastName = (name = "") => {
  return name.split(" ")[name.split(" ").length - 1];
};
