export const generateRandomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const generateRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * (window.innerWidth - 300)),
    y: Math.floor(Math.random() * (window.innerHeight - 300)),
  };
};
