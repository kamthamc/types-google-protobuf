#!/usr/bin/env bash

sed -i -e 's/from "google-protobuf"/from "..\/..\/index"/g' google/protobuf/*.d.ts
sed -i -e 's/from "google-protobuf"/from "..\/..\/..\/index"/g' google/protobuf/*/*.d.ts

sed -i '/\/\/ file: /d' google/protobuf/*.d.ts
sed -i '/\/\/ file: /d' google/protobuf/*/*.d.ts

sed -i '/\/\/ package: /d' google/protobuf/*.d.ts
sed -i '/\/\/ package: /d' google/protobuf/*/*.d.ts

sed -i '/./,$!d' google/protobuf/*.d.ts
sed -i '/./,$!d' google/protobuf/*/*.d.ts

sed -i 's/from "google-protobuf\/google\/protobuf\//from ".\//' google/protobuf/*.d.ts
sed -i 's/from "google-protobuf\/google\/protobuf\//from "..\//' google/protobuf/*/*.d.ts
