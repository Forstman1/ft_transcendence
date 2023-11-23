import { Injectable, PipeTransform, UnprocessableEntityException } from "@nestjs/common";

type ContentType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/jpg';

const getMimeType = (signature: string): string | undefined => {
    
}


@Injectable()
export class FileTypePipe implements PipeTransform<Express.Multer.File, Express.Multer.File> {
    constructor(private readonly contentTypes: ContentType[]) {}
    transform(file: Express.Multer.File): Express.Multer.File {
        const VALID_EXTENSIONS = ['jpg', 'png', 'jpeg', 'gif'];
        const fileExtensions = file.filename.split('.');
        const lastFileExtension = fileExtensions[fileExtensions.length - 1];
        if (!VALID_EXTENSIONS.includes(lastFileExtension)) {
            throw new UnprocessableEntityException('Invalid file extension: ' + lastFileExtension);
    }

}