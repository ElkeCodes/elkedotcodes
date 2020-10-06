const { src, dest, series } = require("gulp");
const del = require("del");

function cleanPresentations() {
  return del(["dist/presentations"]);
}

function copyPresentations() {
  return src("../presentations/**/*").pipe(dest("dist/presentations"));
}

exports.default = series(cleanPresentations, copyPresentations);
