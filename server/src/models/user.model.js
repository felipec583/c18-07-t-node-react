import mongoose, { Types } from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, index: true, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: { type: String, required: false, default: "" },
  profilePic: { type: String, required: false, default: "https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png" },
  accountType: { type: String, required: true, default: "mail", enum:["mail", "google"] },
  library: [
    {
      // Para guardar libros (seria como un ver mas tarde)
      addedDate: { type: Date, default: Date.now, required: true },
      book: {
        type: Types.ObjectId,
        ref: "books",
        required: true,
      },
      status: {
        type: String,
        enum: ["to-read", "reading", "read"],
        default: "to-read",
      },
    },
  ],
  list: [
    {
      // lista de libros a crear por el usuario
      creationDate: { type: Date, default: Date.now, required: true },
      listname: { type: String, required: true },
      booklist: [
        {
          addedDate: { type: Date, default: Date.now, required: true },
          book: {
            type: Types.ObjectId,
            ref: "books",
            required: true,
          },
        },
      ],
    },
  ],
});

const User = mongoose.model("users", UserSchema);

export default User;
