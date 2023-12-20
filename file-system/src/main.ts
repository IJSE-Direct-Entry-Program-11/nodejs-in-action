import * as fs from 'node:fs/promises';
import path from "node:path";

// console.log(process.cwd());
// await createNewDir();
// await deleteDir();
// await createNewFile();
// await readImageFile();
await readTextFile();

async function readTextFile(){
    const filePath = path.resolve(process.cwd(), "package.json");
    const file = await fs.open(filePath);
    const is = file.createReadStream({encoding: 'utf8'});
    for await (const data of is){
        console.log(data);
    }
    // is.on('readable', ()=>{
    //     console.log(is.read(1024));
    // });
}

async function readImageFile(){
    const filePath = path.resolve(process.cwd(), "image.jpg");
    const file = await fs.open(filePath);
    const is = file.createReadStream();
    is.on('readable', ()=>{
        console.log(is.read(1024));
    });
}

async function createNewFile(){
    const filePath = path.resolve(process.cwd(), "something.txt");
    const file = await fs.open(filePath, 'a');
    const os = file.createWriteStream({encoding: 'utf8'});
    os.write("Hello");
    os.end();
}

async function createNewDir(){
    try {
        await fs.mkdir("/home/ranjith-suranga/Desktop/dep-11");
        console.log("Directory is created!");
    }catch (e){
        if (e.code === 'EEXIST') console.log("Directory already exists");
    }
}

async function deleteDir(){
    await fs.rmdir("/home/ranjith-suranga/Desktop/dep-11");
    console.log("Directory is deleted");
}

