import store from "../store/rootStore";

export type RootState = ReturnType<typeof store.getState>;
