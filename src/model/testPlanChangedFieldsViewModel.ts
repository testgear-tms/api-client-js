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
import { BooleanNullableTestPlanChangedFieldViewModel } from './booleanNullableTestPlanChangedFieldViewModel';
import { BooleanTestPlanChangedFieldViewModel } from './booleanTestPlanChangedFieldViewModel';
import { CustomAttributeChangeModel } from './customAttributeChangeModel';
import { PeriodViewModelTestPlanChangedFieldViewModel } from './periodViewModelTestPlanChangedFieldViewModel';
import { StringArrayTestPlanChangedFieldViewModel } from './stringArrayTestPlanChangedFieldViewModel';
import { StringTestPlanChangedFieldViewModel } from './stringTestPlanChangedFieldViewModel';
import { TestPointChangeViewModelTestPlanChangedFieldViewModel } from './testPointChangeViewModelTestPlanChangedFieldViewModel';
import { TestResultChangeViewModelTestPlanChangedFieldViewModel } from './testResultChangeViewModelTestPlanChangedFieldViewModel';
import { TestSuiteChangeViewModelTestPlanChangedFieldViewModel } from './testSuiteChangeViewModelTestPlanChangedFieldViewModel';

export class TestPlanChangedFieldsViewModel {
    'name'?: StringTestPlanChangedFieldViewModel;
    'description'?: StringTestPlanChangedFieldViewModel;
    'productName'?: StringTestPlanChangedFieldViewModel;
    'build'?: StringTestPlanChangedFieldViewModel;
    'period'?: PeriodViewModelTestPlanChangedFieldViewModel;
    'status'?: StringTestPlanChangedFieldViewModel;
    'tags'?: StringArrayTestPlanChangedFieldViewModel;
    'testSuite'?: TestSuiteChangeViewModelTestPlanChangedFieldViewModel;
    'testPoints'?: TestPointChangeViewModelTestPlanChangedFieldViewModel;
    'testResults'?: TestResultChangeViewModelTestPlanChangedFieldViewModel;
    'locking'?: BooleanTestPlanChangedFieldViewModel;
    'hasAutomaticDurationTimer'?: BooleanNullableTestPlanChangedFieldViewModel;
    'attributes'?: { [key: string]: CustomAttributeChangeModel; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "StringTestPlanChangedFieldViewModel"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "StringTestPlanChangedFieldViewModel"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "StringTestPlanChangedFieldViewModel"
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "StringTestPlanChangedFieldViewModel"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "PeriodViewModelTestPlanChangedFieldViewModel"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StringTestPlanChangedFieldViewModel"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "StringArrayTestPlanChangedFieldViewModel"
        },
        {
            "name": "testSuite",
            "baseName": "testSuite",
            "type": "TestSuiteChangeViewModelTestPlanChangedFieldViewModel"
        },
        {
            "name": "testPoints",
            "baseName": "testPoints",
            "type": "TestPointChangeViewModelTestPlanChangedFieldViewModel"
        },
        {
            "name": "testResults",
            "baseName": "testResults",
            "type": "TestResultChangeViewModelTestPlanChangedFieldViewModel"
        },
        {
            "name": "locking",
            "baseName": "locking",
            "type": "BooleanTestPlanChangedFieldViewModel"
        },
        {
            "name": "hasAutomaticDurationTimer",
            "baseName": "hasAutomaticDurationTimer",
            "type": "BooleanNullableTestPlanChangedFieldViewModel"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: CustomAttributeChangeModel; }"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanChangedFieldsViewModel.attributeTypeMap;
    }
}

