import type {FileInfo, API} from 'jscodeshift';
import {fixDebugNamespace} from './lib/fixDebugNamespace';
import {renameAliasImports} from './lib/renameAliasImports';
import {sortImports} from './lib/sortImports';
import {sortPackageJson} from "./lib/sortPackageJson";

export default function transform(fileInfo: FileInfo, api: API) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    fixDebugNamespace(root, j, fileInfo);
    renameAliasImports(root, j, fileInfo);
    sortImports(root, j);
    sortPackageJson();

    return root.toSource({quote: 'single'});
}
