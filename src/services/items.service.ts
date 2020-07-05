import * as firebase from 'firebase';
import 'firebase/firestore';

const COLLECTION = 'items';

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

    firebase
      .firestore()
      .collection(COLLECTION)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const { id } = doc;
          const { code, name, sector } = doc.data();
          docs.push({ code, id, name, sector });
        });
        resolve(docs);
      });
  });
}

async function fetchOne(itemId: string): Promise<Item> {
  return new Promise((resolve, _) => {
    firebase
      .firestore()
      .collection(COLLECTION)
      .doc(itemId)
      .onSnapshot((snapshot) =>
        resolve({ ...snapshot.data(), id: snapshot.id } as Item),
      );
  });
}

export default { list, fetchOne };
