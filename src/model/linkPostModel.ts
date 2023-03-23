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
import { LinkType } from './linkType';

export class LinkPostModel {
    /**
    * Link name.
    */
    'title'?: string | null;
    /**
    * Address can be specified without protocol, but necessarily with the domain.
    */
    'url': string;
    /**
    * Link description.
    */
    'description'?: string | null;
    'type'?: LinkType;
    'hasInfo'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LinkType"
        },
        {
            "name": "hasInfo",
            "baseName": "hasInfo",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LinkPostModel.attributeTypeMap;
    }
}

