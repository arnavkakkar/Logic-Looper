import { openDB } from "idb";

export const dbPromise = openDB("logic-looper", 1, {
  upgrade(db) {
    db.createObjectStore("progress");
  },
});