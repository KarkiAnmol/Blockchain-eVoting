const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    isCitizen:{type:Boolean,default:false},
    Name:{type:String,required:true},
    DateOfBirth:{type:Date,required:true},
    Citizenshipnumber:{type:Number,required:true},
    Address:[
        {
            PermanentAddress:{type:String,required:true},
            TemporaryAddress:{type:String,required:true},
        }
    ],
    ParentsName:[
      {
        FatherName:{type:String},
        MotherName:{type:String}
      }
    ],
    Education:{type:String,required:true},

    
    // Candidacy:[
    //     {
    //         candidateId:{type:String,required:true},

    //     }
    // ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", CandidateSchema);
