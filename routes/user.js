const express = require("express");
const router = express.Router();
const {handleGetuser} = require('../controllers/user')

router.get("/",handleGetuser);
router.get("/:id", async (req, res) => {
  const userfound = await user.findById(req.params.id);
  // const uid = Number(req.params.id);
  // const user = users.find((user) => user.id === uid);
  return res.status(200).json(userfound);
});
router
  .route("/")
  .get((req, res) => {
    const uid = Number(req.params.id);
    const user = users.find((user) => user.id === uid);
    return res.status(201).json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .post(async (req, res) => {
    try {
      const { firstName, lastName, email, gender } = req.body;
      if (!firstName || !lastName) {
        return res.status(400).json({ error: "all fields are mandatory" });
      }
      const result = await user.create({
        firstName,
        lastName,
        email,
        gender,
      });
      console.log(result);
      return res.status(201).json({ msg: "suceesed" });
    } catch (error) {
      console.error("user creaetion failed", error.message);
      return res.status(500).json({ error: "internal server error" });
    }
  });

module.exports = router;
