const fs = require("fs")
const { Location, ReturnType, CodeLanguage } = require("@chainlink/functions-toolkit")

// configures request: via settings in the fields below
const requestConfig = {

    // source code location (inline only)
    codeLocation: Location.Inline,
    
    // (optional) if secrets are expected in the sourceLocation of secrets (only Remote or DONHosted is supported)
    secretsLocation: Location.DONHosted,
    
    // source code to be executed
    source: fs.readFileSync("./ai-request.js").toString(),

    // (optional) accessed within the source code with `secrets.varName` (ie: secrets.apiKey), must be a string.
    secrets: { 
        openaiAPIKey: process.env.OPENAI_API_KEY,
        etherscanAPIKey: process.env.ETHERSCAN_API_KEY
    },

    // args (array[""]): source code accesses via `args[index]`.
    args: [
        "0xF7311E490ddd360DDA12Faa122a2Ab4bDbe0528f",    // contractAddress [0]
    ],

    // code language (JavaScript only)
    codeLanguage: CodeLanguage.JavaScript,

    // shows: expected type of the returned value.
    expectedReturnType: ReturnType.string,
}

module.exports = requestConfig