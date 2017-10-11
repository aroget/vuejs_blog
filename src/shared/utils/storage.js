const storage = localStorage;

const appStorage = {
  set: (key, value) => {
    storage.setItem(key, value);
  },

  clear: () => storage.clear(),

  get: key => storage.getItem(key),
};

export default appStorage;
