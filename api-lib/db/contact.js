import { ObjectId } from 'mongodb';

const col = 'contactForm';

export async function getAll(db) {
  try {
    const response = await db.collection(col).find().toArray();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postOne(db, formData) {
  formData = {
    ...formData,
    createdAt: new Date(),
  };
  try {
    const response = await db.collection(col).insertOne(formData);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function findByIdAndDelete(db, id) {
  try {
    const { value } = await db
      .collection(col)
      .findOneAndDelete({ _id: new ObjectId(id) });
    return value;
  } catch (error) {
    console.log(error);
  }
}
