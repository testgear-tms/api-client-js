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

export class StringArrayTestPlanChangedFieldViewModel {
    'oldValue'?: Array<string> | null;
    'newValue'?: Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oldValue",
            "baseName": "oldValue",
            "type": "Array<string>"
        },
        {
            "name": "newValue",
            "baseName": "newValue",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return StringArrayTestPlanChangedFieldViewModel.attributeTypeMap;
    }
}

