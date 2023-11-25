import { Injectable, PipeTransform, UnprocessableEntityException } from "@nestjs/common";

export type ContentType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/jpg';

export  function  getMimeType(signature: string): ContentType | undefined {
    switch (signature) {
        case '89504E47':
            return 'image/png';
        case 'FFD8FFDB':
        case 'FFD8FFE0':
        case 'FFD8FFEE':
        case 'FFD8FFE1':
            return 'image/jpeg';
        case '47494638':
            return 'image/gif';
        default:
            return undefined;
    }
}

// @Injectable()
// export class FileTypePipe implements PipeTransform<Express.Multer.File, Express.Multer.File> {
//     constructor(private readonly contentTypes: ContentType[]) {}
//     transform(avatar: Express.Multer.File): Express.Multer.File {
//         console.log('avatar', avatar.buffer);
//         const VALID_EXTENSIONS = ['jpg', 'png', 'jpeg', 'gif'];
//         const fileExtensions = avatar.filename.split('.');
//         const lastFileExtension = fileExtensions[fileExtensions.length - 1];
//         if (!VALID_EXTENSIONS.includes(lastFileExtension)) {
//             throw new UnprocessableEntityException('Invalid file extension: ' + lastFileExtension);
//         }
//         const uintArray = new Uint8Array(avatar.buffer);
//         const bytes: string[] = [];
//         uintArray.forEach((uint) => bytes.push(uint.toString(16)));
        
//         const hex = bytes.join('').toUpperCase();
//         const mimeType: ContentType = getMimeType(hex.substring(0, 8));
//         if (!this.contentTypes.includes(mimeType)) {
//             throw new UnprocessableEntityException('Invalid file type:'+ mimeType);
//         }
//         return avatar;
//     }

// }





// import { Injectable, PipeTransform, UnprocessableEntityException } from "@nestjs/common";

// interface FileValidator<T, U> {
//   validationOptions: T;
//   isValid(file: U): boolean;
//   buildErrorMessage(file: U): string;
// }

// type ContentType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/jpg';

// const getMimeType = (signature: string): ContentType | undefined => {
//     switch (signature) {
//         case '89504E47':
//             return 'image/png';
//         case 'FFD8FFDB':
//         case 'FFD8FFE0':
//         case 'FFD8FFEE':
//         case 'FFD8FFE1':
//             return 'image/jpeg';
//         case '47494638':
//             return 'image/gif';
//         default:
//             return undefined;
//     }
// }

// @Injectable()
// export class FileTypePipe implements PipeTransform<Express.Multer.File, Express.Multer.File>, FileValidator<any, Express.Multer.File> {
//   validationOptions: any;

//   constructor(private readonly contentTypes: ContentType[]) {
//     // Set validation options if needed...
//     this.validationOptions = {};
//   }

//   isValid(file: Express.Multer.File): boolean {
//     const VALID_EXTENSIONS = ['jpg', 'png', 'jpeg', 'gif'];
//     const fileExtensions = file.originalname.split('.');
//     const lastFileExtension = fileExtensions[fileExtensions.length - 1].toLowerCase();

//     if (!VALID_EXTENSIONS.includes(lastFileExtension)) {
//         console.log(`the first one`);
//         return false;
//     }

    
//     console.log('file', file.buffer);
//     const uintArray = new Uint8Array(file.buffer);
//     const bytes: string[] = [];
//     uintArray.forEach((uint) => {
//         bytes.push(uint.toString(16))
//     });
    
//     const hex = bytes.join('').toUpperCase();
//     const mimeType: ContentType = getMimeType(hex.substring(0, 8));

//     if (!mimeType && !this.contentTypes.includes(mimeType))
//     {
//         console.log(`the last one`);
//         console.log('mimeType', mimeType);
//       return false;
//     }
//   }

//   buildErrorMessage(file: Express.Multer.File): string {
//     return 'Invalid file type or extension';
//   }

//   transform(file: Express.Multer.File): Express.Multer.File {
//     if (!this.isValid(file)) {
//       throw new UnprocessableEntityException(this.buildErrorMessage(file));
//     }
//     return file;
//   }
// }














