import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import recipes from "./data/recipes.js";
import User from "./models/userModel.js";
import Recipe from "./models/recipeModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Recipe.deleteMany();
    await User.deleteMany();

    const createUsers = await User.insertMany(users);

    const adminUser = createUsers[0]._id;

    const sampleRecipes = recipes.map((recipe) => {
      return { ...recipe, user: adminUser };
    });

    await Recipe.insertMany(sampleRecipes);

    console.log("data inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Recipe.deleteMany();
    await User.deleteMany();

    console.log("data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
