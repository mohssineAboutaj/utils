module.exports = {
  source: {
    include: ["./README.md", "./src"],
    exclude: ["./node_modules"],
    includePattern: ".+\\.js(doc|x)?$",
    excludePattern: "(^|\\/|\\\\)_",
  },
  opts: {
    // same as -t templates/default
    template: "templates/default",
    // same as -e utf8
    encoding: "utf8",
    // same as -d ./docs/
    destination: "./docs/",
    // same as -r
    recurse: true,
  },
};
