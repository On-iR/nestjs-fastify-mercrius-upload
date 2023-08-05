
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract hello(): string | Promise<string>;
}

export abstract class IMutation {
    abstract upload(file: Upload): boolean | Promise<boolean>;
}

export type Upload = any;
type Nullable<T> = T | null;
