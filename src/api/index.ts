import { createHttpClient } from "../shared";
import { AxiosResponse } from "axios";

import {
    MXIKSearchParamsObj,
    MXIKSearchOptionalParamsObj,
    MXIKSearchSymbolResponseObj,
    MXIKSearchSubpositionsResponseObj,
    MXIKCode,
    MXIKDetail,
} from "../typings";

export const http = createHttpClient({
    baseURL: import.meta.env.VITE_MXIK_API_URL,
});

/**
 * Search items via keyword
 * @param keyword {string}
 * @param limit {number}
 * @returns {AxiosResponse}
 */
export function MXIKSearchSymbol({
    keyword = "",
    limit = 20,
    lang,
}: MXIKSearchParamsObj): Promise<AxiosResponse<MXIKSearchSymbolResponseObj>> {
    return http.get("cls-api/mxik/search-symbol", {
        params: {
            search_text: keyword,
            size: limit,
            lang,
        },
    });
}

/**
 * Search items by mxik code
 * @param {Object} params
 * @param {number} params.keyword
 * @param {number} params.limit
 * @returns {AxiosResponse}
 */
export function MXIKSearchByParams({
    keyword,
    limit = 20,
    lang,
}: MXIKSearchParamsObj): Promise<AxiosResponse<MXIKSearchSymbolResponseObj>> {
    return http.get("cls-api/mxik/search/by-params", {
        params: {
            mxikCode: keyword,
            size: limit,
            lang,
        },
    });
}

/**
 * Get MXIK details by code
 * @param code {number}
 * @return {AxiosResponse}
 */
export function MXIKByCode(
    code: MXIKCode,
    { limit, lang }: MXIKSearchOptionalParamsObj
): Promise<AxiosResponse<MXIKDetail>> {
    return http.get("cls-api/mxik/get/by-mxik", {
        params: {
            mxikCode: code,
            limit,
            lang,
        },
    });
}

/**
 * Get MXIK details by subpositions
 * @param code {number}
 * @return {AxiosResponse}
 */
export function MXIKBySubpositions({
    keyword = "",
    limit = 20,
    lang,
}: MXIKSearchParamsObj): Promise<
    AxiosResponse<MXIKSearchSubpositionsResponseObj>
> {
    return http.get("cls-api/mxik/search-subposition", {
        params: {
            search_text: keyword,
            size: limit,
            lang,
        },
    });
}
