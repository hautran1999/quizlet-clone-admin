import app from "./firebase";
import {
  getUserByUid,
  updateUser,
  getUsers,
  hiddenFlashcardByUser,
  updateFlashcardAllUser,
} from "./users";

const flashcardsRef = app.firestore().collection("flashcards");

export const createFlashcard = async (data) => {
  await flashcardsRef.doc(data.id).set(data);
  const user = await getUserByUid(data.author.uid);
  await updateUser(data.author.uid, {
    created: [
      ...user.created,
      {
        id: data.id,
        title: data.title,
        description: data.description,
        total: data.cards.length,
      },
    ],
  });
};

export const getFlashcards = async () => {
  let data = [];
  const snapshot = await flashcardsRef.get();
  snapshot.docs.map((doc) => {
    data.push(doc.data());
  });
  return data;
};

export const getFlashcardById = async (id) => {
  const doc = await flashcardsRef.doc(id).get();
  const data = doc.data();
  return data;
};

export const updateFlashcard = async (id, data) => {
  await flashcardsRef.doc(id).update(data);
  const users = await getUsers();
  for (const user of users) {
    await updateFlashcardAllUser(user, id, data);
  }
};

export const deleteFlashcard = async (id) => {
  await flashcardsRef.doc(id).delete();
  const users = await getUsers();
  for (const user of users) {
    await hiddenFlashcardByUser(user, id);
  }
};
