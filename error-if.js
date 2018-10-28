var library = require("module-library")(require)

module.exports = library.export(
  "error-if",
  function generateSingleton() {

    return {
      regexNotFound: regexNotFound,
      notOnEnoughLines: notOnEnoughLines,
    }

    function notOnEnoughLines(string, search, minimum) {
      var count = 0
      string.split("/n").forEach(function(line) {
        if (line.match(search)) {
          count++
        }
      })
      if (count < minimum) {
        throw new Error("Expected string "+summarize(string)+" to match "+search+" at least "+minimum+" times")
      }
    }

    function replaceAll(string, search, replacement) {
        return string.replace(new RegExp(search, 'g'), replacement);
    }

    function summarize(string) {
      var summary = string.trim().slice(0,500)

      summary = replaceAll(summary, /\n/,"\\n")

      summary = replaceAll(summary, /\s+/, " ")

      if (string.length > 100) {
        return "<<<\n"+summary+"....\n>>>"
      } else {
        return "<<<"+summary+">>>"
      }
    }

    function regexNotFound(string, search) {
      if (!string.match(search)) {
        throw new Error("Expected string "+summarize(string)+" to match "+search)
      }
    }
  })