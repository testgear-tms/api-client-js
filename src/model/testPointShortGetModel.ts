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
import { LastTestResultModel } from './lastTestResultModel';
import { TestPointStatus } from './testPointStatus';
import { WorkItemPriorityModel } from './workItemPriorityModel';

export class TestPointShortGetModel {
    /**
    * Unique ID of the test point
    */
    'id'?: string;
    /**
    * Creation date of the test point
    */
    'createdDate'?: Date;
    /**
    * Unique ID of the test point creator
    */
    'createdById'?: string;
    /**
    * Last modification date of the test point
    */
    'modifiedDate'?: Date | null;
    /**
    * Unique ID of the test point last editor
    */
    'modifiedById'?: string | null;
    /**
    * Unique ID of the test point assigned user
    */
    'testerId'?: string | null;
    /**
    * Collection of the test point parameters
    */
    'parameters'?: { [key: string]: string; } | null;
    /**
    * Collection of attributes of work item the test point represents
    */
    'attributes'?: { [key: string]: any; } | null;
    /**
    * Collection of the test point tags
    */
    'tags'?: Array<string> | null;
    /**
    * Collection of the test point links
    */
    'links'?: Array<string> | null;
    /**
    * Unique ID of test suite the test point assigned to
    */
    'testSuiteId'?: string;
    /**
    * Unique ID of work item the test point represents
    */
    'workItemId'?: string;
    /**
    * Global ID of work item the test point represents
    */
    'workItemGlobalId'?: number;
    /**
    * Unique ID of work item version the test point represents
    */
    'workItemVersionId'?: string;
    'status': TestPointStatus;
    'priority': WorkItemPriorityModel;
    /**
    * Indicates if the test point represents an autotest
    */
    'isAutomated'?: boolean;
    /**
    * Name of the test point
    */
    'name'?: string | null;
    /**
    * Unique ID of the test point configuration
    */
    'configurationId'?: string;
    /**
    * Duration of the test point
    */
    'duration'?: number;
    /**
    * Unique ID of section where work item the test point represents is located
    */
    'sectionId'?: string;
    /**
    * Name of section where work item the test point represents is located
    */
    'sectionName'?: string | null;
    /**
    * Unique ID of the test point project
    */
    'projectId'?: string;
    'lastTestResult': LastTestResultModel;
    /**
    * Unique ID of work item iteration the test point represents
    */
    'iterationId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "string"
        },
        {
            "name": "testerId",
            "baseName": "testerId",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<string>"
        },
        {
            "name": "testSuiteId",
            "baseName": "testSuiteId",
            "type": "string"
        },
        {
            "name": "workItemId",
            "baseName": "workItemId",
            "type": "string"
        },
        {
            "name": "workItemGlobalId",
            "baseName": "workItemGlobalId",
            "type": "number"
        },
        {
            "name": "workItemVersionId",
            "baseName": "workItemVersionId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TestPointStatus"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "WorkItemPriorityModel"
        },
        {
            "name": "isAutomated",
            "baseName": "isAutomated",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "sectionId",
            "baseName": "sectionId",
            "type": "string"
        },
        {
            "name": "sectionName",
            "baseName": "sectionName",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "lastTestResult",
            "baseName": "lastTestResult",
            "type": "LastTestResultModel"
        },
        {
            "name": "iterationId",
            "baseName": "iterationId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TestPointShortGetModel.attributeTypeMap;
    }
}

