// package: google.protobuf
// file: google/protobuf/timestamp.proto

import * as jspb from "google-protobuf";

export class Timestamp extends jspb.Message {
	getSeconds(): number;
	setSeconds(toSet: number): void;

	getNanos(): number;
	setNanos(toSet: number): void;

	toDate(): Date;
	fromDate(date: Date): void;

	static deserializeBinary(bytes: Uint8Array): Timestamp;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Timestamp): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
	static deserializeBinary(bytes: Uint8Array): Timestamp;
}

export namespace Timestamp {
}


