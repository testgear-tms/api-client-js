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

export class CustomAttributeTestPlanProjectRelationPutModel {
    /**
    * Custom attribute internal unique identifier
    */
    'id': string;
    /**
    * Flag that defines if custom attribute is enabled
    */
    'isEnabled': boolean;
    /**
    * Flag that defines if custom attribute is required
    */
    'isRequired': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean"
        },
        {
            "name": "isRequired",
            "baseName": "isRequired",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeTestPlanProjectRelationPutModel.attributeTypeMap;
    }
}

