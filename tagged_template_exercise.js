function upper(strings, ...values) {
    var result = "";
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            result += String(values[i - 1]).toUpperCase();
        }
        result += strings[i];
    }
    return result;
}

var name = "armaan",
    twitter = "amk",
    topic = "js recent parts";

console.log(
    upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello ARMAAN (@AMK), welcome to JS RECENT PARTS!"
);