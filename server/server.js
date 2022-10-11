if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const cors = require('cors')

// Set The Template Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

app.use(methodOverride("_method"));
app.use(cookieParser());

app.use(express.static("public"));
app.use(express.static("frontend"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());

// app.use(express.json()) // for json
//   app.use(express.urlencoded({ extended: true })) // for form data
app.use(cors())


// ROUTERS
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const shoppingCardRouter = require("./routes/shoppingCard");
const aboutRouter = require("./routes/about");
const madeToFadeRouter = require("./routes/madeToFade");
const communityRouter = require("./routes/community");
const shopRouter = require("./routes/shop");
const authRouter = require('./routes/auth')
const guaranteeRouter = require('./routes/guarantee');
const shippingRouter = require('./routes/shipping');
const contactsRouter = require('./routes/contacts');
const blogRouter = require('./routes/blog');

// Setup Database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () =>
  console.log(`Connecting To ${process.env.DATABASE_URL} DB `)
);

// Handel Routers
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/shopping", shoppingCardRouter);
app.use("/about", aboutRouter);
app.use("/made-to-fade", madeToFadeRouter);
app.use("/community", communityRouter);
app.use("/shop", shopRouter);
app.use('/auth', authRouter)
app.use('/guarantee', guaranteeRouter);
app.use('/shipping', shippingRouter);
app.use('/contacts', contactsRouter);
app.use('/blog', blogRouter);
app.use("*", (req, res) => res.send("There's No Route"));

app.listen(process.env.PORT || 5000, () => console.log(`Server Running...`));
