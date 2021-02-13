import database from "../database-service";

export const addUserToDatabase = async (
  email: string,
  password: string,
  age: number
) => {
  await (await database())
    .collection("user")
    .insertOne({ email: email, password: password, age: age });
};

export const getUser = async (user_email: string) => {
  const user = await (await database())
    .collection("user")
    .findOne({ email: user_email });
  if (!user) throw { code: 404, message: "User not found" };
  return user;
};

export const getUsers = async () => {
  return await (await database()).collection("user").find().toArray();
};

export const deleteUsers = async (_id: string) => {
  await (await database()).collection("user").findOneAndDelete({ _id: _id });
};

export const updateUserAge = async (_id: string) => {
  await (await database())
    .collection("user")
    .updateOne({ _id: _id }, { $set: { age: 125 } });
};
