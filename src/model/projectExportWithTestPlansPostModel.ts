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

export class ProjectExportWithTestPlansPostModel {
    /**
    * Specifies the IDs of test plans to be exported with the project.<br />  In this parameter, \"<b>string</b>\" values are IDs of the test plans.<br />  To get the test plan IDs, use the `GET /api/v2/projects/{projectId}/testPlans` method.
    */
    'testPlansIds'?: Set<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "testPlansIds",
            "baseName": "testPlansIds",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return ProjectExportWithTestPlansPostModel.attributeTypeMap;
    }
}

