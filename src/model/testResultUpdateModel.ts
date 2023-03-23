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
import { AttachmentPutModel } from './attachmentPutModel';
import { AttachmentPutModelAutoTestStepResultsModel } from './attachmentPutModelAutoTestStepResultsModel';
import { LinkModel } from './linkModel';
import { StepResultModel } from './stepResultModel';
import { TestResultStepCommentPutModel } from './testResultStepCommentPutModel';

export class TestResultUpdateModel {
    'setupResults'?: Array<AttachmentPutModelAutoTestStepResultsModel> | null;
    'teardownResults'?: Array<AttachmentPutModelAutoTestStepResultsModel> | null;
    'durationInMs'?: number | null;
    'stepComments'?: Array<TestResultStepCommentPutModel> | null;
    'failureClassIds'?: Array<string> | null;
    'outcome'?: string | null;
    'comment'?: string | null;
    'links'?: Array<LinkModel> | null;
    'stepResults'?: Array<StepResultModel> | null;
    'attachments'?: Array<AttachmentPutModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "setupResults",
            "baseName": "setupResults",
            "type": "Array<AttachmentPutModelAutoTestStepResultsModel>"
        },
        {
            "name": "teardownResults",
            "baseName": "teardownResults",
            "type": "Array<AttachmentPutModelAutoTestStepResultsModel>"
        },
        {
            "name": "durationInMs",
            "baseName": "durationInMs",
            "type": "number"
        },
        {
            "name": "stepComments",
            "baseName": "stepComments",
            "type": "Array<TestResultStepCommentPutModel>"
        },
        {
            "name": "failureClassIds",
            "baseName": "failureClassIds",
            "type": "Array<string>"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkModel>"
        },
        {
            "name": "stepResults",
            "baseName": "stepResults",
            "type": "Array<StepResultModel>"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AttachmentPutModel>"
        }    ];

    static getAttributeTypeMap() {
        return TestResultUpdateModel.attributeTypeMap;
    }
}
