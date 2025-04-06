// cloudinary connection to store files and images in cloudinary
import { v2 as cloudinary } from "cloudinary"; //importing cloudinary from cloudinary package
function connectCloudinary() {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, //cloudinary cloud name store in .env file
    api_key: process.env.CLOUDINARY_API_KEY, //cloudinary api key store in .env file
    api_secret: process.env.CLOUDINARY_API_SECRET, //cloudinary api secret store in .env file
  });
}

 
export default connectCloudinary //exporting connectCloudinary function to use in other files