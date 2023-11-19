import { Transform } from "class-transformer";
import { IsString } from "class-validator";
import { TransformFnParams } from "class-transformer";
import * as sanitizeHtml from "sanitize-html";

export class TwoFAPinDTO {
  @IsString()
  @Transform((params: TransformFnParams) => sanitizeHtml(params.value))
  pin: string;
}
