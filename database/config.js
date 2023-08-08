const mongoose = require("mongoose");

const dbConnection = async () => {
  //*below there's another way to handle the promise's answer. NO NEEDED THE TRY-CATCH BLOCK, NOR THE ASYNC FUNCTION
  //   mongoose
  //     .connect(process.env.MONGODB_ATLAS, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //       useCreateIndex: true,
  //     })
  //     .then(() => {
  //       console.log("DB online");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw new Error("Error al iniciar la base de datos");
  //     });

  //*Below there's another way to handle the promise's answer. NO NEEDED THE TRY-CATCH BLOCK, NOR THE ASYNC FUNCTION
  //   mongoose
  //     .connect(process.env.MONGODB_ATLAS, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //       //   useCreateIndex: true,
  //     })
  //     .then(
  //       () => {
  //         console.log("DB Online");
  //       },
  //       (err) => {
  //         console.log("Error when connecting to db: ", err);
  //       }
  //     );

  //*Below is a way to handle async functions, with a try-catch block. REQUIRES ITS PARENT FUNCTION TO BE ASYNC.
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    });
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};
