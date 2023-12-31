/**
 * 任務：實作一個函式 `createDataStore`，該函式會建立一個資料儲存庫，該儲存庫有兩個方法：add 和 getAll。
 * add 方法用於添加新的項目到儲存庫，getAll 方法用於獲取儲存庫中的所有資料。
 *
 * 範例：
 * const store = createDataStore<number>();
 * store.add(1);
 * store.add(2);
 * store.getAll() 應該回傳 [1, 2]
 *
 * @returns - 回傳一個物件，該物件有 add 和 getAll 兩個方法
 */
export function createDataStore<T>() {
  let data: T[] = [];

  const add = (item: T) => {
    data = [...data, item];
  };

  const getAll = () => data;

  return { add, getAll };
}
