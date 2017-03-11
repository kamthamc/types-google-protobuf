// package: google.protobuf
// file: google/protobuf/any.proto

import * as jspb from "google-protobuf";

export class Any extends jspb.Message {
  getTypeUrl(): string;
  setTypeUrl(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getTypeName(): string;
  pack(serialized: Uint8Array, name: string, typeUrlPrefix?: string);
  unpack<T extends jspb.Message>(deserialize: (packed: Uint8Array) => T, name: string): T | null;

  static deserializeBinary(bytes: Uint8Array): Any;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Any): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Any, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Any, reader: jspb.BinaryReader): Any;
}

