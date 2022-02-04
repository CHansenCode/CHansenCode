import { ObjectId } from 'mongodb';

const col = 'cv';

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
  console.log(data.richTextOne);
  try {
    const { value } = await db.collection(col).findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          whom: data.whom,
          company: data.company,
          urlParam: data.urlParam,
          deadline: data.deadline,
          publishedAt: data.publishedAt,
          nameOfHandler: data.nameOfHandler,
          published: data.published,
          richTextOne: data.richTextOne,
          richTextTwo: data.richTextTwo,
          richTextThree: data.richTextThree,
          richTextFour: data.richTextFour,
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
