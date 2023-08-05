import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploadFile } from './UploadScalar';

@Resolver()
export class AppResolver {
  constructor() {}

  @Mutation()
  async upload(
    @Args('file')
    file: UploadFile,
  ): Promise<boolean> {
    const { readStream, ...another } = file;
    console.log(`★start upload : ${JSON.stringify(another)}`);

    const chunks = [];
    readStream.on('data', (buf) => chunks.push(buf));
    readStream.on('end', () => console.log(Buffer.concat(chunks).toString()));
    return true;
  }
}
