
## Using the CLI

- Running tsc locally will compile the closest project defined by a tsconfig.json, you can compile a set of TypeScript files by passing in a glob of files you want.

### Run a compile based on a backwards look through the fs for a tsconfig.json
tsc
### Emit JS for just the index.ts with the compiler defaults
tsc index.ts
### Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts
### Emit files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json
### Emit d.ts files for a js file with showing compiler options which are booleans
tsc index.js --declaration --emitDeclarationOnly
### Emit a single .js file from two files via compiler options which take string arguments
tsc app.ts util.ts --target esnext --outfile index.js


### Compiler Options
If you’re looking for more information about the compiler options in a tsconfig, check out the TSConfig Reference

CLI Commands
Flag	Type
--all	
boolean

Show all compiler options.

--generateTrace	
string

Generates an event trace and a list of types.

--help	
boolean

Gives local information for help on the CLI.

--init	
boolean

Initializes a TypeScript project and creates a tsconfig.json file.

--listFilesOnly	
boolean

Print names of files that are part of the compilation and then stop processing.

--locale	
string

Set the language of the messaging from TypeScript. This does not affect emit.

--project	
string

Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

--showConfig	
boolean

Print the final configuration instead of building.

--version	
boolean

Print the compiler's version.