# Next.js

```sh
yarn add -D openapi-typescript-codegen
```

Add a script to your package.json

```json
"generate-client": "openapi --input http://localhost:8000/openapi.json --output ./src/client"
```

Generate

```sh
yarn generate-client
```
