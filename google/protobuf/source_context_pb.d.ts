// package: google.protobuf
// file: google/protobuf/source_context.proto

import * as jspb from "google-protobuf";

export class SourceContext extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): void;

  static deserializeBinary(bytes: Uint8Array): SourceContext;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: SourceContext): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

