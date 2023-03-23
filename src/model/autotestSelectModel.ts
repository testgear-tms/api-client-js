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
import { AutotestFilterModel } from './autotestFilterModel';
import { AutotestsExtractionModel } from './autotestsExtractionModel';

export class AutotestSelectModel {
    'filter'?: AutotestFilterModel;
    'extractionModel'?: AutotestsExtractionModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "AutotestFilterModel"
        },
        {
            "name": "extractionModel",
            "baseName": "extractionModel",
            "type": "AutotestsExtractionModel"
        }    ];

    static getAttributeTypeMap() {
        return AutotestSelectModel.attributeTypeMap;
    }
}

