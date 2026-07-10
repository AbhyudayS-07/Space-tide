// 1. Select the HTML elements
const input = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

// 2. Define the translation dictionary mapping
const dictionary = {
    "i": "me",
    "you": "tu",
    "we": "mip",
    "they": "tip",
    "yes": "aa",
    "no": "na",
    "hello": "hec",
    "good": "gutte",
    "day": "sune",
    "night": "nune",
    "be": "be",
    "have": "hab",
    "do": "du",
    "go": "ga",
    "get": "kri",
    "say": "se",
    "it": "hi",
    "he": "hi",
    "she":"hi",
    "my": "mir",
    "his": "tir",
    "her": "tir",
    "their": "tipir",
    "this": "thee",
    "that": "thee",
    "what": "wat",
    "who": "wam",
    "and": "ad",
    "or": "or",
    "but": "bat",
    "if": "if",
    "not": "na",
    "in": "in",
    "on": "on",
    "with": "wit",
    "from": "fro",
    "to": "to",
    "of": "of",
    "all": "ip",
    "one": "un",
    "there": "tre",
    "so": "so",
    "will": "il",
    "was" : "el",
    "water": "driker",
    "sea": "briker",
    "ocean": "briker",
    "star": "sunt",
    "moon": "mun",
    "sun": "sun",
    "sky": "skey",
    "wind": "wid",
    "light": "suni",
    "dark": "nasuni",
    "friend": "mat",
    "home": "livet",
    "love": "lof",
    "music": "muzik",
    "dream": "drim",
    "walk": "gage",
    "travel": "bage",
    "see": "sie",
    "know": "kno",
    "live": "liv",
    "today": "now",
    "tomorrow": "noil",
    "yesterday": "noel",
    "time": "tem",
    "path": "way",
    "ship": "brot",
    "boat": "rot",
    "river": "mriker",
    "song": "muzi",
    "heart": "lif",
    "happy": "liff",
    "sad": "naliff",
    "big": "bi",
    "small": "nabi",
    "fast": "fas",
    "slow": "nafas",
    "beautiful": "lifve",
    "world": "biet",
    "person": "peson",
    "name": "nam",
    "man": "peson",
    "woman": "peson",
    "child": "sion",
    "family": "lofson",
    "people": "bipeson",
    "food": "faad",
    "eat": "fad",
    "drink": "drikad",
    "rest": "res",
    "work": "nares",
    "room": "liveta",
    "door": "door",
    "road": "gaget",
    "city": "miet"
};

// 3. Setup the event listener for the click action
submitBtn.addEventListener('click', () => {
    // Read text from the text field and lowercase it to match the dictionary keys
    const textValue = input.value.toLowerCase(); 
    
    // If the input is completely empty, clear output and do nothing
    if (!textValue.trim()) {
        output.textContent = "";
        return;
    }

    // Create a safe regex pattern using dictionary keys wrapped in word boundaries (\b)
    // This ensures "cat" matches but "cattle" does not get broken up.
    const pattern = new RegExp(`\\b(${Object.keys(dictionary).join("|")})\\b`, "g");
    
    // Execute the substitution loop
    const translated = textValue.replace(pattern, matched => dictionary[matched]);

    // Print the final string to the UI screen area
    output.textContent = translated;
});
