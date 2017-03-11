// package: google.protobuf
// file: google/protobuf/type.proto

import * as jspb from "google-protobuf";

import * as google_protobuf_any from "./any_pb";
import * as google_protobuf_source_context from "./source_context_pb";
export class Type extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getFieldsList(): Field[];
	addFields(toAdd: Field): void;

	getOneofsList(): string[];
	addOneofs(toAdd: string): void;

	getOptionsList(): Option[];
	addOptions(toAdd: Option): void;

	hasSourceContext(): boolean;
	getSourceContext(): google_protobuf_source_context.SourceContext;
	setSourceContext(toSet: google_protobuf_source_context.SourceContext): void;

	hasSyntax(): boolean;
	getSyntax(): Syntax;
	setSyntax(toSet: Syntax): void;

	static deserializeBinary(bytes: Uint8Array): Type;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Type): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
	static deserializeBinary(bytes: Uint8Array): Type;
}

export namespace Type {
}


export class Field extends jspb.Message {
	hasKind(): boolean;
	getKind(): Field.Kind;
	setKind(toSet: Field.Kind): void;

	hasCardinality(): boolean;
	getCardinality(): Field.Cardinality;
	setCardinality(toSet: Field.Cardinality): void;

	hasNumber(): boolean;
	getNumber(): number;
	setNumber(toSet: number): void;

	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasTypeUrl(): boolean;
	getTypeUrl(): string;
	setTypeUrl(toSet: string): void;

	hasOneofIndex(): boolean;
	getOneofIndex(): number;
	setOneofIndex(toSet: number): void;

	hasPacked(): boolean;
	getPacked(): boolean;
	setPacked(toSet: boolean): void;

	getOptionsList(): Option[];
	addOptions(toAdd: Option): void;

	hasJsonName(): boolean;
	getJsonName(): string;
	setJsonName(toSet: string): void;

	hasDefaultValue(): boolean;
	getDefaultValue(): string;
	setDefaultValue(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): Field;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Field): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
	static deserializeBinary(bytes: Uint8Array): Field;
}

export namespace Field {
		export enum Kind {
		TYPE_UNKNOWN = 0,
		TYPE_DOUBLE = 1,
		TYPE_FLOAT = 2,
		TYPE_INT64 = 3,
		TYPE_UINT64 = 4,
		TYPE_INT32 = 5,
		TYPE_FIXED64 = 6,
		TYPE_FIXED32 = 7,
		TYPE_BOOL = 8,
		TYPE_STRING = 9,
		TYPE_GROUP = 10,
		TYPE_MESSAGE = 11,
		TYPE_BYTES = 12,
		TYPE_UINT32 = 13,
		TYPE_ENUM = 14,
		TYPE_SFIXED32 = 15,
		TYPE_SFIXED64 = 16,
		TYPE_SINT32 = 17,
		TYPE_SINT64 = 18,
	}

		export enum Cardinality {
		CARDINALITY_UNKNOWN = 0,
		CARDINALITY_OPTIONAL = 1,
		CARDINALITY_REQUIRED = 2,
		CARDINALITY_REPEATED = 3,
	}

}


export class Enum extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getEnumvalueList(): EnumValue[];
	addEnumvalue(toAdd: EnumValue): void;

	getOptionsList(): Option[];
	addOptions(toAdd: Option): void;

	hasSourceContext(): boolean;
	getSourceContext(): google_protobuf_source_context.SourceContext;
	setSourceContext(toSet: google_protobuf_source_context.SourceContext): void;

	hasSyntax(): boolean;
	getSyntax(): Syntax;
	setSyntax(toSet: Syntax): void;

	static deserializeBinary(bytes: Uint8Array): Enum;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Enum): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Enum, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Enum, reader: jspb.BinaryReader): Enum;
	static deserializeBinary(bytes: Uint8Array): Enum;
}

export namespace Enum {
}


export class EnumValue extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasNumber(): boolean;
	getNumber(): number;
	setNumber(toSet: number): void;

	getOptionsList(): Option[];
	addOptions(toAdd: Option): void;

	static deserializeBinary(bytes: Uint8Array): EnumValue;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: EnumValue): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
	static deserializeBinary(bytes: Uint8Array): EnumValue;
}

export namespace EnumValue {
}


export class Option extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasValue(): boolean;
	getValue(): google_protobuf_any.Any;
	setValue(toSet: google_protobuf_any.Any): void;

	static deserializeBinary(bytes: Uint8Array): Option;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Option): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
	static deserializeBinary(bytes: Uint8Array): Option;
}

export namespace Option {
}


export enum Syntax {
	SYNTAX_PROTO2 = 0,
	SYNTAX_PROTO3 = 1,
}

