"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_1 = __importDefault(require("./router/food"));
var user_1 = __importDefault(require("./router/user"));
var order_1 = __importDefault(require("./router/order"));
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"],
}));
app.get("/", function (req, res) {
    res.send("Welcome To Foodmine API");
});
app.use("/api/foods", food_1.default);
app.use("/api/users", user_1.default);
app.use("/api/orders", order_1.default);
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
var port = 8000;
app.listen(port, function () {
    console.log("Server Running on port ".concat(port));
});
