import database from "../database-service";

export const addUserToDatabase = async (
  type: string,
  src: string,
  alt: string
) => {
  await (await database()).collection("user").insertOne({
    type: type,
    sponsor: [
      {
        src: src,
        alt: alt,
      },
    ],
  });
};

export const getUser = async (user_type: string) => {
  const user = await (await database())
    .collection("user")
    .findOne({ type: user_type });
  if (!user) throw { code: 404, message: "User not found" };
  return user;
};

export const getUsers = async () => {
  return await (await database()).collection("user").find().toArray();
};

export const deleteUser = async (_id: string) => {
  await (await database()).collection("user").findOneAndDelete({ _id: _id });
};

export const deleteSpon = async (_id: string) => {
  await (await database()).collection("user").findOneAndDelete({ _id: _id });
};

// export const increaseUserAge = async (user_type: string) => {
//   await (await database())
//     .collection("user")
//     .updateOne({ type: user_type }, { $inc: { age: 1 } });
// };

// export const updateUserPassword = async (
//   user_type: string,
//   user_password: string
// ) => {
//   await (await database())
//     .collection("user")
//     .updateOne({ type: user_type }, { $set: { password: user_password } });
// };

export const updateSponsor = async (
  user_type: string,
  src: string,
  alt: string
) => {
  await (await database()).collection("user").updateOne(
    { type: user_type },
    {
      $push: {
        sponsor: {
          src: src,
          alt: alt,
        },
      },
    }
  );
};
