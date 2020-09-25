const cloudinary = require("cloudinary").v2; // Don't forget the .v2 !
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configure cloudinary to connect to your cloudinary account.
cloudinary.config({
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sneaker-pics",
    //allowedFormats: ["jpg", "png"], // Specify the allowed formats for your uploaded files
    format: async (req, file) => {
      // Format your file into jpeg/png etc...
      // async code using `req` and `file`
      // ...
      return "jpeg";
    },
    // format: "jpeg", // supports promises as well
    // public_id: (req, file) => "computed-filename-using-request",
  },
});

const uploader = multer({ storage: storage });

module.exports = uploader;
