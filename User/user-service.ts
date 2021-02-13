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

export const deleteUser = async (_id: string) => {
  await (await database()).collection("user").findOneAndDelete({ _id: _id });
};

export const setUserAge = async (user_email: string) => {
  await (await database())
    .collection("user")
    .updateOne({ email: user_email }, { $set: { age: 125 } });
};

export const updateUserPassword = async (
  user_email: string,
  user_password: string
) => {
  await (await database())
    .collection("user")
    .updateOne({ email: user_email }, { $set: { password: user_password } });
};
