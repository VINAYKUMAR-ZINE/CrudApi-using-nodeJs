const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

//rest api ke point inse niche ha;

router.get("/", (req, res) => {
  return res.json(allDbUsers);
});

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
