import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const useStorage = <Value>(
  key: string,
  initialValue: Value
): Writable<Value> => {
  let serialize = JSON.stringify;
  let deserialize = JSON.parse;

  let storedValues: Value = deserialize(localStorage.getItem(key));

  let store = writable(storedValues ? storedValues : initialValue);
  store.subscribe((value) => localStorage.setItem(key, serialize(value)));
  return store;
};
