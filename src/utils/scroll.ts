export const ScrollSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
