import { ObjectId } from 'mongodb';

const col = 'Gallery';

export async function getAll(db) {
  try {
    const response = await db.collection(col).find().toArray(); //res = [...mediaPosts]
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function postOne(db, formData) {
  try {
    const response = await db.collection(col).insertOne(formData); //res = {acknowledged = true, insertedId: "objectId"}
    return { ...formData };
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndUpdate(db, id, data) {
  try {
    const { value } = await db.collection(col).findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: data.title,
          alt: data.alt,

          project: data.project,
          category: data.category,
          tags: data.tags,

          createdAt: new Date(),
          createdBy: data.createdBy,
        },
      },
      { returnDocument: 'after' },
    );
    return value;
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndDelete(db, id, cloudId) {
  try {
    const { value } = await db
      .collection(col)
      .findOneAndDelete({ _id: new ObjectId(id) }); //res = {?}
    return value;
  } catch (error) {
    console.log(error);
  }
}

export async function getShowcase(db) {
  try {
    const value = await db.collection(col).find({ project: 'cv' }).toArray();

    return value;
  } catch (error) {
    console.log(error);
  }
}
