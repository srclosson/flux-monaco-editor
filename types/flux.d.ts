import { Source } from 'src/types';
export declare type OnDeleteFuncNode = (ids: DeleteFuncNodeArgs) => void;
export declare type OnChangeArg = (inputArg: InputArg) => void;
export declare type OnAddNode = (bodyID: string, funcName: string, declarationID: string) => void;
export declare type OnToggleYield = (bodyID: string, declarationID: string, funcNodeIndex: number) => void;
export declare type OnGenerateScript = () => void;
export declare type OnChangeScript = (script: string) => void;
export declare type ScriptUpToYield = (bodyID: string, declarationID: string, yieldNodeIndex: number, isYieldable: boolean) => string;
export declare type OnDeleteBody = (bodyID: string) => void;
export interface ScriptStatus {
    type: string;
    text: string;
}
export interface Context {
    source: Source;
    onAddNode: OnAddNode;
    onChangeArg: OnChangeArg;
    onChangeScript: OnChangeScript;
    onDeleteFuncNode: OnDeleteFuncNode;
    onGenerateScript: OnGenerateScript;
    onToggleYield: OnToggleYield;
    data: FluxTable[];
    scriptUpToYield: ScriptUpToYield;
}
export interface DeleteFuncNodeArgs {
    funcID: string;
    bodyID: string;
    declarationID?: string;
    yieldNodeID?: string;
}
export interface InputArg {
    funcID: string;
    bodyID: string;
    declarationID?: string;
    key: string;
    value: string | boolean | {
        [x: string]: string;
    };
    generate?: boolean;
}
export interface BinaryExpressionNode {
    source: string;
    type: string;
}
interface ObjectNode {
    name: string;
    type: string;
}
interface PropertyNode {
    name?: string;
    value?: string;
    type: string;
}
export interface MemberExpressionNode {
    type: string;
    source: string;
    object: ObjectNode;
    property: PropertyNode;
}
export declare type FilterNode = BinaryExpressionNode | MemberExpressionNode;
export interface FilterTagCondition {
    key: string;
    operator: string;
    value: string;
}
export interface FilterClause {
    [tagKey: string]: FilterTagCondition[];
}
export declare type SetFilterTagValue = (key: string, value: string, selected: boolean) => void;
export declare type SetEquality = (tagKey: string, equal: boolean) => void;
export interface FlatBody {
    type: string;
    source: string;
    funcs?: Func[];
    declarations?: FlatDeclaration[];
}
export interface Body extends FlatBody {
    id: string;
}
export interface Func {
    type: string;
    name: string;
    args: Arg[];
    source: string;
    id: string;
}
export declare type Arg = ArgString;
export interface ArgString {
    key: string;
    value: string;
    type: string;
}
interface FlatExpression {
    id: string;
    funcs?: Func[];
}
interface FlatDeclaration extends FlatExpression {
    name: string;
    value: string;
    type: string;
}
export interface Suggestion {
    name: string;
    params: {
        [key: string]: string;
    };
}
export interface FluxLinks {
    self: string;
    suggestions: string;
    ast: string;
}
export interface FluxTable {
    id: string;
    name: string;
    data: string[][];
    result: string;
    groupKey: {
        [columnName: string]: string;
    };
    dataTypes: {
        [columnName: string]: string;
    };
}
export interface SchemaFilter {
    key: string;
    value: string;
}
export declare enum RemoteDataState {
    NotStarted = "NotStarted",
    Loading = "Loading",
    Done = "Done",
    Error = "Error"
}
export {};
