import path from "node:path";
import { v4 as uuidV4 } from "uuid";
import { Text,NewText } from "../types";
import { serialize,parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "../data/text.json");



const defaultTexts: Text[] = [
    {
      id: "967979ee-4c4b-4f93-920b-115976fa4abb",
      content: "Hello, world!",
      level: "easy",
    },
    {
      id: "98c72e0e-db05-442a-b035-061f56f7e7f8",
      content: "This is a text.",
      level: "medium",
    },
    {
      id: "45a3397c-d9bd-440b-8099-4346a38d1428",
      content: "This is a longer text.",
      level: "hard",
    },
  ];
    
const readAll = () => {
    const texts =parse(jsonDbPath,defaultTexts);
    return {texts:texts};
};


  const readAllFiltred=(level:string |undefined = undefined) => {
    const texts =parse(jsonDbPath,defaultTexts);
    return level ? texts.filter((text)=> text.level === level):level;
  };

  const readOne=(id:string):Text|undefined=>{
    const texts = parse(jsonDbPath,defaultTexts);
    return texts.find((text)=> text.id === id);
  };

  const createOne=(NewText:NewText) :Text |undefined=> {
    const id = uuidV4();
    const text:Text = {
      id,
     ...NewText,
    };
    const texts = parse(jsonDbPath,defaultTexts);
    texts.push(text);
    serialize(jsonDbPath,texts);
    return text;
  };

  const deleteOne=(id:string) :Text |undefined => {
    const texts = parse(jsonDbPath,defaultTexts);
    const index = texts.findIndex((text) => text.id === id);
   
    if (index === -1) {
        return undefined;
      }
    const deletedText = texts.splice(index, 1);
    serialize(jsonDbPath, texts);
    return deletedText[0];
  };                

  const updateOne=(id:string):Text|undefined =>{
    const texts = parse(jsonDbPath,defaultTexts);
    const index = texts.findIndex((text) => text.id === id);
   
    if (index === -1) {
      return undefined;
    }
        texts[index]={...texts[index],...updateOne};
        serialize(jsonDbPath,texts);
        return texts[index];
    

  };
  



  export {readAllFiltred,readOne,readAll,createOne,deleteOne,updateOne};

