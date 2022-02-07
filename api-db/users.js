const col = 'Users';

export async function getAll(db) {
  try {
    const response = await db.collection(col).find().toArray(); //res = [...posts]
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
