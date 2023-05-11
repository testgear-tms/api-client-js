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
import { AttachmentSubGetModel } from './attachmentSubGetModel';
import { AutotestResultReasonSubGetModel } from './autotestResultReasonSubGetModel';
import { LinkSubGetModel } from './linkSubGetModel';
import { TestResultOutcome } from './testResultOutcome';

export class TestResultShortGetModel {
    /**
    * Unique ID of test result
    */
    'id'?: string;
    /**
    * Name of autotest represented by the test result
    */
    'name'?: string | null;
    /**
    * Global ID of autotest represented by test result
    */
    'autotestGlobalId'?: number;
    /**
    * Unique ID of test run where test result is located
    */
    'testRunId'?: string;
    /**
    * Unique ID of configuration which test result uses
    */
    'configurationId'?: string;
    /**
    * Name of configuration which test result uses
    */
    'configurationName'?: string | null;
    'outcome': TestResultOutcome;
    /**
    * Collection of result reasons which test result have
    */
    'resultReasons'?: Array<AutotestResultReasonSubGetModel> | null;
    /**
    * Comment to test result
    */
    'comment'?: string | null;
    /**
    * Date when test result has been set
    */
    'date'?: Date;
    /**
    * Time which it took to run the test
    */
    'duration'?: number | null;
    /**
    * Collection of links attached to test result
    */
    'links'?: Array<LinkSubGetModel> | null;
    /**
    * Collection of files attached to test result
    */
    'attachments'?: Array<AttachmentSubGetModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "autotestGlobalId",
            "baseName": "autotestGlobalId",
            "type": "number"
        },
        {
            "name": "testRunId",
            "baseName": "testRunId",
            "type": "string"
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string"
        },
        {
            "name": "configurationName",
            "baseName": "configurationName",
            "type": "string"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "TestResultOutcome"
        },
        {
            "name": "resultReasons",
            "baseName": "resultReasons",
            "type": "Array<AutotestResultReasonSubGetModel>"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkSubGetModel>"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AttachmentSubGetModel>"
        }    ];

    static getAttributeTypeMap() {
        return TestResultShortGetModel.attributeTypeMap;
    }
}

