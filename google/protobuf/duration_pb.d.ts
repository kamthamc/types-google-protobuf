// package: google.protobuf
// file: google/protobuf/duration.proto

import * as jspb from "google-protobuf";

export class Duration extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  getNanos(): number;
  setNanos(value: number): void;

  static deserializeBinary(bytes: Uint8Array): Duration;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Duration): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

