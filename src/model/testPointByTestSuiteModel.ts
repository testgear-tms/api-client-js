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

export class TestPointByTestSuiteModel {
    'id'?: string;
    'testerId'?: string | null;
    'workItemId'?: string | null;
    'configurationId'?: string | null;
    /**
    * Applies one of these values: Blocked, NoResults, Failed, Passed
    */
    'status'?: string | null;
    'lastTestResultId'?: string | null;
    'iterationId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "testerId",
            "baseName": "testerId",
            "type": "string"
        },
        {
            "name": "workItemId",
            "baseName": "workItemId",
            "type": "string"
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "lastTestResultId",
            "baseName": "lastTestResultId",
            "type": "string"
        },
        {
            "name": "iterationId",
            "baseName": "iterationId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TestPointByTestSuiteModel.attributeTypeMap;
    }
}

