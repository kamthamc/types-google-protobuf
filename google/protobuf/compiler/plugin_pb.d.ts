// package: google.protobuf.compiler
// file: google/protobuf/compiler/plugin.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Version extends jspb.Message {
	hasMajor(): boolean;
	clearMajor(): void;
	getMajor(): number;
	setMajor(value: number): void;

	hasMinor(): boolean;
	clearMinor(): void;
	getMinor(): number;
	setMinor(value: number): void;

	hasPatch(): boolean;
	clearPatch(): void;
	getPatch(): number;
	setPatch(value: number): void;

	hasSuffix(): boolean;
	clearSuffix(): void;
	getSuffix(): string;
	setSuffix(value: string): void;

	static deserializeBinary(bytes: Uint8Array): Version;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Version): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export class CodeGeneratorRequest extends jspb.Message {
	clearFileToGenerateList(): void;
	getFileToGenerateList(): Array<string>;
	setFileToGenerateList(value: Array<string>): void;
	addFileToGenerate(value: string, opt_index?: number): void;

	hasParameter(): boolean;
	clearParameter(): void;
	getParameter(): string;
	setParameter(value: string): void;

	clearProtoFileList(): void;
	getProtoFileList(): Array<google_protobuf_descriptor_pb.FileDescriptorProto>;
	setProtoFileList(value: Array<google_protobuf_descriptor_pb.FileDescriptorProto>): void;
	addProtoFile(opt_value?: google_protobuf_descriptor_pb.FileDescriptorProto, opt_index?: number): void;

	hasCompilerVersion(): boolean;
	clearCompilerVersion(): void;
	getCompilerVersion(): Version;
	setCompilerVersion(value: Version): void;

	static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: CodeGeneratorRequest): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: CodeGeneratorRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: CodeGeneratorRequest, reader: jspb.BinaryReader): CodeGeneratorRequest;
}

export class CodeGeneratorResponse extends jspb.Message {
	hasError(): boolean;
	clearError(): void;
	getError(): string;
	setError(value: string): void;

	clearFileList(): void;
	getFileList(): Array<CodeGeneratorResponse.File>;
	setFileList(value: Array<CodeGeneratorResponse.File>): void;
	addFile(opt_value?: CodeGeneratorResponse.File, opt_index?: number): void;

	static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: CodeGeneratorResponse): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: CodeGeneratorResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: CodeGeneratorResponse, reader: jspb.BinaryReader): CodeGeneratorResponse;
}

export namespace CodeGeneratorResponse {
	export class File extends jspb.Message {
		hasName(): boolean;
		clearName(): void;
		getName(): string;
		setName(value: string): void;

		hasInsertionPoint(): boolean;
		clearInsertionPoint(): void;
		getInsertionPoint(): string;
		setInsertionPoint(value: string): void;

		hasContent(): boolean;
		clearContent(): void;
		getContent(): string;
		setContent(value: string): void;

		static deserializeBinary(bytes: Uint8Array): File;
		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Object;
		static toObject(includeInstance: boolean, msg: File): Object;
		static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
		static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
		static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
		static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
	}
}


