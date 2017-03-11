// package: google.protobuf
// file: google/protobuf/any.proto

import * as jspb from "google-protobuf";

export class Any extends jspb.Message {
	getTypeUrl(): string;
	setTypeUrl(toSet: string): void;

	getValue(): Uint8Array;
	setValue(toSet: Uint8Array): void;

	static deserializeBinary(bytes: Uint8Array): Any;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Any): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Any, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Any, reader: jspb.BinaryReader): Any;
	static deserializeBinary(bytes: Uint8Array): Any;
}

export namespace Any {
}


