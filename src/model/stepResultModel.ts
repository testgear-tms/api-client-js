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
import { SharedStepResultModel } from './sharedStepResultModel';

export class StepResultModel {
    'stepId'?: string;
    'outcome'?: string | null;
    'sharedStepVersionId'?: string | null;
    'sharedStepResults'?: Array<SharedStepResultModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stepId",
            "baseName": "stepId",
            "type": "string"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "string"
        },
        {
            "name": "sharedStepVersionId",
            "baseName": "sharedStepVersionId",
            "type": "string"
        },
        {
            "name": "sharedStepResults",
            "baseName": "sharedStepResults",
            "type": "Array<SharedStepResultModel>"
        }    ];

    static getAttributeTypeMap() {
        return StepResultModel.attributeTypeMap;
    }
}

