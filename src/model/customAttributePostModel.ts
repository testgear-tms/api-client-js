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
import { CustomAttributeOptionPostModel } from './customAttributeOptionPostModel';
import { CustomAttributeTypesEnum } from './customAttributeTypesEnum';

export class CustomAttributePostModel {
    /**
    * Collection of attribute options  <br />  Available for attributes of type `options` and `multiple options` only
    */
    'options'?: Array<CustomAttributeOptionPostModel> | null;
    'type': CustomAttributeTypesEnum;
    /**
    * Name of the attribute
    */
    'name': string;
    /**
    * Indicates if the attribute is enabled
    */
    'isEnabled'?: boolean;
    /**
    * Indicates if the attribute value is mandatory to specify
    */
    'isRequired'?: boolean;
    /**
    * Indicates if the attribute is available across all projects
    */
    'isGlobal'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CustomAttributeOptionPostModel>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomAttributeTypesEnum"
        },
        {
            "name": "name",
            "baseName": "name",
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
        },
        {
            "name": "isGlobal",
            "baseName": "isGlobal",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributePostModel.attributeTypeMap;
    }
}
