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

export class Int64WorkItemChangedFieldViewModel {
    'oldValue'?: number;
    'newValue'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oldValue",
            "baseName": "oldValue",
            "type": "number"
        },
        {
            "name": "newValue",
            "baseName": "newValue",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Int64WorkItemChangedFieldViewModel.attributeTypeMap;
    }
}

