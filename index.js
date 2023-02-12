const OpenAI  = require('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000 ;

const configuration = new Configuration({
    organization: "org-mlory9r3o2GuGHhEkBAY4nJb",
    apiKey: "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" ,
});

const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `give me the best pc gaming build for ${message} dollars` ,
            max_tokens: 170 ,
            temperature: 1,
          });
          console.log(response.data);
      if (response.data.choices[0].text){
        res.json({message: response.data.choices[0].text });
      }
});

    app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
    });
    