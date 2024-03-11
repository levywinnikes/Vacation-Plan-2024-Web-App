import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "vacations-plan-2024",
      storage,
      whitelist: ["vacations"],
    },
    reducers
  );

  return persistedReducer;
};
