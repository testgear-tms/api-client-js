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
import { AutoTestStepModel } from './autoTestStepModel';
import { LabelShortModel } from './labelShortModel';
import { LinkModel } from './linkModel';

export class AutoTestModelV2GetModel {
    /**
    * This property is used to set autotest identifier from client system
    */
    'externalId'?: string | null;
    'links'?: Array<LinkModel> | null;
    /**
    * This property is used to link autotest with project
    */
    'projectId'?: string;
    'name'?: string | null;
    'namespace'?: string | null;
    'classname'?: string | null;
    'steps'?: Array<AutoTestStepModel> | null;
    'setup'?: Array<AutoTestStepModel> | null;
    'teardown'?: Array<AutoTestStepModel> | null;
    'globalId'?: number;
    'createdDate'?: Date | null;
    'modifiedDate'?: Date | null;
    'createdById'?: string;
    'modifiedById'?: string | null;
    'labels'?: Array<LabelShortModel> | null;
    /**
    * Unique ID of the entity
    */
    'id'?: string;
    /**
    * Indicates if the entity is deleted
    */
    'isDeleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkModel>"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "classname",
            "baseName": "classname",
            "type": "string"
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "setup",
            "baseName": "setup",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "teardown",
            "baseName": "teardown",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "number"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<LabelShortModel>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AutoTestModelV2GetModel.attributeTypeMap;
    }
}
