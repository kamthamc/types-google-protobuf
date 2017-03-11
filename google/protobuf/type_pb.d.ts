// package: google.protobuf
// file: google/protobuf/type.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";

export class Type extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(opt_value?: Field, opt_index?: number): void;

  clearOneofsList(): void;
  getOneofsList(): Array<string>;
  setOneofsList(value: Array<string>): void;
  addOneofs(value: string, opt_index?: number): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(opt_value?: Option, opt_index?: number): void;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext;
  setSourceContext(value: google_protobuf_source_context_pb.SourceContext): void;

  getSyntax(): Syntax;
  setSyntax(value: Syntax): void;

  static deserializeBinary(bytes: Uint8Array): Type;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Type): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export class Field extends jspb.Message {
  getKind(): Field.Kind;
  setKind(value: Field.Kind): void;

  getCardinality(): Field.Cardinality;
  setCardinality(value: Field.Cardinality): void;

  getNumber(): number;
  setNumber(value: number): void;

  getName(): string;
  setName(value: string): void;

  getTypeUrl(): string;
  setTypeUrl(value: string): void;

  getOneofIndex(): number;
  setOneofIndex(value: number): void;

  getPacked(): boolean;
  setPacked(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(opt_value?: Option, opt_index?: number): void;

  getJsonName(): string;
  setJsonName(value: string): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  static deserializeBinary(bytes: Uint8Array): Field;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Field): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
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
  getName(): string;
  setName(value: string): void;

  clearEnumvalueList(): void;
  getEnumvalueList(): Array<EnumValue>;
  setEnumvalueList(value: Array<EnumValue>): void;
  addEnumvalue(opt_value?: EnumValue, opt_index?: number): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(opt_value?: Option, opt_index?: number): void;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext;
  setSourceContext(value: google_protobuf_source_context_pb.SourceContext): void;

  getSyntax(): Syntax;
  setSyntax(value: Syntax): void;

  static deserializeBinary(bytes: Uint8Array): Enum;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Enum): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Enum, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Enum, reader: jspb.BinaryReader): Enum;
}

export class EnumValue extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): void;
  addOptions(opt_value?: Option, opt_index?: number): void;

  static deserializeBinary(bytes: Uint8Array): EnumValue;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: EnumValue): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
}

export class Option extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): google_protobuf_any_pb.Any;
  setValue(value: google_protobuf_any_pb.Any): void;

  static deserializeBinary(bytes: Uint8Array): Option;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Option): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export enum Syntax {
  SYNTAX_PROTO2 = 0,
  SYNTAX_PROTO3 = 1,
}

