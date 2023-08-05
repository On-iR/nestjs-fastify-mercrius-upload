import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { ReadStream } from 'fs';

interface PluginValue {
  file: {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => ReadStream;
  };
}

export interface UploadFile {
  fileName: string;
  mimeType: string;
  encoding: string;
  readStream: ReadStream;
}

@Scalar('Upload')
export class UploadScalar implements CustomScalar<any, UploadFile> {
  description = 'ファイルアップロードで使用するスカラです。';

  parseValue(value: PluginValue): UploadFile {
    const { filename, mimetype, encoding, createReadStream } = value.file;
    const readStream = createReadStream();
    return { fileName: filename, mimeType: mimetype, encoding, readStream };
  }

  parseLiteral(value: any): UploadFile {
    throw new BadRequestException('リテラル指定はできません。');
  }

  serialize(value: any): UploadFile {
    throw new InternalServerErrorException('返却には使用できません。');
  }
}
