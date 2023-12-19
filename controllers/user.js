// const User = require("../models/user");

// async function handleGetAllUsers(req, res) {
//   const allDbUsers = await User.find({});
//   return res.send(allDbUsers);
// }

// async function handleGetUserById(req, res) {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// }

// async function handleUpdateUserById(req, res) {
//   await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
//   return res.json(user);
// }
// async function handleDeleteUserById(req, res) {
//   await User.findByIdAndDelete(req.params.id);
//   return res.json({ status: "Success" });
// }

// async function handleCreateNewUser(req, res) {
//     const body = req.body;
//     // console.log("Body", body);
//     if (
//       !body ||
//       !body.first_name ||
//       !body.last_name ||
//       !body.email ||
//       !body.gender ||
//       !body.job_title
//     ) {
//       return res.status(400).json({ msg: "All fields are required" });
//     }
//     User.push({ ...body, id: User.length + 1 });
//     // try {
//     const result = await User.create({
//       firstName: body.first_name,
//       lastName: body.last_name,
//       email: body.email,
//       gender: body.gender,
//       jobTitle: body.job_title,
//     });
//     // } catch (error) {
//     //   console.error("Error creating user:", error);
//     //   return res.status(500).json({ msg: "Internal Server Error" });
//     // }

//     console.log("result: ", result);
//     return res.status(201).json({ msg: "success", id: result._id });
// }

// module.exports = {
//   handleGetAllUsers,
//   handleGetUserById,
//   handleUpdateUserById,
//   handleDeleteUserById,
//   handleCreateNewUser,
// };
const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.send(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { lastName: "changed" },
    { new: true }
  );
  return res.json(updatedUser);
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    console.log("result: ", result);
    return res.status(201).json({ msg: "success", id: result._id });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
