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
    return response;
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
          project: data.project,
          category: data.category,
          description: data.description,
          url: data.url,
          createdBy: data.createdBy,
          drawingType: data.drawingType,
          stage: data.stage,
          stageType: data.stageType,
          tags: data.tags,
          alt: data.alt,
        },
      },
      { returnDocument: 'after' },
    ); //res = {?}
    return value;
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndDelete(db, id) {
  try {
    const { value } = await db
      .collection(col)
      .findOneAndDelete({ _id: new ObjectId(id) }); //res = {?}
    return value;
  } catch (error) {
    console.log(error);
  }
}
