import { readFile, unlink } from 'fs';

export type ContentType =
  | 'image/jpeg'
  | 'image/png'
  | 'image/gif'
  | 'image/jpg';

export function getMimeType(signature: string): ContentType | undefined {
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

export async function getFileBuffer(filePath: string): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export async function deleteFile(filePath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
