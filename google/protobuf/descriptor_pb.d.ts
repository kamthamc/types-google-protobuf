// package: google.protobuf
// file: google/protobuf/descriptor.proto

import * as jspb from "google-protobuf";

export class FileDescriptorSet extends jspb.Message {
	getFileList(): FileDescriptorProto[];
	addFile(toAdd: FileDescriptorProto): void;

	static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FileDescriptorSet): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FileDescriptorSet, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FileDescriptorSet, reader: jspb.BinaryReader): FileDescriptorSet;
	static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
}

export namespace FileDescriptorSet {
}


export class FileDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasPackage(): boolean;
	getPackage(): string;
	setPackage(toSet: string): void;

	getDependencyList(): string[];
	addDependency(toAdd: string): void;

	getPublicDependencyList(): number[];
	addPublicDependency(toAdd: number): void;

	getWeakDependencyList(): number[];
	addWeakDependency(toAdd: number): void;

	getMessageTypeList(): DescriptorProto[];
	addMessageType(toAdd: DescriptorProto): void;

	getEnumTypeList(): EnumDescriptorProto[];
	addEnumType(toAdd: EnumDescriptorProto): void;

	getServiceList(): ServiceDescriptorProto[];
	addService(toAdd: ServiceDescriptorProto): void;

	getExtensionList(): FieldDescriptorProto[];
	addExtension(toAdd: FieldDescriptorProto): void;

	hasOptions(): boolean;
	getOptions(): FileOptions;
	setOptions(toSet: FileOptions): void;

	hasSourceCodeInfo(): boolean;
	getSourceCodeInfo(): SourceCodeInfo;
	setSourceCodeInfo(toSet: SourceCodeInfo): void;

	hasSyntax(): boolean;
	getSyntax(): string;
	setSyntax(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FileDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FileDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FileDescriptorProto, reader: jspb.BinaryReader): FileDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
}

export namespace FileDescriptorProto {
}


export class DescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getFieldList(): FieldDescriptorProto[];
	addField(toAdd: FieldDescriptorProto): void;

	getExtensionList(): FieldDescriptorProto[];
	addExtension(toAdd: FieldDescriptorProto): void;

	getNestedTypeList(): DescriptorProto[];
	addNestedType(toAdd: DescriptorProto): void;

	getEnumTypeList(): EnumDescriptorProto[];
	addEnumType(toAdd: EnumDescriptorProto): void;

	getExtensionRangeList(): DescriptorProto.ExtensionRange[];
	addExtensionRange(toAdd: DescriptorProto.ExtensionRange): void;

	getOneofDeclList(): OneofDescriptorProto[];
	addOneofDecl(toAdd: OneofDescriptorProto): void;

	hasOptions(): boolean;
	getOptions(): MessageOptions;
	setOptions(toSet: MessageOptions): void;

	getReservedRangeList(): DescriptorProto.ReservedRange[];
	addReservedRange(toAdd: DescriptorProto.ReservedRange): void;

	getReservedNameList(): string[];
	addReservedName(toAdd: string): void;

	static deserializeBinary(bytes: Uint8Array): DescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: DescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: DescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: DescriptorProto, reader: jspb.BinaryReader): DescriptorProto;
	static deserializeBinary(bytes: Uint8Array): DescriptorProto;
}

export namespace DescriptorProto {
		export class ExtensionRange extends jspb.Message {
		hasStart(): boolean;
		getStart(): number;
		setStart(toSet: number): void;

		hasEnd(): boolean;
		getEnd(): number;
		setEnd(toSet: number): void;

		static deserializeBinary(bytes: Uint8Array): ExtensionRange;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: ExtensionRange): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: ExtensionRange, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: ExtensionRange, reader: jspb.BinaryReader): ExtensionRange;
		static deserializeBinary(bytes: Uint8Array): ExtensionRange;
	}

	export namespace ExtensionRange {
	}


		export class ReservedRange extends jspb.Message {
		hasStart(): boolean;
		getStart(): number;
		setStart(toSet: number): void;

		hasEnd(): boolean;
		getEnd(): number;
		setEnd(toSet: number): void;

		static deserializeBinary(bytes: Uint8Array): ReservedRange;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: ReservedRange): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: ReservedRange, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: ReservedRange, reader: jspb.BinaryReader): ReservedRange;
		static deserializeBinary(bytes: Uint8Array): ReservedRange;
	}

	export namespace ReservedRange {
	}


}


export class FieldDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasNumber(): boolean;
	getNumber(): number;
	setNumber(toSet: number): void;

	hasLabel(): boolean;
	getLabel(): FieldDescriptorProto.Label;
	setLabel(toSet: FieldDescriptorProto.Label): void;

	hasType(): boolean;
	getType(): FieldDescriptorProto.Type;
	setType(toSet: FieldDescriptorProto.Type): void;

	hasTypeName(): boolean;
	getTypeName(): string;
	setTypeName(toSet: string): void;

	hasExtendee(): boolean;
	getExtendee(): string;
	setExtendee(toSet: string): void;

	hasDefaultValue(): boolean;
	getDefaultValue(): string;
	setDefaultValue(toSet: string): void;

	hasOneofIndex(): boolean;
	getOneofIndex(): number;
	setOneofIndex(toSet: number): void;

	hasJsonName(): boolean;
	getJsonName(): string;
	setJsonName(toSet: string): void;

	hasOptions(): boolean;
	getOptions(): FieldOptions;
	setOptions(toSet: FieldOptions): void;

	static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FieldDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FieldDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FieldDescriptorProto, reader: jspb.BinaryReader): FieldDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
}

export namespace FieldDescriptorProto {
		export enum Type {
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

		export enum Label {
		LABEL_OPTIONAL = 1,
		LABEL_REQUIRED = 2,
		LABEL_REPEATED = 3,
	}

}


export class OneofDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasOptions(): boolean;
	getOptions(): OneofOptions;
	setOptions(toSet: OneofOptions): void;

	static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: OneofDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: OneofDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: OneofDescriptorProto, reader: jspb.BinaryReader): OneofDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
}

export namespace OneofDescriptorProto {
}


export class EnumDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getValueList(): EnumValueDescriptorProto[];
	addValue(toAdd: EnumValueDescriptorProto): void;

	hasOptions(): boolean;
	getOptions(): EnumOptions;
	setOptions(toSet: EnumOptions): void;

	static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: EnumDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: EnumDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: EnumDescriptorProto, reader: jspb.BinaryReader): EnumDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
}

export namespace EnumDescriptorProto {
}


export class EnumValueDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasNumber(): boolean;
	getNumber(): number;
	setNumber(toSet: number): void;

	hasOptions(): boolean;
	getOptions(): EnumValueOptions;
	setOptions(toSet: EnumValueOptions): void;

	static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: EnumValueDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: EnumValueDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: EnumValueDescriptorProto, reader: jspb.BinaryReader): EnumValueDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
}

export namespace EnumValueDescriptorProto {
}


export class ServiceDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getMethodList(): MethodDescriptorProto[];
	addMethod(toAdd: MethodDescriptorProto): void;

	hasOptions(): boolean;
	getOptions(): ServiceOptions;
	setOptions(toSet: ServiceOptions): void;

	static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: ServiceDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: ServiceDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: ServiceDescriptorProto, reader: jspb.BinaryReader): ServiceDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
}

export namespace ServiceDescriptorProto {
}


export class MethodDescriptorProto extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasInputType(): boolean;
	getInputType(): string;
	setInputType(toSet: string): void;

	hasOutputType(): boolean;
	getOutputType(): string;
	setOutputType(toSet: string): void;

	hasOptions(): boolean;
	getOptions(): MethodOptions;
	setOptions(toSet: MethodOptions): void;

	hasClientStreaming(): boolean;
	getClientStreaming(): boolean;
	setClientStreaming(toSet: boolean): void;

	hasServerStreaming(): boolean;
	getServerStreaming(): boolean;
	setServerStreaming(toSet: boolean): void;

	static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: MethodDescriptorProto): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: MethodDescriptorProto, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: MethodDescriptorProto, reader: jspb.BinaryReader): MethodDescriptorProto;
	static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
}

export namespace MethodDescriptorProto {
}


export class FileOptions extends jspb.Message {
	hasJavaPackage(): boolean;
	getJavaPackage(): string;
	setJavaPackage(toSet: string): void;

	hasJavaOuterClassname(): boolean;
	getJavaOuterClassname(): string;
	setJavaOuterClassname(toSet: string): void;

	hasJavaMultipleFiles(): boolean;
	getJavaMultipleFiles(): boolean;
	setJavaMultipleFiles(toSet: boolean): void;

	hasJavaGenerateEqualsAndHash(): boolean;
	getJavaGenerateEqualsAndHash(): boolean;
	setJavaGenerateEqualsAndHash(toSet: boolean): void;

	hasJavaStringCheckUtf8(): boolean;
	getJavaStringCheckUtf8(): boolean;
	setJavaStringCheckUtf8(toSet: boolean): void;

	hasOptimizeFor(): boolean;
	getOptimizeFor(): FileOptions.OptimizeMode;
	setOptimizeFor(toSet: FileOptions.OptimizeMode): void;

	hasGoPackage(): boolean;
	getGoPackage(): string;
	setGoPackage(toSet: string): void;

	hasCcGenericServices(): boolean;
	getCcGenericServices(): boolean;
	setCcGenericServices(toSet: boolean): void;

	hasJavaGenericServices(): boolean;
	getJavaGenericServices(): boolean;
	setJavaGenericServices(toSet: boolean): void;

	hasPyGenericServices(): boolean;
	getPyGenericServices(): boolean;
	setPyGenericServices(toSet: boolean): void;

	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	hasCcEnableArenas(): boolean;
	getCcEnableArenas(): boolean;
	setCcEnableArenas(toSet: boolean): void;

	hasObjcClassPrefix(): boolean;
	getObjcClassPrefix(): string;
	setObjcClassPrefix(toSet: string): void;

	hasCsharpNamespace(): boolean;
	getCsharpNamespace(): string;
	setCsharpNamespace(toSet: string): void;

	hasSwiftPrefix(): boolean;
	getSwiftPrefix(): string;
	setSwiftPrefix(toSet: string): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): FileOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FileOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
	static deserializeBinary(bytes: Uint8Array): FileOptions;
}

export namespace FileOptions {
		export enum OptimizeMode {
		SPEED = 1,
		CODE_SIZE = 2,
		LITE_RUNTIME = 3,
	}

}


export class MessageOptions extends jspb.Message {
	hasMessageSetWireFormat(): boolean;
	getMessageSetWireFormat(): boolean;
	setMessageSetWireFormat(toSet: boolean): void;

	hasNoStandardDescriptorAccessor(): boolean;
	getNoStandardDescriptorAccessor(): boolean;
	setNoStandardDescriptorAccessor(toSet: boolean): void;

	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	hasMapEntry(): boolean;
	getMapEntry(): boolean;
	setMapEntry(toSet: boolean): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): MessageOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: MessageOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
	static deserializeBinary(bytes: Uint8Array): MessageOptions;
}

export namespace MessageOptions {
}


export class FieldOptions extends jspb.Message {
	hasCtype(): boolean;
	getCtype(): FieldOptions.CType;
	setCtype(toSet: FieldOptions.CType): void;

	hasPacked(): boolean;
	getPacked(): boolean;
	setPacked(toSet: boolean): void;

	hasJstype(): boolean;
	getJstype(): FieldOptions.JSType;
	setJstype(toSet: FieldOptions.JSType): void;

	hasLazy(): boolean;
	getLazy(): boolean;
	setLazy(toSet: boolean): void;

	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	hasWeak(): boolean;
	getWeak(): boolean;
	setWeak(toSet: boolean): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): FieldOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: FieldOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
	static deserializeBinary(bytes: Uint8Array): FieldOptions;
}

export namespace FieldOptions {
		export enum CType {
		STRING = 0,
		CORD = 1,
		STRING_PIECE = 2,
	}

		export enum JSType {
		JS_NORMAL = 0,
		JS_STRING = 1,
		JS_NUMBER = 2,
	}

}


export class OneofOptions extends jspb.Message {
	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): OneofOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: OneofOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: OneofOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: OneofOptions, reader: jspb.BinaryReader): OneofOptions;
	static deserializeBinary(bytes: Uint8Array): OneofOptions;
}

export namespace OneofOptions {
}


export class EnumOptions extends jspb.Message {
	hasAllowAlias(): boolean;
	getAllowAlias(): boolean;
	setAllowAlias(toSet: boolean): void;

	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): EnumOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: EnumOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: EnumOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: EnumOptions, reader: jspb.BinaryReader): EnumOptions;
	static deserializeBinary(bytes: Uint8Array): EnumOptions;
}

export namespace EnumOptions {
}


export class EnumValueOptions extends jspb.Message {
	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: EnumValueOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: EnumValueOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: EnumValueOptions, reader: jspb.BinaryReader): EnumValueOptions;
	static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
}

export namespace EnumValueOptions {
}


export class ServiceOptions extends jspb.Message {
	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): ServiceOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: ServiceOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: ServiceOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: ServiceOptions, reader: jspb.BinaryReader): ServiceOptions;
	static deserializeBinary(bytes: Uint8Array): ServiceOptions;
}

export namespace ServiceOptions {
}


export class MethodOptions extends jspb.Message {
	hasDeprecated(): boolean;
	getDeprecated(): boolean;
	setDeprecated(toSet: boolean): void;

	hasIdempotencyLevel(): boolean;
	getIdempotencyLevel(): MethodOptions.IdempotencyLevel;
	setIdempotencyLevel(toSet: MethodOptions.IdempotencyLevel): void;

	getUninterpretedOptionList(): UninterpretedOption[];
	addUninterpretedOption(toAdd: UninterpretedOption): void;

	static deserializeBinary(bytes: Uint8Array): MethodOptions;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: MethodOptions): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: MethodOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: MethodOptions, reader: jspb.BinaryReader): MethodOptions;
	static deserializeBinary(bytes: Uint8Array): MethodOptions;
}

export namespace MethodOptions {
		export enum IdempotencyLevel {
		IDEMPOTENCY_UNKNOWN = 0,
		NO_SIDE_EFFECTS = 1,
		IDEMPOTENT = 2,
	}

}


export class UninterpretedOption extends jspb.Message {
	getNameList(): UninterpretedOption.NamePart[];
	addName(toAdd: UninterpretedOption.NamePart): void;

	hasIdentifierValue(): boolean;
	getIdentifierValue(): string;
	setIdentifierValue(toSet: string): void;

	hasPositiveIntValue(): boolean;
	getPositiveIntValue(): number;
	setPositiveIntValue(toSet: number): void;

	hasNegativeIntValue(): boolean;
	getNegativeIntValue(): number;
	setNegativeIntValue(toSet: number): void;

	hasDoubleValue(): boolean;
	getDoubleValue(): number;
	setDoubleValue(toSet: number): void;

	hasStringValue(): boolean;
	getStringValue(): Uint8Array;
	setStringValue(toSet: Uint8Array): void;

	hasAggregateValue(): boolean;
	getAggregateValue(): string;
	setAggregateValue(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: UninterpretedOption): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: UninterpretedOption, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: UninterpretedOption, reader: jspb.BinaryReader): UninterpretedOption;
	static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
}

export namespace UninterpretedOption {
		export class NamePart extends jspb.Message {
		hasNamePart(): boolean;
		getNamePart(): string;
		setNamePart(toSet: string): void;

		hasIsExtension(): boolean;
		getIsExtension(): boolean;
		setIsExtension(toSet: boolean): void;

		static deserializeBinary(bytes: Uint8Array): NamePart;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: NamePart): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: NamePart, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: NamePart, reader: jspb.BinaryReader): NamePart;
		static deserializeBinary(bytes: Uint8Array): NamePart;
	}

	export namespace NamePart {
	}


}


export class SourceCodeInfo extends jspb.Message {
	getLocationList(): SourceCodeInfo.Location[];
	addLocation(toAdd: SourceCodeInfo.Location): void;

	static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: SourceCodeInfo): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: SourceCodeInfo, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: SourceCodeInfo, reader: jspb.BinaryReader): SourceCodeInfo;
	static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
}

export namespace SourceCodeInfo {
		export class Location extends jspb.Message {
		getPathList(): number[];
		addPath(toAdd: number): void;

		getSpanList(): number[];
		addSpan(toAdd: number): void;

		hasLeadingComments(): boolean;
		getLeadingComments(): string;
		setLeadingComments(toSet: string): void;

		hasTrailingComments(): boolean;
		getTrailingComments(): string;
		setTrailingComments(toSet: string): void;

		getLeadingDetachedCommentsList(): string[];
		addLeadingDetachedComments(toAdd: string): void;

		static deserializeBinary(bytes: Uint8Array): Location;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: Location): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
		static deserializeBinary(bytes: Uint8Array): Location;
	}

	export namespace Location {
	}


}


export class GeneratedCodeInfo extends jspb.Message {
	getAnnotationList(): GeneratedCodeInfo.Annotation[];
	addAnnotation(toAdd: GeneratedCodeInfo.Annotation): void;

	static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: GeneratedCodeInfo): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: GeneratedCodeInfo, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: GeneratedCodeInfo, reader: jspb.BinaryReader): GeneratedCodeInfo;
	static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
}

export namespace GeneratedCodeInfo {
		export class Annotation extends jspb.Message {
		getPathList(): number[];
		addPath(toAdd: number): void;

		hasSourceFile(): boolean;
		getSourceFile(): string;
		setSourceFile(toSet: string): void;

		hasBegin(): boolean;
		getBegin(): number;
		setBegin(toSet: number): void;

		hasEnd(): boolean;
		getEnd(): number;
		setEnd(toSet: number): void;

		static deserializeBinary(bytes: Uint8Array): Annotation;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: Annotation): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
		static deserializeBinary(bytes: Uint8Array): Annotation;
	}

	export namespace Annotation {
	}


}


