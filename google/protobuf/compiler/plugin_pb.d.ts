// package: google.protobuf.compiler
// file: google/protobuf/compiler/plugin.proto

import * as jspb from "google-protobuf";

import * as google_protobuf_descriptor from "../descriptor_pb";
export class Version extends jspb.Message {
	hasMajor(): boolean;
	getMajor(): number;
	setMajor(toSet: number): void;

	hasMinor(): boolean;
	getMinor(): number;
	setMinor(toSet: number): void;

	hasPatch(): boolean;
	getPatch(): number;
	setPatch(toSet: number): void;

	hasSuffix(): boolean;
	getSuffix(): string;
	setSuffix(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): Version;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Version): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
	static deserializeBinary(bytes: Uint8Array): Version;
}

export namespace Version {
}


export class CodeGeneratorRequest extends jspb.Message {
	getFileToGenerateList(): string[];
	addFileToGenerate(toAdd: string): void;

	hasParameter(): boolean;
	getParameter(): string;
	setParameter(toSet: string): void;

	getProtoFileList(): google_protobuf_descriptor.FileDescriptorProto[];
	addProtoFile(toAdd: google_protobuf_descriptor.FileDescriptorProto): void;

	hasCompilerVersion(): boolean;
	getCompilerVersion(): Version;
	setCompilerVersion(toSet: Version): void;

	static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: CodeGeneratorRequest): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: CodeGeneratorRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: CodeGeneratorRequest, reader: jspb.BinaryReader): CodeGeneratorRequest;
	static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
}

export namespace CodeGeneratorRequest {
}


export class CodeGeneratorResponse extends jspb.Message {
	hasError(): boolean;
	getError(): string;
	setError(toSet: string): void;

	getFileList(): CodeGeneratorResponse.File[];
	addFile(toAdd: CodeGeneratorResponse.File): void;

	static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: CodeGeneratorResponse): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: CodeGeneratorResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: CodeGeneratorResponse, reader: jspb.BinaryReader): CodeGeneratorResponse;
	static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
}

export namespace CodeGeneratorResponse {
		export class File extends jspb.Message {
		hasName(): boolean;
		getName(): string;
		setName(toSet: string): void;

		hasInsertionPoint(): boolean;
		getInsertionPoint(): string;
		setInsertionPoint(toSet: string): void;

		hasContent(): boolean;
		getContent(): string;
		setContent(toSet: string): void;

		static deserializeBinary(bytes: Uint8Array): File;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: File): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
		static deserializeBinary(bytes: Uint8Array): File;
	}

	export namespace File {
	}


}


