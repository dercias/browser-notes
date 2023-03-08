export const checkIfImageExists = (imageUrl: string): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = imageUrl;

    if (img.complete) {
      resolve(true);
    } else {
      img.onload = () => {
        resolve(true);
      };

      img.onerror = () => {
        resolve(false);
      };
    }
  });
};
