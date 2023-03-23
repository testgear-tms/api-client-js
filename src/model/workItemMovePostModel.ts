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

export class WorkItemMovePostModel {
    'id': string;
    'newSectionId': string;
    'oldSectionId'?: string | null;
    'nextWorkItemId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "newSectionId",
            "baseName": "newSectionId",
            "type": "string"
        },
        {
            "name": "oldSectionId",
            "baseName": "oldSectionId",
            "type": "string"
        },
        {
            "name": "nextWorkItemId",
            "baseName": "nextWorkItemId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WorkItemMovePostModel.attributeTypeMap;
    }
}

