// package: google.protobuf
// file: google/protobuf/struct.proto

import * as jspb from "google-protobuf";

export class Struct extends jspb.Message {
	getFieldsMap(): jspb.Map<string, Value>;
	clearFieldsMap(): void;
	static deserializeBinary(bytes: Uint8Array): Struct;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Struct): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
	static deserializeBinary(bytes: Uint8Array): Struct;
}

export namespace Struct {
	
}


export class Value extends jspb.Message {
	hasNullValue(): boolean;
	getNullValue(): NullValue;
	setNullValue(toSet: NullValue): void;

	hasNumberValue(): boolean;
	getNumberValue(): number;
	setNumberValue(toSet: number): void;

	hasStringValue(): boolean;
	getStringValue(): string;
	setStringValue(toSet: string): void;

	hasBoolValue(): boolean;
	getBoolValue(): boolean;
	setBoolValue(toSet: boolean): void;

	hasStructValue(): boolean;
	getStructValue(): Struct;
	setStructValue(toSet: Struct): void;

	hasListValue(): boolean;
	getListValue(): ListValue;
	setListValue(toSet: ListValue): void;

	static deserializeBinary(bytes: Uint8Array): Value;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Value): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
	static deserializeBinary(bytes: Uint8Array): Value;
}

export namespace Value {
}


export class ListValue extends jspb.Message {
	getValuesList(): Value[];
	addValues(toAdd: Value): void;

	static deserializeBinary(bytes: Uint8Array): ListValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: ListValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
	static deserializeBinary(bytes: Uint8Array): ListValue;
}

export namespace ListValue {
}


export enum NullValue {
	NULL_VALUE = 0,
}

