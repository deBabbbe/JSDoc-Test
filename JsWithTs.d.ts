export type API = {
  utilities: {
    setError: (errorText: string) => void;
  };
  exportActions: {
    moveToFolder: (folderName: string) => Promise<void>;
    deleteMail: () => void;
  };
  userInfo: {
    name: string;
  };
};

export type Fields = {
  [name: string]: string;
};
