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
import { AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel } from './attachmentChangeViewModelArrayWorkItemChangedFieldViewModel';
import { AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel } from './autoTestChangeViewModelArrayWorkItemChangedFieldViewModel';
import { BooleanWorkItemChangedFieldViewModel } from './booleanWorkItemChangedFieldViewModel';
import { GuidWorkItemChangedFieldViewModel } from './guidWorkItemChangedFieldViewModel';
import { Int32WorkItemChangedFieldViewModel } from './int32WorkItemChangedFieldViewModel';
import { Int64WorkItemChangedFieldViewModel } from './int64WorkItemChangedFieldViewModel';
import { StringArrayWorkItemChangedFieldViewModel } from './stringArrayWorkItemChangedFieldViewModel';
import { StringWorkItemChangedFieldViewModel } from './stringWorkItemChangedFieldViewModel';
import { WorkItemChangedAttributeViewModel } from './workItemChangedAttributeViewModel';
import { WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel } from './workItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel';
import { WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel } from './workItemStepChangeViewModelArrayWorkItemChangedFieldViewModel';

export class WorkItemChangedFieldsViewModel {
    'name'?: StringWorkItemChangedFieldViewModel;
    'isDeleted'?: BooleanWorkItemChangedFieldViewModel;
    'projectId'?: GuidWorkItemChangedFieldViewModel;
    'isAutomated'?: BooleanWorkItemChangedFieldViewModel;
    'sectionId'?: GuidWorkItemChangedFieldViewModel;
    'description'?: StringWorkItemChangedFieldViewModel;
    'state'?: StringWorkItemChangedFieldViewModel;
    'priority'?: StringWorkItemChangedFieldViewModel;
    'duration'?: Int32WorkItemChangedFieldViewModel;
    'attributes'?: { [key: string]: WorkItemChangedAttributeViewModel; } | null;
    'steps'?: WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel;
    'preconditionSteps'?: WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel;
    'postconditionSteps'?: WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel;
    'autoTests'?: AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel;
    'attachments'?: AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel;
    'tags'?: StringArrayWorkItemChangedFieldViewModel;
    'links'?: WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel;
    'globalId'?: Int64WorkItemChangedFieldViewModel;
    'versionNumber'?: Int32WorkItemChangedFieldViewModel;
    'entityTypeName'?: StringWorkItemChangedFieldViewModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "StringWorkItemChangedFieldViewModel"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "BooleanWorkItemChangedFieldViewModel"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "GuidWorkItemChangedFieldViewModel"
        },
        {
            "name": "isAutomated",
            "baseName": "isAutomated",
            "type": "BooleanWorkItemChangedFieldViewModel"
        },
        {
            "name": "sectionId",
            "baseName": "sectionId",
            "type": "GuidWorkItemChangedFieldViewModel"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "StringWorkItemChangedFieldViewModel"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "StringWorkItemChangedFieldViewModel"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "StringWorkItemChangedFieldViewModel"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Int32WorkItemChangedFieldViewModel"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: WorkItemChangedAttributeViewModel; }"
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "preconditionSteps",
            "baseName": "preconditionSteps",
            "type": "WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "postconditionSteps",
            "baseName": "postconditionSteps",
            "type": "WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "autoTests",
            "baseName": "autoTests",
            "type": "AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "StringArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel"
        },
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "Int64WorkItemChangedFieldViewModel"
        },
        {
            "name": "versionNumber",
            "baseName": "versionNumber",
            "type": "Int32WorkItemChangedFieldViewModel"
        },
        {
            "name": "entityTypeName",
            "baseName": "entityTypeName",
            "type": "StringWorkItemChangedFieldViewModel"
        }    ];

    static getAttributeTypeMap() {
        return WorkItemChangedFieldsViewModel.attributeTypeMap;
    }
}
