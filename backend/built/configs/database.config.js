"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)("mongodb+srv://bhanupratapdev02:Sachin0211@cluster0.bmv8ln5.mongodb.net/foodmine?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(function () { return console.log("Connected to Mongodb"); })
        .catch(function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
