//  conectam modulul pentru operare cu sistemul de fisiere
import { readFile } from "node:fs/promises";


let data = await readFile("./list.txt")
data = JSON.parse(data)

const parseList = () => {
//  let temp_1 = data.split(" ")
 console.log(data);
}

parseList()

// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = [];
const emails = [];

function loadContactsList() {}

function parseContactsList() {}

function printContactsPhoneList() {}

function printContactsEmailList() {}
