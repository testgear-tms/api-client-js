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

export class TestRunFillByWorkItemsPostModel {
    /**
    * Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs.
    */
    'configurationIds': Array<string>;
    /**
    * Specifies the work item GUIDs, from which test points are created. You can specify several GUIDs.
    */
    'workItemIds': Array<string>;
    /**
    * Specifies the GUID of the project, in which a test run will be created.
    */
    'projectId': string;
    /**
    * Specifies the GUID of the test plan, within which the test run will be created.
    */
    'testPlanId': string;
    /**
    * Specifies the name of the test run.
    */
    'name'?: string | null;
    /**
    * Specifies the test run description.
    */
    'description'?: string | null;
    /**
    * Specifies the test run launch source.
    */
    'launchSource'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configurationIds",
            "baseName": "configurationIds",
            "type": "Array<string>"
        },
        {
            "name": "workItemIds",
            "baseName": "workItemIds",
            "type": "Array<string>"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "testPlanId",
            "baseName": "testPlanId",
            "type": "string"
        },
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
            "name": "launchSource",
            "baseName": "launchSource",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TestRunFillByWorkItemsPostModel.attributeTypeMap;
    }
}

