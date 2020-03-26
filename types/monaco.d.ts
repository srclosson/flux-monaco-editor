import * as allMonaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as lsp from '@influxdata/flux-lsp-browser';
export declare type ServerResponse = lsp.ServerResponse;
export declare type MonacoType = typeof allMonaco;
export declare type EditorType = allMonaco.editor.IStandaloneCodeEditor;
