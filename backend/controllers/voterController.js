const Voter = require("../model/voter");
registerVoter = async (req, res) => {
  console.log("registerVoter function called");

  const { passportNumber, name, dob } = req.body;
  console.log(
    `Received request to register voter with passport number: ${passportNumber}`
  );

  const voter = await Voter.findOne({
    passportNumber: passportNumber,
    name: name,
    dob: dob,
  });
  if (voter) {
    res.send({ verified: true });
  } else {
    res.send({ verified: false });
  }
};
module.exports = { registerVoter };
