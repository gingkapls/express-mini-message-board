const formatter = new Intl.DateTimeFormat("en", {
    dateStyle: "short",
    timeStyle: "short",
})

const formatDate = formatter.format;

module.exports = formatDate;