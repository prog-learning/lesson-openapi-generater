/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from '../models/Item';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemsService {

    /**
     * タスクリストを全て取得
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static getItemsItemsGet(): CancelablePromise<Array<Item>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * タスクリストを新しく作成
     * @param requestBody
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static createItemItemsPost(
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/items/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Item By Id
     * @param itemId
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static getItemByIdItemsItemIdGet(
        itemId: number,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Item
     * @param itemId
     * @param requestBody
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static updateItemItemsItemIdPut(
        itemId: number,
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/items/{item_id}',
            path: {
                'item_id': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Item
     * @param itemId
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static deleteItemItemsItemIdDelete(
        itemId: number,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/items/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
