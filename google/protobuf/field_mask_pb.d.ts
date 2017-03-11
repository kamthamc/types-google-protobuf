// package: google.protobuf
// file: google/protobuf/field_mask.proto

import * as jspb from "google-protobuf";

export class FieldMask extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, opt_index?: number): void;

  static deserializeBinary(bytes: Uint8Array): FieldMask;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: FieldMask): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldMask, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: FieldMask, reader: jspb.BinaryReader): FieldMask;
}

