// package: google.protobuf
// file: google/protobuf/wrappers.proto

import * as jspb from "google-protobuf";

export class DoubleValue extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): DoubleValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: DoubleValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: DoubleValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: DoubleValue, reader: jspb.BinaryReader): DoubleValue;
	static deserializeBinary(bytes: Uint8Array): DoubleValue;
}

export namespace DoubleValue {
}


export class FloatValue extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): FloatValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FloatValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FloatValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FloatValue, reader: jspb.BinaryReader): FloatValue;
	static deserializeBinary(bytes: Uint8Array): FloatValue;
}

export namespace FloatValue {
}


export class Int64Value extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): Int64Value;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Int64Value): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Int64Value, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Int64Value, reader: jspb.BinaryReader): Int64Value;
	static deserializeBinary(bytes: Uint8Array): Int64Value;
}

export namespace Int64Value {
}


export class UInt64Value extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): UInt64Value;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: UInt64Value): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: UInt64Value, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: UInt64Value, reader: jspb.BinaryReader): UInt64Value;
	static deserializeBinary(bytes: Uint8Array): UInt64Value;
}

export namespace UInt64Value {
}


export class Int32Value extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): Int32Value;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Int32Value): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Int32Value, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Int32Value, reader: jspb.BinaryReader): Int32Value;
	static deserializeBinary(bytes: Uint8Array): Int32Value;
}

export namespace Int32Value {
}


export class UInt32Value extends jspb.Message {
	hasValue(): boolean;
	getValue(): number;
	setValue(toSet: number): void;

	static deserializeBinary(bytes: Uint8Array): UInt32Value;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: UInt32Value): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: UInt32Value, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: UInt32Value, reader: jspb.BinaryReader): UInt32Value;
	static deserializeBinary(bytes: Uint8Array): UInt32Value;
}

export namespace UInt32Value {
}


export class BoolValue extends jspb.Message {
	hasValue(): boolean;
	getValue(): boolean;
	setValue(toSet: boolean): void;

	static deserializeBinary(bytes: Uint8Array): BoolValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: BoolValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: BoolValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: BoolValue, reader: jspb.BinaryReader): BoolValue;
	static deserializeBinary(bytes: Uint8Array): BoolValue;
}

export namespace BoolValue {
}


export class StringValue extends jspb.Message {
	hasValue(): boolean;
	getValue(): string;
	setValue(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): StringValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: StringValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
	static deserializeBinary(bytes: Uint8Array): StringValue;
}

export namespace StringValue {
}


export class BytesValue extends jspb.Message {
	hasValue(): boolean;
	getValue(): Uint8Array;
	setValue(toSet: Uint8Array): void;

	static deserializeBinary(bytes: Uint8Array): BytesValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: BytesValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: BytesValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: BytesValue, reader: jspb.BinaryReader): BytesValue;
	static deserializeBinary(bytes: Uint8Array): BytesValue;
}

export namespace BytesValue {
}


