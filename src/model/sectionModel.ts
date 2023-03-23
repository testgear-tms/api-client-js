/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class SectionModel {
    'projectId'?: string | null;
    'parentId'?: string | null;
    'isDeleted'?: boolean;
    'id'?: string;
    'createdDate'?: Date;
    'modifiedDate'?: Date | null;
    'createdById'?: string;
    'modifiedById'?: string | null;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SectionModel.attributeTypeMap;
    }
}

