import * as firebase from 'firebase';
import 'firebase/firestore';

const COLLECTION = 'items';
const itemsCollection = firebase.firestore().collection(COLLECTION);

type ListItem = {
  code: string;
  id: string;
  name: string;
  sector: string;
};

type Item<T = ListItem> = {
  [P in keyof T]: T[P];
} & {
  user: {
    name: string;
    registry: string;
  };
};

function list(): Promise<ListItem[]> {
  return new Promise((resolve, _) => {
    const docs: ListItem[] = [];

    itemsCollection.onSnapshot((snapshot) => {
      if (snapshot.empty) return resolve([]);

      snapshot.forEach((doc) => {
        const { id } = doc;
        const { code, name, sector } = doc.data();
        docs.push({ code, id, name, sector });
      });
      return resolve(docs);
    });
  });
}

function fetchOne(itemId: string): Promise<Item | null> {
  return new Promise((resolve, reject) => {
    itemsCollection
      .doc(itemId)
      .get()
      .then((doc) => {
        if (!doc.exists) return resolve(null);
        return resolve({ ...doc.data(), id: doc.id } as Item);
      })
      .catch(reject);
  });
}

function create(payload: Partial<Item>) {
  try {
    const ref = itemsCollection.doc();
    return new Promise((resolve, _) => {
      const created = ref.set(payload);
      resolve({ ...created, id: ref.id });
    });
  } catch (ex) {
    return Promise.reject(ex);
  }
}

async function remove(itemId: string) {
  try {
    const ref = itemsCollection.doc(itemId);
    return ref.get().then(async (doc) => {
      if (!doc.exists) return false;

      await ref.delete();
      return true;
    });
  } catch (ex) {
    return Promise.reject(ex);
  }
}

async function update(itemId: string, payload: Partial<Item>) {
  try {
    const ref = itemsCollection.doc(itemId);
    return ref.get().then(async (doc) => {
      if (!doc.exists) return null;

      await ref.set({ ...doc.data, ...payload });
      return { ...doc.data, ...payload };
    });
  } catch (ex) {
    return Promise.reject(ex);
  }
}

export default { list, fetchOne, create, remove, update };
