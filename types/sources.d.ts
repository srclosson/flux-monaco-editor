import { Service } from './';
export declare type NewSource = Pick<Source, Exclude<keyof Source, 'id'>>;
export declare enum SourceAuthenticationMethod {
    LDAP = "ldap",
    Basic = "basic",
    Shared = "shared",
    Unknown = "unknown"
}
export interface Source {
    id: string;
    name: string;
    type: string;
    username?: string;
    password?: string;
    sharedSecret?: string;
    url: string;
    metaUrl?: string;
    insecureSkipVerify: boolean;
    default: boolean;
    telegraf: string;
    links: SourceLinks;
    defaultRP?: string;
    text?: string;
    services?: Service[];
    authentication?: SourceAuthenticationMethod;
}
export interface SourceLinks {
    query: string;
    self: string;
    kapacitors: string;
    proxy: string;
    queries: string;
    write: string;
    permissions: string;
    users: string;
    roles?: string;
    databases: string;
    annotations: string;
    health: string;
    services: string;
}
export interface SourceOption extends Source {
    text: string;
}
