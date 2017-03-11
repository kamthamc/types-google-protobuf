// package: google.protobuf
// file: google/protobuf/api.proto

import * as jspb from "google-protobuf";

import * as google_protobuf_source_context from "./source_context_pb";
import * as google_protobuf_type from "./type_pb";
export class Api extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	getMethodsList(): Method[];
	addMethods(toAdd: Method): void;

	getOptionsList(): google_protobuf_type.Option[];
	addOptions(toAdd: google_protobuf_type.Option): void;

	hasVersion(): boolean;
	getVersion(): string;
	setVersion(toSet: string): void;

	hasSourceContext(): boolean;
	getSourceContext(): google_protobuf_source_context.SourceContext;
	setSourceContext(toSet: google_protobuf_source_context.SourceContext): void;

	getMixinsList(): Mixin[];
	addMixins(toAdd: Mixin): void;

	hasSyntax(): boolean;
	getSyntax(): google_protobuf_type.Syntax;
	setSyntax(toSet: google_protobuf_type.Syntax): void;

	static deserializeBinary(bytes: Uint8Array): Api;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Api): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
	static deserializeBinary(bytes: Uint8Array): Api;
}

export namespace Api {
}


export class Method extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasRequestTypeUrl(): boolean;
	getRequestTypeUrl(): string;
	setRequestTypeUrl(toSet: string): void;

	hasRequestStreaming(): boolean;
	getRequestStreaming(): boolean;
	setRequestStreaming(toSet: boolean): void;

	hasResponseTypeUrl(): boolean;
	getResponseTypeUrl(): string;
	setResponseTypeUrl(toSet: string): void;

	hasResponseStreaming(): boolean;
	getResponseStreaming(): boolean;
	setResponseStreaming(toSet: boolean): void;

	getOptionsList(): google_protobuf_type.Option[];
	addOptions(toAdd: google_protobuf_type.Option): void;

	hasSyntax(): boolean;
	getSyntax(): google_protobuf_type.Syntax;
	setSyntax(toSet: google_protobuf_type.Syntax): void;

	static deserializeBinary(bytes: Uint8Array): Method;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Method): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
	static deserializeBinary(bytes: Uint8Array): Method;
}

export namespace Method {
}


export class Mixin extends jspb.Message {
	hasName(): boolean;
	getName(): string;
	setName(toSet: string): void;

	hasRoot(): boolean;
	getRoot(): string;
	setRoot(toSet: string): void;

	static deserializeBinary(bytes: Uint8Array): Mixin;
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Object;
	static toObject(includeInstance: boolean, msg: Mixin): Object;
	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
	static serializeBinaryToWriter(message: Mixin, writer: jspb.BinaryWriter): void;
	static deserializeBinaryFromReader(message: Mixin, reader: jspb.BinaryReader): Mixin;
	static deserializeBinary(bytes: Uint8Array): Mixin;
}

export namespace Mixin {
}


