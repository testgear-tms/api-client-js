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
import { DateTimeRangeSelectorModel } from './dateTimeRangeSelectorModel';
import { Int32RangeSelectorModel } from './int32RangeSelectorModel';
import { WorkItemPriorityModel } from './workItemPriorityModel';
import { WorkItemStates } from './workItemStates';

export class TestSuiteWorkItemsSearchModel {
    /**
    * Name of work item
    */
    'name'?: string | null;
    /**
    * Collection of global (integer) identifiers
    */
    'globalIds'?: Set<number> | null;
    /**
    * Collection of section identifiers
    */
    'sectionIds'?: Set<string> | null;
    /**
    * Collection of priorities of work item
    */
    'priorities'?: Set<WorkItemPriorityModel> | null;
    /**
    * Is result must consist of only manual/automated work items
    */
    'isAutomated'?: boolean | null;
    /**
    * Collection of states of work item
    */
    'states'?: Set<WorkItemStates> | null;
    'duration'?: Int32RangeSelectorModel;
    'createdDate'?: DateTimeRangeSelectorModel;
    'modifiedDate'?: DateTimeRangeSelectorModel;
    /**
    * Collection of identifiers of users who created work item
    */
    'createdByIds'?: Set<string> | null;
    /**
    * Collection of identifiers of users who applied last modification to work item
    */
    'modifiedByIds'?: Set<string> | null;
    /**
    * Custom attributes of work item
    */
    'attributes'?: { [key: string]: Set<string>; } | null;
    /**
    * Is result must consist of only actual/deleted work items
    */
    'isDeleted'?: boolean | null;
    /**
    * Collection of tags
    */
    'tagNames'?: Set<string> | null;
    /**
    * Collection of types of work item  <br>Allowed values: `TestCases`, `CheckLists`, `SharedSteps`
    */
    'entityTypes'?: Set<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "globalIds",
            "baseName": "globalIds",
            "type": "Set<number>"
        },
        {
            "name": "sectionIds",
            "baseName": "sectionIds",
            "type": "Set<string>"
        },
        {
            "name": "priorities",
            "baseName": "priorities",
            "type": "Set<WorkItemPriorityModel>"
        },
        {
            "name": "isAutomated",
            "baseName": "isAutomated",
            "type": "boolean"
        },
        {
            "name": "states",
            "baseName": "states",
            "type": "Set<WorkItemStates>"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Int32RangeSelectorModel"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "DateTimeRangeSelectorModel"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "DateTimeRangeSelectorModel"
        },
        {
            "name": "createdByIds",
            "baseName": "createdByIds",
            "type": "Set<string>"
        },
        {
            "name": "modifiedByIds",
            "baseName": "modifiedByIds",
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
        },
        {
            "name": "tagNames",
            "baseName": "tagNames",
            "type": "Set<string>"
        },
        {
            "name": "entityTypes",
            "baseName": "entityTypes",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return TestSuiteWorkItemsSearchModel.attributeTypeMap;
    }
}

