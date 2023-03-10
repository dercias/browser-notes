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

export const getBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Invalid image'));
      }
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};
