import multer from "multer";



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/resumePDF");
    },
    filename:(req,file,cb)=>{
        const fileName= Date.now()+"-"+file.originalname;
        cb(null,fileName);
    }
});

export const upload=multer(
    {
        storage:storage
    }
);