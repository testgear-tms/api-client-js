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
import { WorkItemEntityTypes } from './workItemEntityTypes';
import { WorkItemPriorityModel } from './workItemPriorityModel';
import { WorkItemStates } from './workItemStates';

/**
* Collection of filters to apply to search
*/
export class WorkItemFilterModel {
    /**
    * Name or identifier (UUID) of work item
    */
    'nameOrId'?: string | null;
    /**
    * Collection of identifiers of work items which need to be included in result regardless of filtering
    */
    'includeIds'?: Set<string> | null;
    /**
    * Collection of identifiers of work items which need to be excluded from result regardless of filtering
    */
    'excludeIds'?: Set<string> | null;
    /**
    * Name of work item
    */
    'name'?: string | null;
    /**
    * Specifies a work item unique IDs to search for
    */
    'ids'?: Set<string> | null;
    /**
    * Collection of global (integer) identifiers
    */
    'globalIds'?: Set<number> | null;
    /**
    * Custom attributes of work item
    */
    'attributes'?: { [key: string]: Set<string>; } | null;
    /**
    * Is result must consist of only actual/deleted work items
    */
    'isDeleted'?: boolean | null;
    /**
    * Collection of project identifiers
    */
    'projectIds'?: Set<string> | null;
    /**
    * Collection of section identifiers
    */
    'sectionIds'?: Set<string> | null;
    /**
    * Collection of identifiers of users who created work item
    */
    'createdByIds'?: Set<string> | null;
    /**
    * Collection of identifiers of users who applied last modification to work item
    */
    'modifiedByIds'?: Set<string> | null;
    /**
    * Collection of states of work item
    */
    'states'?: Set<WorkItemStates> | null;
    /**
    * Collection of priorities of work item
    */
    'priorities'?: Set<WorkItemPriorityModel> | null;
    /**
    * Collection of types of work item
    */
    'types'?: Set<WorkItemEntityTypes> | null;
    'createdDate'?: DateTimeRangeSelectorModel;
    'modifiedDate'?: DateTimeRangeSelectorModel;
    'duration'?: Int32RangeSelectorModel;
    /**
    * Is result must consist of only manual/automated work items
    */
    'isAutomated'?: boolean | null;
    /**
    * Collection of tags
    */
    'tags'?: Set<string> | null;
    /**
    * Collection of identifiers of linked autotests
    */
    'autoTestIds'?: Set<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nameOrId",
            "baseName": "nameOrId",
            "type": "string"
        },
        {
            "name": "includeIds",
            "baseName": "includeIds",
            "type": "Set<string>"
        },
        {
            "name": "excludeIds",
            "baseName": "excludeIds",
            "type": "Set<string>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Set<string>"
        },
        {
            "name": "globalIds",
            "baseName": "globalIds",
            "type": "Set<number>"
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
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Set<string>"
        },
        {
            "name": "sectionIds",
            "baseName": "sectionIds",
            "type": "Set<string>"
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
            "name": "states",
            "baseName": "states",
            "type": "Set<WorkItemStates>"
        },
        {
            "name": "priorities",
            "baseName": "priorities",
            "type": "Set<WorkItemPriorityModel>"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Set<WorkItemEntityTypes>"
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
            "name": "duration",
            "baseName": "duration",
            "type": "Int32RangeSelectorModel"
        },
        {
            "name": "isAutomated",
            "baseName": "isAutomated",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Set<string>"
        },
        {
            "name": "autoTestIds",
            "baseName": "autoTestIds",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return WorkItemFilterModel.attributeTypeMap;
    }
}

