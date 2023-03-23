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
import { DateRangeModel } from './dateRangeModel';
import { TestPlanStatusModel } from './testPlanStatusModel';

export class TestPlanSearchQueryModel {
    'name'?: string | null;
    'description'?: string | null;
    'build'?: string | null;
    'productName'?: string | null;
    'status'?: Set<TestPlanStatusModel> | null;
    'globalIds'?: Set<number> | null;
    'isLocked'?: boolean | null;
    'lockedDate'?: DateRangeModel;
    'automaticDurationTimer'?: Set<boolean> | null;
    'createdByIds'?: Set<string> | null;
    'createdDate'?: DateRangeModel;
    'startDate'?: DateRangeModel;
    'endDate'?: DateRangeModel;
    'tagNames'?: Set<string> | null;
    'attributes'?: { [key: string]: Set<string>; } | null;
    'isDeleted'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "string"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Set<TestPlanStatusModel>"
        },
        {
            "name": "globalIds",
            "baseName": "globalIds",
            "type": "Set<number>"
        },
        {
            "name": "isLocked",
            "baseName": "isLocked",
            "type": "boolean"
        },
        {
            "name": "lockedDate",
            "baseName": "lockedDate",
            "type": "DateRangeModel"
        },
        {
            "name": "automaticDurationTimer",
            "baseName": "automaticDurationTimer",
            "type": "Set<boolean>"
        },
        {
            "name": "createdByIds",
            "baseName": "createdByIds",
            "type": "Set<string>"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "DateRangeModel"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "DateRangeModel"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "DateRangeModel"
        },
        {
            "name": "tagNames",
            "baseName": "tagNames",
            "type": "Set<string>"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: Set<string>; }"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanSearchQueryModel.attributeTypeMap;
    }
}

