import { ObjectId } from 'mongodb';

const col = 'PlanningApp';

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
          owners: data.owners,
          users: data.users,

          title: data.title,
          category: data.category,
          body: data.body,

          deadline: data.deadline,
          startTime: data.startTime,

          stages: data.stages,
        },
      },
      { returnDocument: 'after' },
    );
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
