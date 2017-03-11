import * as jspb from "../../index";

export class Empty extends jspb.Message {
  static deserializeBinary(bytes: Uint8Array): Empty;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Empty): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}
